define('growlapse-client/models/timelapses', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		id: _emberData.default.attr(),
		name: _emberData.default.attr(),
		interval: _emberData.default.attr(),
		length: _emberData.default.attr(),
		time_started: _emberData.default.attr()
	});
});