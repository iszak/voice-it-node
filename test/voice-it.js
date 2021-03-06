var assert = require('chai').assert;

suite('VoiceIt', function() {
  var VoiceIt;

  setup(function(){
    VoiceIt = require('../lib/voice-it');
  });


  suite('#constructor', function(){
    test('without new', function(){
      assert.instanceOf(
        VoiceIt({
          developerId: 'sample-id'
        }),
        VoiceIt
      );
    });

    test('with developer id', function(){
      VoiceIt('sample-id');

      // TODO: Assert is set
    });

    test('invalid options', function(){
      assert.throws(
        function(){
          new VoiceIt();
        },
        Error,
        'Options must be an object'
      );
    });


    test('invalid developer id', function(){
      assert.throws(
        function(){
          new VoiceIt({});
        },
        Error,
        'Developer ID is required'
      );
    });


    test('valid developer id', function(){
      var instance = new VoiceIt({
        developerId: 'sample-id'
      });
    });
  });
});
