'use strict';

module.exports = function() {
  return {
    Authentication : require('./authentication'),
    Enrollment     : require('./enrollment'),
    User           : require('./user')
  };
};
