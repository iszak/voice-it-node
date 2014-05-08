module.exports = function(client) {
  return {
    authentication: function(data) {
      var headers = {
        email: data.email,
        password: data.password,
        accuracy: data.accuracy,
        accuracyPasses: data.accuracyPasses,
        accuracyPassIncrement: data.accuracyPassIncrement,
        confidence: data.confidence,
      };

      var body = data.wav;

      return client.request('POST', 'authentications', headers, body);
    },


    authenticationByWavUrl: function(data) {
      var headers = {
        email: data.email,
        password: data.password,
        accuracy: data.accuracy,
        accuracyPasses: data.accuracyPasses,
        accuracyPassIncrement: data.accuracyPassIncrement,
        confidence: data.confidence,
        wavURL: data.wavURL,
      };

      return client.request('POST', 'authentications', headers);
    }
  };
};
