define('growlapse-client/controllers/timelapses', ['exports', 'ember'], function (exports, _ember) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _ember.default.Controller.extend({
		actions: {
			getTimeLapses: function getTimeLapses() {
				var set = this.set.bind(this, 'model');
				_ember.default.$.getJSON('http://127.0.0.1:5002/timelapse').then(set);
			},
			preview: function preview(time_lapse) {
				window.open("http://127.0.0.1:5002/preview/" + time_lapse.id);
			},
			delete: function _delete(time_lapse) {
				var t = this;
				_ember.default.$.ajax({
					url: 'http://127.0.0.1:5002/timelapse/' + time_lapse.id,
					type: 'DELETE',
					success: function success(response) {
						t.set('model', response);
					},
					error: function error(jqXHR, textStatus, errorThrown) {
						_ember.default.Logger.error(textStatus, errorThrown, jqXHR);
					}
				});
			}
		},
		init: function init() {
			var controller = this;
			setInterval(function () {
				_ember.default.run(function () {
					controller.send('getTimeLapses');
				});
			}, 10000);
			_ember.default.run(function () {
				controller.send('getTimeLapses');
			});
		}
	});
});