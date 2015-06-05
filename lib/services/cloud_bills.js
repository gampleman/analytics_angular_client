/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('CloudBills', function() {
  this.$get = function($http, wrapPromise, FilterType) {
    var api = {};
    /**
     * @ngdoc method
     * @name CloudBills#filterOptions
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Gets the filter options which can be used for filtering the cloud bill breakdown calls.
     * @example
     *
     *    CloudBills.filterOptions({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.filterOptions = function(data) {
      var url = {
        path: 'undefined/api/cloud_bills/actions/filter_options',
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
      if (data.cloud_bill_filters != null) {
        params.cloud_bill_filters = data.cloud_bill_filters.encodeJSON ? data.cloud_bill_filters.encodeJSON() : data.cloud_bill_filters;
        delete data.cloud_bill_filters;
      }
      if (data.filter_types == null) {
        throw new Error('Required field \'filter_types\' is missing from the passsed data object');
      } else {
        params.filter_types = data.filter_types.encodeJSON ? data.filter_types.encodeJSON() : data.filter_types;
        delete data.filter_types;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return response.data.map(function(el) {
            return new FilterType(el);
          });
        }
      }), true);
    };
    /**
     * @ngdoc method
     * @name CloudBills#export
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Exports the cloud bills for the time range given, along with the instance data for non-AWS providers, with columns for each account tag.
     * @example
     *
     *    CloudBills.export({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.export = function(data) {
      var url = {
        path: 'undefined/api/cloud_bills/actions/export',
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
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new FilterType(response.data);
        }
        if (response.code === 200) {
          return response.data;
        }
      }));
    };
    return api;
  };
});
