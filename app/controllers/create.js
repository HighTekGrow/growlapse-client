import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		create: function () {
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
				Ember.$.ajax({
	                url: 'http://127.0.0.1:5002/timelapse',
	                type: 'POST',
	                data: params,
	                success: function (response) {
	                	t.transitionToRoute('timelapses')
	                },
	                error: function(jqXHR, textStatus, errorThrown) {
	                    Ember.Logger.error(textStatus, errorThrown, jqXHR);
	                }
	            });
			}
		}
	}
});
