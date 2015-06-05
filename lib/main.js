/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient', []);
angular.module('AnalyticsAngularClient').value('wrapPromise', function(promise, isArray) {
  if (isArray) {
    var temp = [];
    temp.then = promise.then;
    promise = temp;
  }
  promise.then(function(result) {
    if (isArray) {
      _.fill(promise, result);
    } else {
      _.merge(promise, result);
    }
    return result;
  });
  return promise;
});
