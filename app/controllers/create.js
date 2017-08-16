import Ember from 'ember';
import DateConversion from '../utils/DateConversion';

export default Ember.Controller.extend({
	actions: {
		create: function () {
			var name = $('#create-name').val();
			var length = $('#create-length').val();
			var lengthUnit = $('#create-length-unit').val();
			var interval = $('#create-interval').val();
			var intervalUnit = $('#create-interval-unit').val();

            switch (lengthUnit) {
				case 'Minutes':
					length = DateConversion.minutesToSeconds(length);
					break;
                case 'Hours':
                    length = DateConversion.hoursToSeconds(length);
                    break;
                case 'Days':
                    length = DateConversion.daysToSeconds(length);
                    break;
                case 'Months':
                    length = DateConversion.monthsToSeconds(length);
                    break;
				default:
					break;
            }
            switch (intervalUnit) {
                case 'Minutes':
                    interval = DateConversion.minutesToSeconds(interval);
                    break;
                case 'Hours':
                    interval = DateConversion.hoursToSeconds(interval);
                    break;
                case 'Days':
                    interval = DateConversion.daysToSeconds(interval);
                    break;
                case 'Months':
                    interval = DateConversion.monthsToSeconds(interval);
                    break;
                default:
                    break;
            }


			// TODO create or use input validator
			if (name.length) {
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
