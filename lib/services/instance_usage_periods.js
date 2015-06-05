/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('InstanceUsagePeriods', function() {
  this.$get = function($http, wrapPromise, InstanceUsagePeriodType) {
    var api = {};
    /**
     * @ngdoc method
     * @name InstanceUsagePeriods#index
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Gets the instance usage periods of instances.
     * @example
     *
     *    InstanceUsagePeriods.index({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.index = function(data) {
      var url = {
        path: 'undefined/api/instance_usage_periods',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.view != null) {
        params.view = data.view;
        delete data.view;
      }
      if (data.instance_usage_period_filters == null) {
        throw new Error('Required field \'instance_usage_period_filters\' is missing from the passsed data object');
      } else {
        params.instance_usage_period_filters = data.instance_usage_period_filters.encodeJSON ? data.instance_usage_period_filters.encodeJSON() : data.instance_usage_period_filters;
        delete data.instance_usage_period_filters;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return response.data.map(function(el) {
            return new InstanceUsagePeriodType(el);
          });
        }
      }), true);
    };
    return api;
  };
});
