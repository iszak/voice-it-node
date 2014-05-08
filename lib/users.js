module.exports = function(client) {
  return {
    create: function(data) {
      var headers = {
        email: data.email,
        password: data.password,

        firstName: data.firstName,
        lastName: data.lastName,
        phone1: data.phone1,
        phone2: data.phone2,
        phone3: data.phone3
      };

      return client.request('POST', 'users', headers);
    },


    get: function(data) {
      var headers = {
        email: data.email,
        password: data.password,
        developerId: data.developerId,
      };

      return client.request('GET', 'users', headers);
    },


    set: function(data) {
      var headers = {
        email: data.email,
        password: data.password,
        developerId: data.developerId,

        firstName: data.firstName,
        lastName: data.lastName,
        phone1: data.phone1,
        phone2: data.phone2,
        phone3: data.phone3
      };

      return client.request('PUT', 'users', headers);
    },


    delete: function(data) {
      var headers = {
        email: data.email,
        password: data.password
      };

      return client.request('DELETE', 'users', headers);
    }
  };
};
