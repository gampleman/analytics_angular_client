/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('AnalysisSnapshots', function() {
  this.$get = function($http, wrapPromise, AnalysisSnapshotType) {
    var api = {};
    /**
     * @ngdoc method
     * @name AnalysisSnapshots#create
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Create a new AnalysisSnapshot.
     * @example
     *
     *    AnalysisSnapshots.create({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.create = function(data) {
      var url = {
        path: '/api/analysis_snapshots',
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
      if (data.start_time == null) {
        throw new Error('Required field \'start_time\' is missing from the passsed data object');
      } else {
        payload.start_time = data.start_time;
      }
      if (data.end_time == null) {
        throw new Error('Required field \'end_time\' is missing from the passsed data object');
      } else {
        payload.end_time = data.end_time;
      }
      if (data.is_comparison != null) {
        payload.is_comparison = data.is_comparison;
      }
      if (data.granularity == null) {
        throw new Error('Required field \'granularity\' is missing from the passsed data object');
      } else {
        payload.granularity = data.granularity;
      }
      if (data.excluded_tag_types != null) {
        payload.excluded_tag_types = data.excluded_tag_types;
      }
      if (data.metrics != null) {
        payload.metrics = data.metrics;
      }
      if (data.filters != null) {
        payload.filters = data.filters;
      }
      if (data.module_states != null) {
        payload.module_states = data.module_states;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.status === 201) {
          return new AnalysisSnapshotType(response.data);
        }
      }));
    };
    /**
     * @ngdoc method
     * @name AnalysisSnapshots#show
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Show a specific AnalysisSnapshot.
     * @example
     *
     *    AnalysisSnapshots.show({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.show = function(data) {
      var url = {
        path: '/api/analysis_snapshots/' + data.uuid + '',
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
          return new AnalysisSnapshotType(response.data);
        }
      }));
    };
    return api;
  };
});
