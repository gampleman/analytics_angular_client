/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('UserSettings', function() {
  this.$get = function($http, UserSettingType) {
    var api = {};
    /**
     * @ngdoc method
     * @name UserSettings#show
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * List the UserSettings.
     * @example
     *
     *    UserSettings.show({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.show = function(data) {
      var url = {
        path: '/api/user_settings',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
        undefined
      };
      var params = {};
      if (data.view != null) {
        params.view = data.view;
        delete data.view;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new UserSettingType(response.data);
        }
      });
    };
    /**
     * @ngdoc method
     * @name UserSettings#update
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Update the provided attributes of UserSettings.
     * @example
     *
     *    UserSettings.update({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.update = function(data) {
      var url = {
        path: '/api/user_settings',
        method: 'PATCH'
      };
      var headers = {
        'X-API-VERSION': '1.0'
        undefined
      };
      var params = {};
      if (data.view != null) {
        params.view = data.view;
        delete data.view;
      }
      var payload = {};
      if (data.date_range != null) {
        payload.date_range = data.date_range.encodeJSON ? data.date_range.encodeJSON() : data.date_range;
      }
      if (data.granularity != null) {
        payload.granularity = data.granularity;
      }
      if (data.module_states != null) {
        payload.module_states = data.module_states.encodeJSON ? data.module_states.encodeJSON() : data.module_states;
      }
      if (data.filters != null) {
        payload.filters = data.filters.encodeJSON ? data.filters.encodeJSON() : data.filters;
      }
      if (data.selected_cloud_vendor_names != null) {
        payload.selected_cloud_vendor_names = data.selected_cloud_vendor_names.encodeJSON ? data.selected_cloud_vendor_names.encodeJSON() : data.selected_cloud_vendor_names;
      }
      if (data.metrics != null) {
        payload.metrics = data.metrics.encodeJSON ? data.metrics.encodeJSON() : data.metrics;
      }
      if (data.onboarding_status != null) {
        payload.onboarding_status = data.onboarding_status;
      }
      if (data.main_menu_visible != null) {
        payload.main_menu_visible = data.main_menu_visible.encodeJSON ? data.main_menu_visible.encodeJSON() : data.main_menu_visible;
      }
      if (data.sorting != null) {
        payload.sorting = data.sorting.encodeJSON ? data.sorting.encodeJSON() : data.sorting;
      }
      if (data.table_column_visibility != null) {
        payload.table_column_visibility = data.table_column_visibility.encodeJSON ? data.table_column_visibility.encodeJSON() : data.table_column_visibility;
      }
      if (data.dismissed_dialogs != null) {
        payload.dismissed_dialogs = data.dismissed_dialogs.encodeJSON ? data.dismissed_dialogs.encodeJSON() : data.dismissed_dialogs;
      }
      if (data.excluded_tag_types != null) {
        payload.excluded_tag_types = data.excluded_tag_types.encodeJSON ? data.excluded_tag_types.encodeJSON() : data.excluded_tag_types;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 200) {
          return new UserSettingType(response.data);
        }
      });
    };
    return api;
  };
});
