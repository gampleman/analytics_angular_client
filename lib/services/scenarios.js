/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('Scenarios', function() {
  this.$get = function($http, wrapPromise, ScenarioType, TimeSeriesMetricsResultType) {
    var api = {};
    /**
     * @ngdoc method
     * @name Scenarios#create
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Create a new Scenario.
     * @example
     *
     *    Scenarios.create({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.create = function(data) {
      var url = {
        path: '/api/scenarios',
        method: 'POST'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.view != null) {
        params.view = data.view;
      }
      var payload = {};
      if (data.name != null) {
        payload.name = data.name;
      }
      if (data.is_persisted != null) {
        payload.is_persisted = data.is_persisted;
      }
      if (data.snapshot_timestamp == null) {
        throw new Error('Required field \'snapshot_timestamp\' is missing from the passsed data object');
      } else {
        payload.snapshot_timestamp = data.snapshot_timestamp;
      }
      if (data.filters != null) {
        payload.filters = data.filters;
      }
      if (data.private_cloud_instance_count != null) {
        payload.private_cloud_instance_count = data.private_cloud_instance_count;
      }
      if (data.is_blank != null) {
        payload.is_blank = data.is_blank;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.status === 201) {
          return new ScenarioType(response.data);
        }
      }));
    };
    /**
     * @ngdoc method
     * @name Scenarios#index
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * List all Scenarios.
     * @example
     *
     *    Scenarios.index({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.index = function(data) {
      var url = {
        path: '/api/scenarios',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.view != null) {
        params.view = data.view;
      }
      if (data.include_non_persisted != null) {
        params.include_non_persisted = data.include_non_persisted;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.status === 200) {
          return _.map(response.data, function(el) {
            return new ScenarioType(el);
          });
        }
      }), true);
    };
    /**
     * @ngdoc method
     * @name Scenarios#show
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Show a specific Scenario.
     * @example
     *
     *    Scenarios.show({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.show = function(data) {
      var url = {
        path: '/api/scenarios/' + data.id + '',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.view != null) {
        params.view = data.view;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.status === 200) {
          return new ScenarioType(response.data);
        }
      }));
    };
    /**
     * @ngdoc method
     * @name Scenarios#update
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Update the provided attributes of a Scenario.
     * @example
     *
     *    Scenarios.update({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.update = function(data) {
      var url = {
        path: '/api/scenarios/' + data.id + '',
        method: 'PATCH'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.view != null) {
        params.view = data.view;
      }
      var payload = {};
      if (data.name != null) {
        payload.name = data.name;
      }
      if (data.is_persisted != null) {
        payload.is_persisted = data.is_persisted;
      }
      if (data.snapshot_timestamp != null) {
        payload.snapshot_timestamp = data.snapshot_timestamp;
      }
      if (data.private_cloud_instance_count != null) {
        payload.private_cloud_instance_count = data.private_cloud_instance_count;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.status === 200) {
          return new ScenarioType(response.data);
        }
      }));
    };
    /**
     * @ngdoc method
     * @name Scenarios#destroy
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Delete a Scenario.
     * @example
     *
     *    Scenarios.destroy({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.destroy = function(data) {
      var url = {
        path: '/api/scenarios/' + data.id + '',
        method: 'DELETE'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.status === 204) {
          return response.data;
        }
      }));
    };
    /**
 * @ngdoc method
 * @name Scenarios#forecast
 * @param {Object} data
 *    This represents the data needed to fullfill this request. It is an object
 *    with the following keys:
 *
 * @returns {Promise} A promise for the response object.
 * @description
 * Run a simulation to generate a 3-year forecast showing the `average_instance_count`, `instance_upfront_cost`,
           `instance_usage_cost` and `instance_recurring_cost` metrics. This call might get major changes so it's best to avoid using it currently.
           If there are missing prices for any of the InstanceCombinations then these metrics will be excluded from the results for that InstanceCombination.
 * @example
 *
 *    Scenarios.forecast({
 *
 *    }).then(function(result) {
 *
 *    });
 */
    api.forecast = function(data) {
      var url = {
        path: '/api/scenarios/' + data.id + '/actions/forecast',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.view != null) {
        params.view = data.view;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.status === 200) {
          return new TimeSeriesMetricsResultType(response.data);
        }
      }));
    };
    return api;
  };
});
