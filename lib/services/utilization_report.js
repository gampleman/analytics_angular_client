/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('UtilizationReport', function() {
  this.$get = function($http, wrapPromise) {
    var api = {};
    /**
     * @ngdoc method
     * @name UtilizationReport#index
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Returns an array of instances with their utilization and cost.
     * @example
     *
     *    UtilizationReport.index({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.index = function(data) {
      var url = {
        path: 'undefined/api/utilization_report',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.start_time == null) {
        throw new Error('Required field \'start_time\' is missing from the passsed data object');
      } else {
        params.start_time = data.start_time.encodeJSON ? data.start_time.encodeJSON() : data.start_time;
        delete data.start_time;
      }
      if (data.end_time == null) {
        throw new Error('Required field \'end_time\' is missing from the passsed data object');
      } else {
        params.end_time = data.end_time.encodeJSON ? data.end_time.encodeJSON() : data.end_time;
        delete data.end_time;
      }
      if (data.instance_filters != null) {
        params.instance_filters = data.instance_filters.encodeJSON ? data.instance_filters.encodeJSON() : data.instance_filters;
        delete data.instance_filters;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return response.data;
        }
      }));
    };
    return api;
  };
});
