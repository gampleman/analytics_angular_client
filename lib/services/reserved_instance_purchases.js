/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('ReservedInstancePurchases', function() {
  this.$get = function($http, wrapPromise, ReservedInstancePurchaseType) {
    var api = {};
    /**
     * @ngdoc method
     * @name ReservedInstancePurchases#create
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Create a new ReservedInstancePurchase. This is not actually purchased in the cloud and is only used for cost simulation purposes.
     * @example
     *
     *    ReservedInstancePurchases.create({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.create = function(data) {
      var url = {
        path: '/api/scenarios/' + data.scenario_id + '/instance_combinations/' + data.instance_combination_id + '/reserved_instance_purchases',
        method: 'POST'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.view != null) {
        params.view = data.view;
        delete data.view;
      }
      var payload = {};
      if (data.offering_type == null) {
        throw new Error('Required field \'offering_type\' is missing from the passsed data object');
      } else {
        payload.offering_type = data.offering_type;
      }
      if (data.duration == null) {
        throw new Error('Required field \'duration\' is missing from the passsed data object');
      } else {
        payload.duration = data.duration;
      }
      if (data.quantity == null) {
        throw new Error('Required field \'quantity\' is missing from the passsed data object');
      } else {
        payload.quantity = data.quantity;
      }
      if (data.start_date == null) {
        throw new Error('Required field \'start_date\' is missing from the passsed data object');
      } else {
        payload.start_date = data.start_date.encodeJSON ? data.start_date.encodeJSON() : data.start_date;
      }
      if (data.auto_renew == null) {
        throw new Error('Required field \'auto_renew\' is missing from the passsed data object');
      } else {
        payload.auto_renew = data.auto_renew.encodeJSON ? data.auto_renew.encodeJSON() : data.auto_renew;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 201) {
          return new ReservedInstancePurchaseType(response.data);
        }
      }));
    };
    /**
     * @ngdoc method
     * @name ReservedInstancePurchases#index
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * List all ReservedInstancePurchases for the InstanceCombination.
     * @example
     *
     *    ReservedInstancePurchases.index({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.index = function(data) {
      var url = {
        path: '/api/scenarios/' + data.scenario_id + '/instance_combinations/' + data.instance_combination_id + '/reserved_instance_purchases',
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
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return _.map(response.data, function(el) {
            return new ReservedInstancePurchaseType(el);
          });
        }
      }), true);
    };
    /**
     * @ngdoc method
     * @name ReservedInstancePurchases#show
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Show a specific ReservedInstancePurchase.
     * @example
     *
     *    ReservedInstancePurchases.show({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.show = function(data) {
      var url = {
        path: '/api/scenarios/' + data.scenario_id + '/instance_combinations/' + data.instance_combination_id + '/reserved_instance_purchases/' + data.id + '',
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
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new ReservedInstancePurchaseType(response.data);
        }
      }));
    };
    /**
     * @ngdoc method
     * @name ReservedInstancePurchases#update
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Update the provided attributes of a ReservedInstancePurchase.
     * @example
     *
     *    ReservedInstancePurchases.update({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.update = function(data) {
      var url = {
        path: '/api/scenarios/' + data.scenario_id + '/instance_combinations/' + data.instance_combination_id + '/reserved_instance_purchases/' + data.id + '',
        method: 'PATCH'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.view != null) {
        params.view = data.view;
        delete data.view;
      }
      var payload = {};
      if (data.offering_type != null) {
        payload.offering_type = data.offering_type;
      }
      if (data.duration != null) {
        payload.duration = data.duration;
      }
      if (data.quantity != null) {
        payload.quantity = data.quantity;
      }
      if (data.start_date != null) {
        payload.start_date = data.start_date.encodeJSON ? data.start_date.encodeJSON() : data.start_date;
      }
      if (data.auto_renew != null) {
        payload.auto_renew = data.auto_renew.encodeJSON ? data.auto_renew.encodeJSON() : data.auto_renew;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 200) {
          return new ReservedInstancePurchaseType(response.data);
        }
      }));
    };
    /**
     * @ngdoc method
     * @name ReservedInstancePurchases#destroy
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Delete a ReservedInstancePurchase. This is not actually deleted in the cloud and is only used for cost simulation purposes.
     * @example
     *
     *    ReservedInstancePurchases.destroy({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.destroy = function(data) {
      var url = {
        path: '/api/scenarios/' + data.scenario_id + '/instance_combinations/' + data.instance_combination_id + '/reserved_instance_purchases/' + data.id + '',
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
        if (response.code === 204) {
          return response.data;
        }
      }));
    };
    return api;
  };
});
