/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient', []);

function(arg, otherDeps) {
  return overridable(pathMatch[0], function() {
    return template(file, {
      imports: _.merge(otherDeps, deps)
    })(arg);
  });
}
