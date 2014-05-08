'use strict';

function VoiceIt(options) {
  if (this instanceof VoiceIt === false) {
    return new VoiceIt(options);
  }

  if (typeof options === 'string') {
    options = {
      developerId: options
    };
  }

  if (typeof options !== 'object') {
    throw new Error('Options must be an object');
  }

  if (options.developerId == null) {
    throw new Error('Developer ID is required');
  }

  var Client;
  if (!options.client) {
    Client = require('./client');
  } else {
    Client = options.client;
  }

  var client = new Client({
    hostname: 'siv.voiceprintportal.com',
    port: 443,
    headers: {
      VsitDeveloperId: options.developerId
    }
  });


  this.authentications = require('./authentications')(client);
  this.enrollments     = require('./enrollments')(client);
  this.users           = require('./users')(client);
};


module.exports = VoiceIt;
