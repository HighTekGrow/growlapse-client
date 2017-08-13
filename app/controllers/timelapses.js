import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		getTimeLapses: function () {
			var set = this.set.bind(this, 'model');
	    	Ember.$.getJSON('http://127.0.0.1:5002/timelapse').then(set);
		},
		preview: function (time_lapse) {
			window.open("http://127.0.0.1:5002/preview/" + time_lapse.id);
		},
		delete: function (time_lapse) {
			var t = this;
			Ember.$.ajax({
                url: 'http://127.0.0.1:5002/timelapse/' + time_lapse.id,
                type: 'DELETE',
                success: function (response) {
                	t.set('model', response);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    Ember.Logger.error(textStatus, errorThrown, jqXHR);
                }
            });
		}
	},
	init: function() {
		var controller = this;
		setInterval(function() {
			Ember.run(function() {
	            controller.send('getTimeLapses');
	        });
		}, 10000);
		Ember.run(function() {
            controller.send('getTimeLapses');
        });
	}
});
