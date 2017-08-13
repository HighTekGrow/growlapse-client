define('growlapse-client/controllers/create', ['exports', 'ember'], function (exports, _ember) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _ember.default.Controller.extend({
		actions: {
			create: function create() {
				var name = $('#create-name').val();
				var length = $('#create-length').val();
				var interval = $('#create-interval').val();

				// TODO create or use input validator
				if (name.length && length.length && interval.length) {
					var params = {
						'name': name,
						'length': length,
						'interval': interval
					};

					var t = this;
					_ember.default.$.ajax({
						url: 'http://127.0.0.1:5002/timelapse',
						type: 'POST',
						data: params,
						success: function success(response) {
							t.transitionToRoute('timelapses');
						},
						error: function error(jqXHR, textStatus, errorThrown) {
							_ember.default.Logger.error(textStatus, errorThrown, jqXHR);
						}
					});
				}
			}
		}
	});
});