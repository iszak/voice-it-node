var Promise = require('bluebird');
var CryptoJS = require('crypto-js');

var https = require('https');


function Client(defaults) {
  if (typeof defaults !== 'object') {
    throw new Error('Defaults must be an object');
  }

  this._defaults = defaults;
}

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
  var options = this.getDefaults();

  return new Promise(function(resolve, reject) {
    if (headers.password) {
      headers.password = CryptoJS.SHA256(headers.password).toString();
    }

    // Normalize
    var normalize = [
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


    Object.keys(headers).forEach(function(name) {
      var value = headers[name];

      if (normalize.indexOf(name) !== -1) {
        name = 'Vsit' + name[0].toUpperCase() + name.substr(1);
      }

      options.headers[name] = value;
    });

    options.path = '/sivservice/api/' + resource;
    options.method = method;

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

module.exports = Client;
