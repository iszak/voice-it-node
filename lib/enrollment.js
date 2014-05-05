var client = require('./client');

module.exports = {
  /**
   * Get all enrollments
   *
   * @param  {Array} data
   * @return {Promise}
   */
  getAll: function(data) {
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
   * @todo Remove the need to do two queries to differentiate id
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
