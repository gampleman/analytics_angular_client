/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('Users', function() {
  this.$get = function($http, wrapPromise, UserType) {
    var api = {};
    /**
 * @ngdoc method
 * @name Users#create
 * @param {Object} data
 *    This represents the data needed to fullfill this request. It is an object
 *    with the following keys:
 *
 * @returns {Promise} A promise for the response object.
 * @description
 * Create a new user with the requested permissions in the requested accounts, and emails
          them the login details. Returns an error if the user already exists.
 * @example
 *
 *    Users.create({
 *
 *    }).then(function(result) {
 *
 *    });
 */
    api.create = function(data) {
      var url = {
        path: '/api/users',
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
      if (data.email == null) {
        throw new Error('Required field \'email\' is missing from the passsed data object');
      } else {
        payload.email = data.email;
      }
      if (data.accounts == null) {
        throw new Error('Required field \'accounts\' is missing from the passsed data object');
      } else {
        payload.accounts = data.accounts;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.status === 201) {
          return new UserType(response.data);
        }
      }));
    };
    /**
     * @ngdoc method
     * @name Users#index
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * List all users.
     * @example
     *
     *    Users.index({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.index = function(data) {
      var url = {
        path: '/api/users',
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
            return new UserType(el);
          });
        }
      }), true);
    };
    /**
     * @ngdoc method
     * @name Users#show
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Show a specific user.
     * @example
     *
     *    Users.show({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.show = function(data) {
      var url = {
        path: '/api/users/' + data.id + '',
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
          return new UserType(response.data);
        }
      }));
    };
    /**
 * @ngdoc method
 * @name Users#update
 * @param {Object} data
 *    This represents the data needed to fullfill this request. It is an object
 *    with the following keys:
 *
 * @returns {Promise} A promise for the response object.
 * @description
 * Update a specific user's account permissions.
          This cannot be used to update other user parameters such as their name or password.
 * @example
 *
 *    Users.update({
 *
 *    }).then(function(result) {
 *
 *    });
 */
    api.update = function(data) {
      var url = {
        path: '/api/users/' + data.id + '',
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
      if (data.accounts != null) {
        payload.accounts = data.accounts;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.status === 200) {
          return new UserType(response.data);
        }
      }));
    };
    /**
     * @ngdoc method
     * @name Users#delete
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Remove a users access to all RightScale accounts
     * @example
     *
     *    Users.delete({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.delete = function(data) {
      var url = {
        path: '/api/users/' + data.id + '',
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
 * @name Users#invite
 * @param {Object} data
 *    This represents the data needed to fullfill this request. It is an object
 *    with the following keys:
 *
 * @returns {Promise} A promise for the response object.
 * @description
 * Invites a user to the requested account and gives them the required permissions
          so they can add/edit cloud credentials, the user is created if they don't already exist.
          This is used during new user onboarding as the user who signs-up might not be the person who has
          the cloud credentials required to connect their clouds to RightScale.
 * @example
 *
 *    Users.invite({
 *
 *    }).then(function(result) {
 *
 *    });
 */
    api.invite = function(data) {
      var url = {
        path: '/api/users/actions/invite',
        method: 'POST'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var payload = {};
      if (data.account_id == null) {
        throw new Error('Required field \'account_id\' is missing from the passsed data object');
      } else {
        payload.account_id = data.account_id;
      }
      if (data.email == null) {
        throw new Error('Required field \'email\' is missing from the passsed data object');
      } else {
        payload.email = data.email;
      }
      if (data.message != null) {
        payload.message = data.message;
      }
      return wrapPromise($http({
        method: url.method,
        url: url.path,
        headers: headers,
        data: payload,
      }).then(function(response) {
        if (response.status === 200) {
          return new UserType(response.data);
        }
      }));
    };
    return api;
  };
});
