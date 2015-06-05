/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('TempInstancePrices', function() {
  this.$get = function($http, wrapPromise) {
    var api = {};
    /**
     * @ngdoc method
     * @name TempInstancePrices#index
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Returns a JSON blob with all prices for Scenario Builder.
     * @example
     *
     *    TempInstancePrices.index({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.index = function(data) {
      var url = {
        path: 'undefined/api/temp_instance_prices',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
      }).then(function(response) {
        if (response.code === 200) {
          return response.data;
        }
      }));
    };
    return api;
  };
});
