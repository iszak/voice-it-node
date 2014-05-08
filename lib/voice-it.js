'use strict';

function VoiceIt(options) {
  if (this instanceof VoiceIt === false) {
    return new VoiceIt(options);
  }

  if (typeof options !== 'object') {
    throw new Error('Options must be an object');
  }

  if (options.developerId == null) {
    throw new Error('Developer ID is required');
  }

  var client;
  if (!options.client) {
    client = require('./client');
  } else {
    client = options.client;
  }

  this.authentications = require('./authentications')(client);
  this.enrollments     = require('./enrollments')(client);
  this.users           = require('./users')(client);
};


module.exports = VoiceIt;
