import DS from 'ember-data';

export default DS.Model.extend({
	id: DS.attr(),
	name: DS.attr(),
	interval: DS.attr(),
	length: DS.attr(),
	time_started: DS.attr()
});
