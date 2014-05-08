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
      };

      return client.request('GET', 'enrollments', headers);
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
        contentType: 'audio/wav'
      };

      var body = data.wav;

      return client.request('POST', 'enrollments', headers, body);
    },


    /**
     * Create enrollment by wav url
     *
     * @param  {Array} data
     * @return {Promise}
     */
    createByWavUrl: function() {
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
      };

      var url = 'enrollments/' + data.enrollment;


      return client.request('DELETE', url, headers);
    }
  };
};
