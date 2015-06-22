/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('InstanceMetrics', function() {
  this.$get = function($http, wrapPromise, MetricsResultType, TimeSeriesMetricsResultType) {
    var api = {};
    /**
 * @ngdoc method
 * @name InstanceMetrics#overall
 * @param {Object} data
 *    This represents the data needed to fullfill this request. It is an object
 *    with the following keys:
 *
 * @returns {Promise} A promise for the response object.
 * @description
 * Calculates the overall metrics for instance usages in a time period, e.g. show me the
          total cost of all my instances during the last month.
 * @example
 *
 *    InstanceMetrics.overall({
 *
 *    }).then(function(result) {
 *
 *    });
 */
    api.overall = function(data) {
      var url = {
        path: '/api/instance_metrics/actions/overall',
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
      if (data.metrics == null) {
        throw new Error('Required field \'metrics\' is missing from the passsed data object');
      } else {
        params.metrics = data.metrics;
      }
      if (data.instance_filters != null) {
        params.instance_filters = data.instance_filters;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.status === 200) {
          return new MetricsResultType(response.data);
        }
      }));
    };
    /**
 * @ngdoc method
 * @name InstanceMetrics#groupedOverall
 * @param {Object} data
 *    This represents the data needed to fullfill this request. It is an object
 *    with the following keys:
 *
 * @returns {Promise} A promise for the response object.
 * @description
 * Calculates the overall metrics for instance usages in a time period and groups them into
          specified breakdown categories, e.g. show me the total cost of all my instances during the
          last month grouped by different accounts.
 * @example
 *
 *    InstanceMetrics.groupedOverall({
 *
 *    }).then(function(result) {
 *
 *    });
 */
    api.groupedOverall = function(data) {
      var url = {
        path: '/api/instance_metrics/actions/grouped_overall',
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
      if (data.metrics == null) {
        throw new Error('Required field \'metrics\' is missing from the passsed data object');
      } else {
        params.metrics = data.metrics;
      }
      if (data.instance_filters != null) {
        params.instance_filters = data.instance_filters;
      }
      if (data.group == null) {
        throw new Error('Required field \'group\' is missing from the passsed data object');
      } else {
        params.group = data.group;
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
            return new MetricsResultType(el);
          });
        }
      }), true);
    };
    /**
 * @ngdoc method
 * @name InstanceMetrics#timeSeries
 * @param {Object} data
 *    This represents the data needed to fullfill this request. It is an object
 *    with the following keys:
 *
 * @returns {Promise} A promise for the response object.
 * @description
 * Calculates the metrics time series for instance usages in a time period allowing different
          time buckets (hour, 3 days, month, etc.), e.g. show me the lowest instance count of my
          instances per day during the last month.
 * @example
 *
 *    InstanceMetrics.timeSeries({
 *
 *    }).then(function(result) {
 *
 *    });
 */
    api.timeSeries = function(data) {
      var url = {
        path: '/api/instance_metrics/actions/time_series',
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
      if (data.metrics == null) {
        throw new Error('Required field \'metrics\' is missing from the passsed data object');
      } else {
        params.metrics = data.metrics;
      }
      if (data.instance_filters != null) {
        params.instance_filters = data.instance_filters;
      }
      if (data.granularity == null) {
        throw new Error('Required field \'granularity\' is missing from the passsed data object');
      } else {
        params.granularity = data.granularity;
      }
      if (data.interval != null) {
        params.interval = data.interval;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.status === 200) {
          return _.map(response.data, function(el) {
            return new TimeSeriesMetricsResultType(el);
          });
        }
      }), true);
    };
    /**
 * @ngdoc method
 * @name InstanceMetrics#groupedTimeSeries
 * @param {Object} data
 *    This represents the data needed to fullfill this request. It is an object
 *    with the following keys:
 *
 * @returns {Promise} A promise for the response object.
 * @description
 * Calculates the metrics time series for instance usages in a time period allowing different
          time buckets (hour, 3 days, month, etc.) and groups them into specified breakdown
          categories, e.g. show me the lowest instance count of my instances per day during the last
          month grouped by accounts.
 * @example
 *
 *    InstanceMetrics.groupedTimeSeries({
 *
 *    }).then(function(result) {
 *
 *    });
 */
    api.groupedTimeSeries = function(data) {
      var url = {
        path: '/api/instance_metrics/actions/grouped_time_series',
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
      if (data.metrics == null) {
        throw new Error('Required field \'metrics\' is missing from the passsed data object');
      } else {
        params.metrics = data.metrics;
      }
      if (data.instance_filters != null) {
        params.instance_filters = data.instance_filters;
      }
      if (data.granularity == null) {
        throw new Error('Required field \'granularity\' is missing from the passsed data object');
      } else {
        params.granularity = data.granularity;
      }
      if (data.interval != null) {
        params.interval = data.interval;
      }
      if (data.group == null) {
        throw new Error('Required field \'group\' is missing from the passsed data object');
      } else {
        params.group = data.group;
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
            return new TimeSeriesMetricsResultType(el);
          });
        }
      }), true);
    };
    /**
     * @ngdoc method
     * @name InstanceMetrics#currentCount
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Returns the count of currently running instances.
     * @example
     *
     *    InstanceMetrics.currentCount({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.currentCount = function(data) {
      var url = {
        path: '/api/instance_metrics/actions/current_count',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.instance_filters != null) {
        params.instance_filters = data.instance_filters;
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
    return api;
  };
});
