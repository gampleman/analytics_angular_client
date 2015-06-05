/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('Instances', function() {
  this.$get = function($http, wrapPromise, InstanceType, FilterType) {
    var api = {};
    /**
     * @ngdoc method
     * @name Instances#index
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Gets instances that overlap with the requested time period.
     * @example
     *
     *    Instances.index({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.index = function(data) {
      var url = {
        path: '/api/instances',
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
      if (data.timezone != null) {
        params.timezone = data.timezone;
        delete data.timezone;
      }
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
      if (data.order != null) {
        params.order = data.order.encodeJSON ? data.order.encodeJSON() : data.order;
        delete data.order;
      }
      if (data.limit != null) {
        params.limit = data.limit;
        delete data.limit;
      }
      if (data.offset != null) {
        params.offset = data.offset;
        delete data.offset;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return _.map(response.data, function(el) {
            return new InstanceType(el);
          });
        }
      }), true);
    };
    /**
     * @ngdoc method
     * @name Instances#count
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Gets the count of instances that overlap with the requested time period.
     * @example
     *
     *    Instances.count({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.count = function(data) {
      var url = {
        path: '/api/instances/actions/count',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.timezone != null) {
        params.timezone = data.timezone;
        delete data.timezone;
      }
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
    /**
     * @ngdoc method
     * @name Instances#exist
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Checks if any instances overlap with the requested time period.
     * @example
     *
     *    Instances.exist({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.exist = function(data) {
      var url = {
        path: '/api/instances/actions/exist',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.timezone != null) {
        params.timezone = data.timezone;
        delete data.timezone;
      }
      if (data.start_time != null) {
        params.start_time = data.start_time.encodeJSON ? data.start_time.encodeJSON() : data.start_time;
        delete data.start_time;
      }
      if (data.end_time != null) {
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
    /**
     * @ngdoc method
     * @name Instances#export
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Exports the instances that overlap with the requested time period in CSV format.
     * @example
     *
     *    Instances.export({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.export = function(data) {
      var url = {
        path: '/api/instances/actions/export',
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
      if (data.timezone != null) {
        params.timezone = data.timezone;
        delete data.timezone;
      }
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
      if (data.order != null) {
        params.order = data.order.encodeJSON ? data.order.encodeJSON() : data.order;
        delete data.order;
      }
      if (data.limit != null) {
        params.limit = data.limit;
        delete data.limit;
      }
      if (data.offset != null) {
        params.offset = data.offset;
        delete data.offset;
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
    /**
     * @ngdoc method
     * @name Instances#filterOptions
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Gets the filter options for instances that overlap with the requested time period.
     * @example
     *
     *    Instances.filterOptions({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.filterOptions = function(data) {
      var url = {
        path: '/api/instances/actions/filter_options',
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
      if (data.timezone != null) {
        params.timezone = data.timezone;
        delete data.timezone;
      }
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
      if (data.order != null) {
        params.order = data.order.encodeJSON ? data.order.encodeJSON() : data.order;
        delete data.order;
      }
      if (data.limit != null) {
        params.limit = data.limit;
        delete data.limit;
      }
      if (data.offset != null) {
        params.offset = data.offset;
        delete data.offset;
      }
      if (data.filter_types == null) {
        throw new Error('Required field \'filter_types\' is missing from the passsed data object');
      } else {
        params.filter_types = data.filter_types.encodeJSON ? data.filter_types.encodeJSON() : data.filter_types;
        delete data.filter_types;
      }
      if (data.search_term != null) {
        params.search_term = data.search_term;
        delete data.search_term;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return _.map(response.data, function(el) {
            return new FilterType(el);
          });
        }
      }), true);
    };
    return api;
  };
});
