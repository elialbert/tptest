'use strict';

/* Filters */

angular.module('tp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);



angular.module('tp.filters', []).
  filter('byLevel', ['level', function(level) {
    return function(task) {
	if (task.level == level) {
	    return task;
	}
	return null;
    }
  }]);
