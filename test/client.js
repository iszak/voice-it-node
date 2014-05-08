var assert = require('chai').assert;

suite('Client', function() {
  var Client;

  setup(function(){
    Client = require('../lib/client');
  });


  suite('#constructor', function(){
    test('invalid options', function(){
      assert.throws(
        function(){
          new Client();
        },
        Error,
        'Defaults must be an object'
      );
    });


    test('get defaults', function() {
      var defaults = {
        hostname: 'siv.voiceprintportal.com',
        port: 443
      };

      var client = new Client(defaults);

      assert.equal(defaults, client.getDefaults());
    });


    test('set defaults', function() {
      var client = new Client({});

      var defaults = {
        hostname: 'siv.voiceprintportal.com',
        port: 443
      };

      client.setDefaults(defaults);

      assert.equal(defaults, client.getDefaults());
    });


    test('request', function() {
      var client = new Client({
        hostname: 'siv.voiceprintportal.com',
        port: 443
      });

      var headers = {

      };

      var body = '';

      var promise = client.request('GET', 'users', headers, body);

      assert.ok(promise.then);
    });
  });
});
