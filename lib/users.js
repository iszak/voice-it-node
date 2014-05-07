module.exports = function(client) {
  return {
    create: function(data) {
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

      return new client('users', 'POST', headers);
    },


    get: function(data) {
      var headers = {
        email: data.email,
        password: data.password,
        developerId: data.developerId,
      };

      return new client('users', 'GET', headers);
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

      return new client('users', 'PUT', headers);
    },


    delete: function(data) {
      var headers = {
        email: data.email,
        password: data.password,
        developerId: data.developerId
      };

      return new client('users', 'DELETE', headers);
    }
  }
};
