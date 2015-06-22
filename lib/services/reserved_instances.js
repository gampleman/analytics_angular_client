/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('ReservedInstances', function() {
  this.$get = function($http, wrapPromise, ReservedInstanceType, FilterType) {
    var api = {};
    /**
     * @ngdoc method
     * @name ReservedInstances#index
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Gets Reserved Instances that overlap with the requested time period.
     * @example
     *
     *    ReservedInstances.index({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.index = function(data) {
      var url = {
        path: '/api/reserved_instances',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.view != null) {
        params.view = data.view;
      }
      if (data.timezone != null) {
        params.timezone = data.timezone;
      }
      if (data.start_time == null) {
        throw new Error('Required field \'start_time\' is missing from the passsed data object');
      } else {
        params.start_time = data.start_time;
      }
      if (data.end_time == null) {
        throw new Error('Required field \'end_time\' is missing from the passsed data object');
      } else {
        params.end_time = data.end_time;
      }
      if (data.reserved_instance_filters != null) {
        params.reserved_instance_filters = data.reserved_instance_filters;
      }
      if (data.order != null) {
        params.order = data.order;
      }
      if (data.limit != null) {
        params.limit = data.limit;
      }
      if (data.offset != null) {
        params.offset = data.offset;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.status === 200) {
          return _.map(response.data, function(el) {
            return new ReservedInstanceType(el);
          });
        }
      }), true);
    };
    /**
     * @ngdoc method
     * @name ReservedInstances#count
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Gets the count of Reserved Instances that overlap with the requested time period.
     * @example
     *
     *    ReservedInstances.count({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.count = function(data) {
      var url = {
        path: '/api/reserved_instances/actions/count',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.timezone != null) {
        params.timezone = data.timezone;
      }
      if (data.start_time == null) {
        throw new Error('Required field \'start_time\' is missing from the passsed data object');
      } else {
        params.start_time = data.start_time;
      }
      if (data.end_time == null) {
        throw new Error('Required field \'end_time\' is missing from the passsed data object');
      } else {
        params.end_time = data.end_time;
      }
      if (data.reserved_instance_filters != null) {
        params.reserved_instance_filters = data.reserved_instance_filters;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.status === 200) {
          return response.data;
        }
      }));
    };
    /**
     * @ngdoc method
     * @name ReservedInstances#exist
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Checks if any Reserved Instances overlap with the requested time period.
     * @example
     *
     *    ReservedInstances.exist({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.exist = function(data) {
      var url = {
        path: '/api/reserved_instances/actions/exist',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.timezone != null) {
        params.timezone = data.timezone;
      }
      if (data.start_time != null) {
        params.start_time = data.start_time;
      }
      if (data.end_time != null) {
        params.end_time = data.end_time;
      }
      if (data.reserved_instance_filters != null) {
        params.reserved_instance_filters = data.reserved_instance_filters;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.status === 200) {
          return response.data;
        }
      }));
    };
    /**
     * @ngdoc method
     * @name ReservedInstances#export
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Exports the Reserved Instances that overlap with the requested time period in CSV format.
     * @example
     *
     *    ReservedInstances.export({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.export = function(data) {
      var url = {
        path: '/api/reserved_instances/actions/export',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.view != null) {
        params.view = data.view;
      }
      if (data.timezone != null) {
        params.timezone = data.timezone;
      }
      if (data.start_time == null) {
        throw new Error('Required field \'start_time\' is missing from the passsed data object');
      } else {
        params.start_time = data.start_time;
      }
      if (data.end_time == null) {
        throw new Error('Required field \'end_time\' is missing from the passsed data object');
      } else {
        params.end_time = data.end_time;
      }
      if (data.reserved_instance_filters != null) {
        params.reserved_instance_filters = data.reserved_instance_filters;
      }
      if (data.order != null) {
        params.order = data.order;
      }
      if (data.limit != null) {
        params.limit = data.limit;
      }
      if (data.offset != null) {
        params.offset = data.offset;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.status === 200) {
          return response.data;
        }
      }));
    };
    /**
     * @ngdoc method
     * @name ReservedInstances#filterOptions
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Gets the filter options for Reserved Instances that overlap with the requested time period.
     * @example
     *
     *    ReservedInstances.filterOptions({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.filterOptions = function(data) {
      var url = {
        path: '/api/reserved_instances/actions/filter_options',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.view != null) {
        params.view = data.view;
      }
      if (data.timezone != null) {
        params.timezone = data.timezone;
      }
      if (data.start_time == null) {
        throw new Error('Required field \'start_time\' is missing from the passsed data object');
      } else {
        params.start_time = data.start_time;
      }
      if (data.end_time == null) {
        throw new Error('Required field \'end_time\' is missing from the passsed data object');
      } else {
        params.end_time = data.end_time;
      }
      if (data.reserved_instance_filters != null) {
        params.reserved_instance_filters = data.reserved_instance_filters;
      }
      if (data.order != null) {
        params.order = data.order;
      }
      if (data.limit != null) {
        params.limit = data.limit;
      }
      if (data.offset != null) {
        params.offset = data.offset;
      }
      if (data.filter_types != null) {
        params.filter_types = data.filter_types;
      }
      if (data.search_term != null) {
        params.search_term = data.search_term;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.status === 200) {
          return _.map(response.data, function(el) {
            return new FilterType(el);
          });
        }
      }), true);
    };
    return api;
  };
});
