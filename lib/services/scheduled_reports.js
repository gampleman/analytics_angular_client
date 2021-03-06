/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('ScheduledReports', function() {
  this.$get = function($http, wrapPromise, ScheduledReportType) {
    var api = {};
    /**
     * @ngdoc method
     * @name ScheduledReports#create
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Create a new ScheduledReport.
     * @example
     *
     *    ScheduledReports.create({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.create = function(data) {
      var url = {
        path: '/api/scheduled_reports',
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
      if (data.name == null) {
        throw new Error('Required field \'name\' is missing from the passsed data object');
      } else {
        payload.name = data.name;
      }
      if (data.frequency == null) {
        throw new Error('Required field \'frequency\' is missing from the passsed data object');
      } else {
        payload.frequency = data.frequency;
      }
      if (data.additional_emails != null) {
        payload.additional_emails = data.additional_emails;
      }
      if (data.attach_csv != null) {
        payload.attach_csv = data.attach_csv;
      }
      if (data.filters != null) {
        payload.filters = data.filters;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.status === 201) {
          return new ScheduledReportType(response.data);
        }
      }));
    };
    /**
     * @ngdoc method
     * @name ScheduledReports#index
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * List all ScheduledReports.
     * @example
     *
     *    ScheduledReports.index({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.index = function(data) {
      var url = {
        path: '/api/scheduled_reports',
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
          return _.map(response.data, function(el) {
            return new ScheduledReportType(el);
          });
        }
      }), true);
    };
    /**
     * @ngdoc method
     * @name ScheduledReports#show
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Show a specific ScheduledReport.
     * @example
     *
     *    ScheduledReports.show({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.show = function(data) {
      var url = {
        path: '/api/scheduled_reports/' + data.id + '',
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
          return new ScheduledReportType(response.data);
        }
      }));
    };
    /**
     * @ngdoc method
     * @name ScheduledReports#update
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Update the provided attributes of a ScheduledReport.
     * @example
     *
     *    ScheduledReports.update({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.update = function(data) {
      var url = {
        path: '/api/scheduled_reports/' + data.id + '',
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
      if (data.frequency != null) {
        payload.frequency = data.frequency;
      }
      if (data.additional_emails != null) {
        payload.additional_emails = data.additional_emails;
      }
      if (data.attach_csv != null) {
        payload.attach_csv = data.attach_csv;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.status === 200) {
          return new ScheduledReportType(response.data);
        }
      }));
    };
    /**
     * @ngdoc method
     * @name ScheduledReports#destroy
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Delete a ScheduledReport.
     * @example
     *
     *    ScheduledReports.destroy({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.destroy = function(data) {
      var url = {
        path: '/api/scheduled_reports/' + data.id + '',
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
     * @name ScheduledReports#createDefaults
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Create the default Scheduled Report: a weekly report with no filters
     * @example
     *
     *    ScheduledReports.createDefaults({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.createDefaults = function(data) {
      var url = {
        path: '/api/scheduled_reports/actions/create_defaults',
        method: 'POST'
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
          return new ScheduledReportType(response.data);
        }
      }));
    };
    return api;
  };
});
