module.exports = function(client) {
  return {
    authentication: function(data) {
      var headers = {
        email: data.email,
        password: data.password,
        developerId: data.developerId,
        accuracy: data.accuracy,
        accuracyPasses: data.accuracyPasses,
        accuracyPassIncrement: data.accuracyPassIncrement,
        confidence: data.confidence,
      };

      var body = data.wav;

      return new client('authentications', 'POST', headers, body);
    },


    authenticationByWavUrl: function(data) {
      var headers = {
        email: data.email,
        password: data.password,
        developerId: data.developerId,
        accuracy: data.accuracy,
        accuracyPasses: data.accuracyPasses,
        accuracyPassIncrement: data.accuracyPassIncrement,
        confidence: data.confidence,
        wavURL: data.wavURL,
      };

      return new client('authentications', 'POST', headers);
    }
  }
};
