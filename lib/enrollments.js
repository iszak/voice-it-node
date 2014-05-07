module.exports = function(client) {
  return {
    /**
     * Get all enrollments
     *
     * @param  {Array} data
     * @return {Promise}
     */
    get: function(data) {
      var headers = {
        email: data.email,
        password: data.password,
        developerId: data.developerId,
      };

      return new client('enrollments', 'GET', headers);
    },



    /**
     * Create enrollment
     *
     * @param  {Array} data
     * @return {Promise}
     */
    create: function(data) {
      var headers = {
        email: data.email,
        password: data.password,
        developerId: data.developerId,
        contentType: 'audio/wav'
      };

      var body = data.wav;

      return new client('enrollments', 'POST', headers, body);
    },


    /**
     * Create enrollment by wav url
     *
     * @param  {Array} data
     * @return {Promise}
     */
    createByWavUrl: function(data) {
      throw new Error('Not implemented');
    },


    /**
     * Delete enrollment
     *
     * @param  {Array} data
     * @return {Promise}
     */
    delete: function(data) {
      var headers = {
        email: data.email,
        password: data.password,
        developerId: data.developerId
      };

      var url = 'enrollments/' + data.enrollment;


      return new client(url, 'DELETE', headers);
    }
  };
};
