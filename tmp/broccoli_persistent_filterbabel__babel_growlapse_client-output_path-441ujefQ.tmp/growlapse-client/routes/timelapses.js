define('growlapse-client/routes/timelapses', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({
    model: function model() {
      return _ember.default.$.get('http://127.0.0.1:5002/timelapse').then(function (data) {
        window.console.log(data);
      });
    }
  });
});