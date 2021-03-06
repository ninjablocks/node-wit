// Generated by CoffeeScript 1.6.3
(function() {
  var Wit;

  Wit = (function() {
    function Wit(access_token, uri) {
      this.fs = require('fs');
      this.request = require('request');
      this.access_token = access_token;
      this.uri = uri || 'https://api.wit.ai';
    }

    Wit.prototype.analyze = function(options, callback) {
      var request_options,
        _this = this;
      request_options = {
        headers: {
          Authorization: "Bearer " + this.access_token
        }
      };
      if (options.audio_file) {
        request_options.method = 'POST';
        request_options.uri = this.uri + '/speech';
        request_options.headers['Content-Type'] = options.content_type || 'audio/wav;rate=8000';
        return this.fs.readFile(options.audio_file, function(err, data) {
          request_options.body = data;
          return _this.request(request_options, callback);
        });
      } else {
        request_options.method = 'GET';
        request_options.uri = this.uri + ("/message?q=" + (encodeURIComponent(options.user_text)));
        return this.request(request_options, callback);
      }
    };

    return Wit;

  })();

  module.exports = Wit;

}).call(this);
