var Promise = require('bluebird');
var CryptoJS = require('crypto-js');

var https = require('https');


function Client(defaults) {
  if (typeof defaults !== 'object') {
    throw new Error('Defaults must be an object');
  }

  this._defaults = defaults;
};

/**
 * Set default options
 *
 * @return {Object}
 */
Client.prototype.getDefaults = function() {
  return this._defaults;
};

/**
 * Get default options
 *
 * @param {Object} defaults
 */
Client.prototype.setDefaults = function(defaults) {
  this._defaults = defaults;
};


Client.prototype.request = function(method, resource, headers, body) {
  var defaults = this.getDefaults();

  return new Promise(function(resolve, reject) {

  });
};

module.exports = Client;


module.exports = function(path, method, data, body) {
  return new Promise(function(resolve, reject) {
    if (data.password) {
      data.password = CryptoJS.SHA256(data.password).toString();
    }

    // Normalize
    var headersNormalize = [
      'developerId',

      'email',
      'password',
      'firstName',
      'lastName',
      'phone1',
      'phone2',
      'phone3',

      'accuracy',
      'accuracyPasses',
      'accuracyPassIncrement',
      'confidence',
    ];


    var headers = {};

    Object.keys(data).forEach(function(header) {
      var key, value;

      if (headersNormalize.indexOf(header) !== -1) {
        key = 'Vsit' + header[0].toUpperCase() + header.substr(1);
      } else {
        key = header;
      }

      value = data[header];

      headers[key] = value;
    });

    headers['Host'] = 'siv.voiceprintportal.com';

    var options = {
      hostname: 'siv.voiceprintportal.com',
      port: 443,
      path: '/sivservice/api/' + path,
      method: method,
      headers: headers
    };

    var req = https.request(options, function(res) {
      var data = [];

      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        data.push(chunk);
      });
      res.on('end', function() {
        var json;
        try {
          json = JSON.parse(data);
        } catch (error) {
          return reject(error);
        }

        if (Array.isArray(json.Result) === true) {
          return resolve(json);
        }

        if (typeof json.Result === 'string') {
          if (json.Result.toLowerCase().indexOf('success') !== -1) {
            return resolve(json);
          } else {
            return reject({
              message: json.Result
            });
          }
        }

        return reject({
          message: json
        });
      });
    }).on('error', function(err) {
      reject(err);
    });

    if (body) {
      req.write(body);
    }

    req.end();
  });
};
