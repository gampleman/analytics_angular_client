/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient', []);
angular.module('AnalyticsAngularClient').value('wrapPromise', function(promise, isArray) {
  var outcome = promise;
  if (isArray) {
    outcome = [];
    outcome.then = function() {
      return promise.then.apply(promise, arguments);
    };
  }
  promise.then(function(result) {
    if (isArray) {
      for (var i = 0, l = result.length; i < l; i++) {
        outcome.push(result[i]);
      };
    } else {
      _.merge(outcome, result);
    }
    return result;
  });
  return outcome;
});
