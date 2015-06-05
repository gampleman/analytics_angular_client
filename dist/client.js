
/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient', []);


/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('Accounts', function() {
  this.$get = function($http, AccountType) {
    var api = {};
    /**
     * @ngdoc method
     * @name Accounts#create
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Create a new child account.
     * @example
     *
     *    Accounts.create({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.create = function(data) {
      var url = {
        path: 'undefined/api/accounts',
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
      if (data.master_account_id == null) {
        throw new Error('Required field \'master_account_id\' is missing from the passsed data object');
      } else {
        payload.master_account_id = data.master_account_id;
      }
      if (data.name == null) {
        throw new Error('Required field \'name\' is missing from the passsed data object');
      } else {
        payload.name = data.name;
      }
      if (data.shard_id != null) {
        payload.shard_id = data.shard_id;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 201) {
          return new AccountType(response.data);
        }
      });
    };
    /**
     * @ngdoc method
     * @name Accounts#index
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * List all accounts.
     * @example
     *
     *    Accounts.index({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.index = function(data) {
      var url = {
        path: 'undefined/api/accounts',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new AccountType(response.data);
        }
      });
    };
    /**
     * @ngdoc method
     * @name Accounts#show
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Show a specific account.
     * @example
     *
     *    Accounts.show({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.show = function(data) {
      var url = {
        path: 'undefined/api/accounts/' + data.id + '',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new AccountType(response.data);
        }
      });
    };
    return api;
  };
});

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('AnalysisSnapshots', function() {
  this.$get = function($http, AnalysisSnapshotType) {
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
        path: 'undefined/api/analysis_snapshots',
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
      if (data.start_time == null) {
        throw new Error('Required field \'start_time\' is missing from the passsed data object');
      } else {
        payload.start_time = data.start_time.encodeJSON ? data.start_time.encodeJSON() : data.start_time;
      }
      if (data.end_time == null) {
        throw new Error('Required field \'end_time\' is missing from the passsed data object');
      } else {
        payload.end_time = data.end_time.encodeJSON ? data.end_time.encodeJSON() : data.end_time;
      }
      if (data.is_comparison != null) {
        payload.is_comparison = data.is_comparison.encodeJSON ? data.is_comparison.encodeJSON() : data.is_comparison;
      }
      if (data.granularity == null) {
        throw new Error('Required field \'granularity\' is missing from the passsed data object');
      } else {
        payload.granularity = data.granularity;
      }
      if (data.excluded_tag_types != null) {
        payload.excluded_tag_types = data.excluded_tag_types.encodeJSON ? data.excluded_tag_types.encodeJSON() : data.excluded_tag_types;
      }
      if (data.metrics != null) {
        payload.metrics = data.metrics.encodeJSON ? data.metrics.encodeJSON() : data.metrics;
      }
      if (data.filters != null) {
        payload.filters = data.filters.encodeJSON ? data.filters.encodeJSON() : data.filters;
      }
      if (data.module_states != null) {
        payload.module_states = data.module_states.encodeJSON ? data.module_states.encodeJSON() : data.module_states;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 201) {
          return new AnalysisSnapshotType(response.data);
        }
      });
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
        path: 'undefined/api/analysis_snapshots/' + data.uuid + '',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new AnalysisSnapshotType(response.data);
        }
      });
    };
    return api;
  };
});

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('BudgetAlerts', function() {
  this.$get = function($http, BudgetAlertType) {
    var api = {};
    /**
     * @ngdoc method
     * @name BudgetAlerts#create
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Create a new BudgetAlert.
     * @example
     *
     *    BudgetAlerts.create({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.create = function(data) {
      var url = {
        path: 'undefined/api/budget_alerts',
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
      if (data.name == null) {
        throw new Error('Required field \'name\' is missing from the passsed data object');
      } else {
        payload.name = data.name;
      }
      if (data.budget == null) {
        throw new Error('Required field \'budget\' is missing from the passsed data object');
      } else {
        payload.budget = data.budget.encodeJSON ? data.budget.encodeJSON() : data.budget;
      }
      if (data.type == null) {
        throw new Error('Required field \'type\' is missing from the passsed data object');
      } else {
        payload.type = data.type;
      }
      if (data.frequency == null) {
        throw new Error('Required field \'frequency\' is missing from the passsed data object');
      } else {
        payload.frequency = data.frequency;
      }
      if (data.additional_emails != null) {
        payload.additional_emails = data.additional_emails.encodeJSON ? data.additional_emails.encodeJSON() : data.additional_emails;
      }
      if (data.attach_csv != null) {
        payload.attach_csv = data.attach_csv.encodeJSON ? data.attach_csv.encodeJSON() : data.attach_csv;
      }
      if (data.filters != null) {
        payload.filters = data.filters.encodeJSON ? data.filters.encodeJSON() : data.filters;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 201) {
          return new BudgetAlertType(response.data);
        }
      });
    };
    /**
     * @ngdoc method
     * @name BudgetAlerts#index
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * List all BudgetAlerts.
     * @example
     *
     *    BudgetAlerts.index({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.index = function(data) {
      var url = {
        path: 'undefined/api/budget_alerts',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new BudgetAlertType(response.data);
        }
      });
    };
    /**
     * @ngdoc method
     * @name BudgetAlerts#show
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Show a specific BudgetAlert.
     * @example
     *
     *    BudgetAlerts.show({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.show = function(data) {
      var url = {
        path: 'undefined/api/budget_alerts/' + data.id + '',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new BudgetAlertType(response.data);
        }
      });
    };
    /**
     * @ngdoc method
     * @name BudgetAlerts#update
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Update the provided attributes of a BudgetAlert.
     * @example
     *
     *    BudgetAlerts.update({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.update = function(data) {
      var url = {
        path: 'undefined/api/budget_alerts/' + data.id + '',
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
      if (data.name != null) {
        payload.name = data.name;
      }
      if (data.budget != null) {
        payload.budget = data.budget.encodeJSON ? data.budget.encodeJSON() : data.budget;
      }
      if (data.additional_emails != null) {
        payload.additional_emails = data.additional_emails.encodeJSON ? data.additional_emails.encodeJSON() : data.additional_emails;
      }
      if (data.type != null) {
        payload.type = data.type;
      }
      if (data.frequency != null) {
        payload.frequency = data.frequency;
      }
      if (data.attach_csv != null) {
        payload.attach_csv = data.attach_csv.encodeJSON ? data.attach_csv.encodeJSON() : data.attach_csv;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 200) {
          return new BudgetAlertType(response.data);
        }
      });
    };
    /**
     * @ngdoc method
     * @name BudgetAlerts#destroy
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Delete a BudgetAlert.
     * @example
     *
     *    BudgetAlerts.destroy({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.destroy = function(data) {
      var url = {
        path: 'undefined/api/budget_alerts/' + data.id + '',
        method: 'DELETE'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 204) {
          return response.data;
        }
      });
    };
    return api;
  };
});

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('CloudBillMetrics', function() {
  this.$get = function($http, TimeSeriesMetricsResultType) {
    var api = {};
    /**
 * @ngdoc method
 * @name CloudBillMetrics#groupedTimeSeries
 * @param {Object} data
 *    This represents the data needed to fullfill this request. It is an object
 *    with the following keys:
 *
 * @returns {Promise} A promise for the response object.
 * @description
 * Calculates the time series of costs for cloud bills in a time period grouped into monthly
          time buckets and groups them into specified breakdown categories, e.g. show me cost of my
          cloud bills per month during the last year grouped by product.
 * @example
 *
 *    CloudBillMetrics.groupedTimeSeries({
 *
 *    }).then(function(result) {
 *
 *    });
 */
    api.groupedTimeSeries = function(data) {
      var url = {
        path: 'undefined/api/cloud_bill_metrics/actions/grouped_time_series',
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
      if (data.group == null) {
        throw new Error('Required field \'group\' is missing from the passsed data object');
      } else {
        params.group = data.group.encodeJSON ? data.group.encodeJSON() : data.group;
        delete data.group;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new TimeSeriesMetricsResultType(response.data);
        }
      });
    };
    return api;
  };
});

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('CloudBills', function() {
  this.$get = function($http, FilterType) {
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new FilterType(response.data);
        }
      });
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
      return $http({
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
      });
    };
    return api;
  };
});

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('CurrentUser', function() {
  this.$get = function($http, CurrentUserType, UserOnboardingStatusType, UserEnvironmentType) {
    var api = {};
    /**
     * @ngdoc method
     * @name CurrentUser#show
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Show the user's details.
     * @example
     *
     *    CurrentUser.show({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.show = function(data) {
      var url = {
        path: 'undefined/api/current_user',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new CurrentUserType(response.data);
        }
      });
    };
    /**
     * @ngdoc method
     * @name CurrentUser#update
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Update the user's details.
     * @example
     *
     *    CurrentUser.update({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.update = function(data) {
      var url = {
        path: 'undefined/api/current_user',
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
      if (data.first_name != null) {
        payload.first_name = data.first_name;
      }
      if (data.last_name != null) {
        payload.last_name = data.last_name;
      }
      if (data.email != null) {
        payload.email = data.email;
      }
      if (data.timezone != null) {
        payload.timezone = data.timezone;
      }
      if (data.company != null) {
        payload.company = data.company;
      }
      if (data.phone != null) {
        payload.phone = data.phone;
      }
      if (data.password == null) {
        throw new Error('Required field \'password\' is missing from the passsed data object');
      } else {
        payload.password = data.password;
      }
      if (data.new_password != null) {
        payload.new_password = data.new_password;
      }
      if (data.new_password_confirmation != null) {
        payload.new_password_confirmation = data.new_password_confirmation;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 200) {
          return new CurrentUserType(response.data);
        }
      });
    };
    /**
 * @ngdoc method
 * @name CurrentUser#cloudAccounts
 * @param {Object} data
 *    This represents the data needed to fullfill this request. It is an object
 *    with the following keys:
 *
 * @returns {Promise} A promise for the response object.
 * @description
 * Creates a cloud account in the first available child account,
          or the account used to login if there are no available child accounts.
 * @example
 *
 *    CurrentUser.cloudAccounts({
 *
 *    }).then(function(result) {
 *
 *    });
 */
    api.cloudAccounts = function(data) {
      var url = {
        path: 'undefined/api/current_user/actions/cloud_accounts',
        method: 'POST'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var payload = {};
      if (data.cloud_vendor_name == null) {
        throw new Error('Required field \'cloud_vendor_name\' is missing from the passsed data object');
      } else {
        payload.cloud_vendor_name = data.cloud_vendor_name;
      }
      if (data.aws_account_number == null) {
        throw new Error('Required field \'aws_account_number\' is missing from the passsed data object');
      } else {
        payload.aws_account_number = data.aws_account_number;
      }
      if (data.aws_access_key_id == null) {
        throw new Error('Required field \'aws_access_key_id\' is missing from the passsed data object');
      } else {
        payload.aws_access_key_id = data.aws_access_key_id;
      }
      if (data.aws_secret_access_key == null) {
        throw new Error('Required field \'aws_secret_access_key\' is missing from the passsed data object');
      } else {
        payload.aws_secret_access_key = data.aws_secret_access_key;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        data: payload,
      }).then(function(response) {
        if (response.code === 201) {
          return response.data;
        }
      });
    };
    /**
     * @ngdoc method
     * @name CurrentUser#onboardingStatus
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Gets the onboarding status of the user.
     * @example
     *
     *    CurrentUser.onboardingStatus({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.onboardingStatus = function(data) {
      var url = {
        path: 'undefined/api/current_user/actions/onboarding_status',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new UserOnboardingStatusType(response.data);
        }
      });
    };
    /**
     * @ngdoc method
     * @name CurrentUser#environment
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Gets various environment settings.
     * @example
     *
     *    CurrentUser.environment({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.environment = function(data) {
      var url = {
        path: 'undefined/api/current_user/actions/environment',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
      }).then(function(response) {
        if (response.code === 200) {
          return new UserEnvironmentType(response.data);
        }
      });
    };
    return api;
  };
});

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('InstanceCombinations', function() {
  this.$get = function($http, InstanceCombinationType, ReservedInstancePurchaseType) {
    var api = {};
    /**
     * @ngdoc method
     * @name InstanceCombinations#create
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Create a new InstanceCombination.
     * @example
     *
     *    InstanceCombinations.create({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.create = function(data) {
      var url = {
        path: 'undefined/api/scenarios/' + data.scenario_id + '/instance_combinations',
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
      if (data.quantity == null) {
        throw new Error('Required field \'quantity\' is missing from the passsed data object');
      } else {
        payload.quantity = data.quantity;
      }
      if (data.cloud_vendor_name == null) {
        throw new Error('Required field \'cloud_vendor_name\' is missing from the passsed data object');
      } else {
        payload.cloud_vendor_name = data.cloud_vendor_name;
      }
      if (data.cloud_name == null) {
        throw new Error('Required field \'cloud_name\' is missing from the passsed data object');
      } else {
        payload.cloud_name = data.cloud_name;
      }
      if (data.datacenter_name != null) {
        payload.datacenter_name = data.datacenter_name;
      }
      if (data.instance_type_name == null) {
        throw new Error('Required field \'instance_type_name\' is missing from the passsed data object');
      } else {
        payload.instance_type_name = data.instance_type_name;
      }
      if (data.platform == null) {
        throw new Error('Required field \'platform\' is missing from the passsed data object');
      } else {
        payload.platform = data.platform;
      }
      if (data.monthly_usage_option == null) {
        throw new Error('Required field \'monthly_usage_option\' is missing from the passsed data object');
      } else {
        payload.monthly_usage_option = data.monthly_usage_option;
      }
      if (data.monthly_usage_hours != null) {
        payload.monthly_usage_hours = data.monthly_usage_hours;
      }
      if (data.patterns != null) {
        payload.patterns = data.patterns.encodeJSON ? data.patterns.encodeJSON() : data.patterns;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 201) {
          return new InstanceCombinationType(response.data);
        }
      });
    };
    /**
     * @ngdoc method
     * @name InstanceCombinations#show
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Show a specific InstanceCombination.
     * @example
     *
     *    InstanceCombinations.show({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.show = function(data) {
      var url = {
        path: 'undefined/api/scenarios/' + data.scenario_id + '/instance_combinations/:id',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new InstanceCombinationType(response.data);
        }
      });
    };
    /**
     * @ngdoc method
     * @name InstanceCombinations#update
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Update the provided attributes of an InstanceCombination.
     * @example
     *
     *    InstanceCombinations.update({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.update = function(data) {
      var url = {
        path: 'undefined/api/scenarios/' + data.scenario_id + '/instance_combinations/:id',
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
      if (data.quantity != null) {
        payload.quantity = data.quantity;
      }
      if (data.cloud_vendor_name != null) {
        payload.cloud_vendor_name = data.cloud_vendor_name;
      }
      if (data.cloud_name != null) {
        payload.cloud_name = data.cloud_name;
      }
      if (data.datacenter_name != null) {
        payload.datacenter_name = data.datacenter_name;
      }
      if (data.instance_type_name != null) {
        payload.instance_type_name = data.instance_type_name;
      }
      if (data.platform != null) {
        payload.platform = data.platform;
      }
      if (data.monthly_usage_option != null) {
        payload.monthly_usage_option = data.monthly_usage_option;
      }
      if (data.monthly_usage_hours != null) {
        payload.monthly_usage_hours = data.monthly_usage_hours;
      }
      if (data.patterns != null) {
        payload.patterns = data.patterns.encodeJSON ? data.patterns.encodeJSON() : data.patterns;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 200) {
          return new InstanceCombinationType(response.data);
        }
      });
    };
    /**
     * @ngdoc method
     * @name InstanceCombinations#destroy
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Delete an InstanceCombination.
     * @example
     *
     *    InstanceCombinations.destroy({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.destroy = function(data) {
      var url = {
        path: 'undefined/api/scenarios/' + data.scenario_id + '/instance_combinations/:id',
        method: 'DELETE'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 204) {
          return response.data;
        }
      });
    };
    /**
     * @ngdoc method
     * @name InstanceCombinations#reservedInstancePrices
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Returns pricing details for the various reserved instances that can be purchased for this InstanceCombination.
     * @example
     *
     *    InstanceCombinations.reservedInstancePrices({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.reservedInstancePrices = function(data) {
      var url = {
        path: 'undefined/api/scenarios/' + data.scenario_id + '/instance_combinations/:id/actions/reserved_instance_prices',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new ReservedInstancePurchaseType(response.data);
        }
      });
    };
    return api;
  };
});

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('InstanceMetrics', function() {
  this.$get = function($http, MetricsResultType, TimeSeriesMetricsResultType) {
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
        path: 'undefined/api/instance_metrics/actions/overall',
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
      if (data.metrics == null) {
        throw new Error('Required field \'metrics\' is missing from the passsed data object');
      } else {
        params.metrics = data.metrics.encodeJSON ? data.metrics.encodeJSON() : data.metrics;
        delete data.metrics;
      }
      if (data.instance_filters != null) {
        params.instance_filters = data.instance_filters.encodeJSON ? data.instance_filters.encodeJSON() : data.instance_filters;
        delete data.instance_filters;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new MetricsResultType(response.data);
        }
      });
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
        path: 'undefined/api/instance_metrics/actions/grouped_overall',
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
      if (data.metrics == null) {
        throw new Error('Required field \'metrics\' is missing from the passsed data object');
      } else {
        params.metrics = data.metrics.encodeJSON ? data.metrics.encodeJSON() : data.metrics;
        delete data.metrics;
      }
      if (data.instance_filters != null) {
        params.instance_filters = data.instance_filters.encodeJSON ? data.instance_filters.encodeJSON() : data.instance_filters;
        delete data.instance_filters;
      }
      if (data.group == null) {
        throw new Error('Required field \'group\' is missing from the passsed data object');
      } else {
        params.group = data.group.encodeJSON ? data.group.encodeJSON() : data.group;
        delete data.group;
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new MetricsResultType(response.data);
        }
      });
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
        path: 'undefined/api/instance_metrics/actions/time_series',
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
      if (data.metrics == null) {
        throw new Error('Required field \'metrics\' is missing from the passsed data object');
      } else {
        params.metrics = data.metrics.encodeJSON ? data.metrics.encodeJSON() : data.metrics;
        delete data.metrics;
      }
      if (data.instance_filters != null) {
        params.instance_filters = data.instance_filters.encodeJSON ? data.instance_filters.encodeJSON() : data.instance_filters;
        delete data.instance_filters;
      }
      if (data.granularity == null) {
        throw new Error('Required field \'granularity\' is missing from the passsed data object');
      } else {
        params.granularity = data.granularity;
        delete data.granularity;
      }
      if (data.interval != null) {
        params.interval = data.interval;
        delete data.interval;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new TimeSeriesMetricsResultType(response.data);
        }
      });
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
        path: 'undefined/api/instance_metrics/actions/grouped_time_series',
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
      if (data.metrics == null) {
        throw new Error('Required field \'metrics\' is missing from the passsed data object');
      } else {
        params.metrics = data.metrics.encodeJSON ? data.metrics.encodeJSON() : data.metrics;
        delete data.metrics;
      }
      if (data.instance_filters != null) {
        params.instance_filters = data.instance_filters.encodeJSON ? data.instance_filters.encodeJSON() : data.instance_filters;
        delete data.instance_filters;
      }
      if (data.granularity == null) {
        throw new Error('Required field \'granularity\' is missing from the passsed data object');
      } else {
        params.granularity = data.granularity;
        delete data.granularity;
      }
      if (data.interval != null) {
        params.interval = data.interval;
        delete data.interval;
      }
      if (data.group == null) {
        throw new Error('Required field \'group\' is missing from the passsed data object');
      } else {
        params.group = data.group.encodeJSON ? data.group.encodeJSON() : data.group;
        delete data.group;
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new TimeSeriesMetricsResultType(response.data);
        }
      });
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
        path: 'undefined/api/instance_metrics/actions/current_count',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      if (data.instance_filters != null) {
        params.instance_filters = data.instance_filters.encodeJSON ? data.instance_filters.encodeJSON() : data.instance_filters;
        delete data.instance_filters;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return response.data;
        }
      });
    };
    return api;
  };
});

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('InstanceUsagePeriods', function() {
  this.$get = function($http, InstanceUsagePeriodType) {
    var api = {};
    /**
     * @ngdoc method
     * @name InstanceUsagePeriods#index
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Gets the instance usage periods of instances.
     * @example
     *
     *    InstanceUsagePeriods.index({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.index = function(data) {
      var url = {
        path: 'undefined/api/instance_usage_periods',
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
      if (data.instance_usage_period_filters == null) {
        throw new Error('Required field \'instance_usage_period_filters\' is missing from the passsed data object');
      } else {
        params.instance_usage_period_filters = data.instance_usage_period_filters.encodeJSON ? data.instance_usage_period_filters.encodeJSON() : data.instance_usage_period_filters;
        delete data.instance_usage_period_filters;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new InstanceUsagePeriodType(response.data);
        }
      });
    };
    return api;
  };
});

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('Instances', function() {
  this.$get = function($http, InstanceType, FilterType) {
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
        path: 'undefined/api/instances',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new InstanceType(response.data);
        }
      });
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
        path: 'undefined/api/instances/actions/count',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return response.data;
        }
      });
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
        path: 'undefined/api/instances/actions/exist',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return response.data;
        }
      });
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
        path: 'undefined/api/instances/actions/export',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return response.data;
        }
      });
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
        path: 'undefined/api/instances/actions/filter_options',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new FilterType(response.data);
        }
      });
    };
    return api;
  };
});

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('Patterns', function() {
  this.$get = function($http, PatternType) {
    var api = {};
    /**
     * @ngdoc method
     * @name Patterns#create
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Create a new Pattern.
     * @example
     *
     *    Patterns.create({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.create = function(data) {
      var url = {
        path: 'undefined/api/patterns',
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
      if (data.name == null) {
        throw new Error('Required field \'name\' is missing from the passsed data object');
      } else {
        payload.name = data.name;
      }
      if (data.summary != null) {
        payload.summary = data.summary;
      }
      if (data.type == null) {
        throw new Error('Required field \'type\' is missing from the passsed data object');
      } else {
        payload.type = data.type;
      }
      if (data.value == null) {
        throw new Error('Required field \'value\' is missing from the passsed data object');
      } else {
        payload.value = data.value.encodeJSON ? data.value.encodeJSON() : data.value;
      }
      if (data.operation == null) {
        throw new Error('Required field \'operation\' is missing from the passsed data object');
      } else {
        payload.operation = data.operation;
      }
      if (data.years == null) {
        throw new Error('Required field \'years\' is missing from the passsed data object');
      } else {
        payload.years = data.years;
      }
      if (data.months == null) {
        throw new Error('Required field \'months\' is missing from the passsed data object');
      } else {
        payload.months = data.months;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 201) {
          return new PatternType(response.data);
        }
      });
    };
    /**
     * @ngdoc method
     * @name Patterns#index
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * List all Patterns.
     * @example
     *
     *    Patterns.index({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.index = function(data) {
      var url = {
        path: 'undefined/api/patterns',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new PatternType(response.data);
        }
      });
    };
    /**
     * @ngdoc method
     * @name Patterns#show
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Show a specific Pattern.
     * @example
     *
     *    Patterns.show({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.show = function(data) {
      var url = {
        path: 'undefined/api/patterns/' + data.id + '',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new PatternType(response.data);
        }
      });
    };
    /**
     * @ngdoc method
     * @name Patterns#update
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Update the provided attributes of a Pattern.
     * @example
     *
     *    Patterns.update({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.update = function(data) {
      var url = {
        path: 'undefined/api/patterns/' + data.id + '',
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
      if (data.name != null) {
        payload.name = data.name;
      }
      if (data.summary != null) {
        payload.summary = data.summary;
      }
      if (data.type != null) {
        payload.type = data.type;
      }
      if (data.value != null) {
        payload.value = data.value.encodeJSON ? data.value.encodeJSON() : data.value;
      }
      if (data.operation != null) {
        payload.operation = data.operation;
      }
      if (data.years != null) {
        payload.years = data.years;
      }
      if (data.months != null) {
        payload.months = data.months;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 200) {
          return new PatternType(response.data);
        }
      });
    };
    /**
     * @ngdoc method
     * @name Patterns#destroy
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Delete a Pattern.
     * @example
     *
     *    Patterns.destroy({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.destroy = function(data) {
      var url = {
        path: 'undefined/api/patterns/' + data.id + '',
        method: 'DELETE'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 204) {
          return response.data;
        }
      });
    };
    /**
 * @ngdoc method
 * @name Patterns#createDefaults
 * @param {Object} data
 *    This represents the data needed to fullfill this request. It is an object
 *    with the following keys:
 *
 * @returns {Promise} A promise for the response object.
 * @description
 * Create the following commonly used default Patterns: Increase by 2% every month,
          Increase by 5% every month, Increase by 10% every month, Increase by 15% every month,
          Increase by 500% during Nov - Dec, Increase by 200% during Jan - Feb, Decrease by 2% every month,
          Decrease by 5% every month, Decrease by 10% every month, Decrease by 15% every month, Add 1 every month.
 * @example
 *
 *    Patterns.createDefaults({
 *
 *    }).then(function(result) {
 *
 *    });
 */
    api.createDefaults = function(data) {
      var url = {
        path: 'undefined/api/patterns/actions/create_defaults',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new PatternType(response.data);
        }
      });
    };
    return api;
  };
});

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('ReservedInstancePurchases', function() {
  this.$get = function($http, ReservedInstancePurchaseType) {
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
        path: 'undefined/api/scenarios/' + data.scenario_id + '/instance_combinations/:instance_combination_id/reserved_instance_purchases',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 201) {
          return new ReservedInstancePurchaseType(response.data);
        }
      });
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
        path: 'undefined/api/scenarios/' + data.scenario_id + '/instance_combinations/:instance_combination_id/reserved_instance_purchases',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new ReservedInstancePurchaseType(response.data);
        }
      });
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
        path: 'undefined/api/scenarios/' + data.scenario_id + '/instance_combinations/:instance_combination_id/reserved_instance_purchases/:id',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new ReservedInstancePurchaseType(response.data);
        }
      });
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
        path: 'undefined/api/scenarios/' + data.scenario_id + '/instance_combinations/:instance_combination_id/reserved_instance_purchases/:id',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 200) {
          return new ReservedInstancePurchaseType(response.data);
        }
      });
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
        path: 'undefined/api/scenarios/' + data.scenario_id + '/instance_combinations/:instance_combination_id/reserved_instance_purchases/:id',
        method: 'DELETE'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 204) {
          return response.data;
        }
      });
    };
    return api;
  };
});

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('ReservedInstances', function() {
  this.$get = function($http, ReservedInstanceType, FilterType) {
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
        path: 'undefined/api/reserved_instances',
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
      if (data.reserved_instance_filters != null) {
        params.reserved_instance_filters = data.reserved_instance_filters.encodeJSON ? data.reserved_instance_filters.encodeJSON() : data.reserved_instance_filters;
        delete data.reserved_instance_filters;
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new ReservedInstanceType(response.data);
        }
      });
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
        path: 'undefined/api/reserved_instances/actions/count',
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
      if (data.reserved_instance_filters != null) {
        params.reserved_instance_filters = data.reserved_instance_filters.encodeJSON ? data.reserved_instance_filters.encodeJSON() : data.reserved_instance_filters;
        delete data.reserved_instance_filters;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return response.data;
        }
      });
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
        path: 'undefined/api/reserved_instances/actions/exist',
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
      if (data.reserved_instance_filters != null) {
        params.reserved_instance_filters = data.reserved_instance_filters.encodeJSON ? data.reserved_instance_filters.encodeJSON() : data.reserved_instance_filters;
        delete data.reserved_instance_filters;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return response.data;
        }
      });
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
        path: 'undefined/api/reserved_instances/actions/export',
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
      if (data.reserved_instance_filters != null) {
        params.reserved_instance_filters = data.reserved_instance_filters.encodeJSON ? data.reserved_instance_filters.encodeJSON() : data.reserved_instance_filters;
        delete data.reserved_instance_filters;
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return response.data;
        }
      });
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
        path: 'undefined/api/reserved_instances/actions/filter_options',
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
      if (data.reserved_instance_filters != null) {
        params.reserved_instance_filters = data.reserved_instance_filters.encodeJSON ? data.reserved_instance_filters.encodeJSON() : data.reserved_instance_filters;
        delete data.reserved_instance_filters;
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
      if (data.filter_types != null) {
        params.filter_types = data.filter_types.encodeJSON ? data.filter_types.encodeJSON() : data.filter_types;
        delete data.filter_types;
      }
      if (data.search_term != null) {
        params.search_term = data.search_term;
        delete data.search_term;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new FilterType(response.data);
        }
      });
    };
    return api;
  };
});

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('Scenarios', function() {
  this.$get = function($http, ScenarioType, TimeSeriesMetricsResultType) {
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
        path: 'undefined/api/scenarios',
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
      if (data.name != null) {
        payload.name = data.name;
      }
      if (data.is_persisted != null) {
        payload.is_persisted = data.is_persisted.encodeJSON ? data.is_persisted.encodeJSON() : data.is_persisted;
      }
      if (data.snapshot_timestamp == null) {
        throw new Error('Required field \'snapshot_timestamp\' is missing from the passsed data object');
      } else {
        payload.snapshot_timestamp = data.snapshot_timestamp.encodeJSON ? data.snapshot_timestamp.encodeJSON() : data.snapshot_timestamp;
      }
      if (data.filters != null) {
        payload.filters = data.filters.encodeJSON ? data.filters.encodeJSON() : data.filters;
      }
      if (data.private_cloud_instance_count != null) {
        payload.private_cloud_instance_count = data.private_cloud_instance_count;
      }
      if (data.is_blank != null) {
        payload.is_blank = data.is_blank.encodeJSON ? data.is_blank.encodeJSON() : data.is_blank;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 201) {
          return new ScenarioType(response.data);
        }
      });
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
        path: 'undefined/api/scenarios',
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
      if (data.include_non_persisted != null) {
        params.include_non_persisted = data.include_non_persisted.encodeJSON ? data.include_non_persisted.encodeJSON() : data.include_non_persisted;
        delete data.include_non_persisted;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new ScenarioType(response.data);
        }
      });
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
        path: 'undefined/api/scenarios/' + data.id + '',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new ScenarioType(response.data);
        }
      });
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
        path: 'undefined/api/scenarios/' + data.id + '',
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
      if (data.name != null) {
        payload.name = data.name;
      }
      if (data.is_persisted != null) {
        payload.is_persisted = data.is_persisted.encodeJSON ? data.is_persisted.encodeJSON() : data.is_persisted;
      }
      if (data.snapshot_timestamp != null) {
        payload.snapshot_timestamp = data.snapshot_timestamp.encodeJSON ? data.snapshot_timestamp.encodeJSON() : data.snapshot_timestamp;
      }
      if (data.private_cloud_instance_count != null) {
        payload.private_cloud_instance_count = data.private_cloud_instance_count;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 200) {
          return new ScenarioType(response.data);
        }
      });
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
        path: 'undefined/api/scenarios/' + data.id + '',
        method: 'DELETE'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 204) {
          return response.data;
        }
      });
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
        path: 'undefined/api/scenarios/' + data.id + '/actions/forecast',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new TimeSeriesMetricsResultType(response.data);
        }
      });
    };
    return api;
  };
});

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('ScheduledReports', function() {
  this.$get = function($http, ScheduledReportType) {
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
        path: 'undefined/api/scheduled_reports',
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
        payload.additional_emails = data.additional_emails.encodeJSON ? data.additional_emails.encodeJSON() : data.additional_emails;
      }
      if (data.attach_csv != null) {
        payload.attach_csv = data.attach_csv.encodeJSON ? data.attach_csv.encodeJSON() : data.attach_csv;
      }
      if (data.filters != null) {
        payload.filters = data.filters.encodeJSON ? data.filters.encodeJSON() : data.filters;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 201) {
          return new ScheduledReportType(response.data);
        }
      });
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
        path: 'undefined/api/scheduled_reports',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new ScheduledReportType(response.data);
        }
      });
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
        path: 'undefined/api/scheduled_reports/' + data.id + '',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new ScheduledReportType(response.data);
        }
      });
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
        path: 'undefined/api/scheduled_reports/' + data.id + '',
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
      if (data.name != null) {
        payload.name = data.name;
      }
      if (data.frequency != null) {
        payload.frequency = data.frequency;
      }
      if (data.additional_emails != null) {
        payload.additional_emails = data.additional_emails.encodeJSON ? data.additional_emails.encodeJSON() : data.additional_emails;
      }
      if (data.attach_csv != null) {
        payload.attach_csv = data.attach_csv.encodeJSON ? data.attach_csv.encodeJSON() : data.attach_csv;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 200) {
          return new ScheduledReportType(response.data);
        }
      });
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
        path: 'undefined/api/scheduled_reports/' + data.id + '',
        method: 'DELETE'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 204) {
          return response.data;
        }
      });
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
        path: 'undefined/api/scheduled_reports/actions/create_defaults',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new ScheduledReportType(response.data);
        }
      });
    };
    return api;
  };
});

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('TempInstancePrices', function() {
  this.$get = function($http) {
    var api = {};
    /**
     * @ngdoc method
     * @name TempInstancePrices#index
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Returns a JSON blob with all prices for Scenario Builder.
     * @example
     *
     *    TempInstancePrices.index({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.index = function(data) {
      var url = {
        path: 'undefined/api/temp_instance_prices',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
      }).then(function(response) {
        if (response.code === 200) {
          return response.data;
        }
      });
    };
    return api;
  };
});

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
        path: 'undefined/api/user_settings',
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
        path: 'undefined/api/user_settings',
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

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('Users', function() {
  this.$get = function($http, UserType) {
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
        path: 'undefined/api/users',
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
      if (data.email == null) {
        throw new Error('Required field \'email\' is missing from the passsed data object');
      } else {
        payload.email = data.email;
      }
      if (data.accounts == null) {
        throw new Error('Required field \'accounts\' is missing from the passsed data object');
      } else {
        payload.accounts = data.accounts.encodeJSON ? data.accounts.encodeJSON() : data.accounts;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 201) {
          return new UserType(response.data);
        }
      });
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
        path: 'undefined/api/users',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new UserType(response.data);
        }
      });
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
        path: 'undefined/api/users/' + data.id + '',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return new UserType(response.data);
        }
      });
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
        path: 'undefined/api/users/' + data.id + '',
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
      if (data.accounts != null) {
        payload.accounts = data.accounts.encodeJSON ? data.accounts.encodeJSON() : data.accounts;
      }
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
        data: payload,
      }).then(function(response) {
        if (response.code === 200) {
          return new UserType(response.data);
        }
      });
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
        path: 'undefined/api/users/' + data.id + '',
        method: 'DELETE'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 204) {
          return response.data;
        }
      });
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
        path: 'undefined/api/users/actions/invite',
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        data: payload,
      }).then(function(response) {
        if (response.code === 200) {
          return new UserType(response.data);
        }
      });
    };
    return api;
  };
});

/**
 * @ngdoc module
 * @name AnalyticsAngularClient
 * @description
 * Handles communication with the AnalyticsAngularClient API.
 */
angular.module('AnalyticsAngularClient').provider('UtilizationReport', function() {
  this.$get = function($http) {
    var api = {};
    /**
     * @ngdoc method
     * @name UtilizationReport#index
     * @param {Object} data
     *    This represents the data needed to fullfill this request. It is an object
     *    with the following keys:
     *
     * @returns {Promise} A promise for the response object.
     * @description
     * Returns an array of instances with their utilization and cost.
     * @example
     *
     *    UtilizationReport.index({
     *
     *    }).then(function(result) {
     *
     *    });
     */
    api.index = function(data) {
      var url = {
        path: 'undefined/api/utilization_report',
        method: 'GET'
      };
      var headers = {
        'X-API-VERSION': '1.0'
      };
      var params = {};
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
      return $http({
        method: url.method,
        url: url.path,
        headers: headers,
        params: params,
      }).then(function(response) {
        if (response.code === 200) {
          return response.data;
        }
      });
    };
    return api;
  };
});


angular.module('AnalyticsAngularClient').provider('AccountType', function() {
  this.$get = function(CloudAccountType) {
    function AccountType(data) {
      /**
       * @ngdoc property
       * @name AccountType.id
       * @type {Number}
       * @description
       * undefined
       */
      this.id = data['id'];
      /**
       * @ngdoc property
       * @name AccountType.href
       * @type {String}
       * @description
       * undefined
       */
      this.href = data['href'];
      /**
       * @ngdoc property
       * @name AccountType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name AccountType.name
       * @type {String}
       * @description
       * undefined
       */
      this.name = data['name'];
      /**
 * @ngdoc property
 * @name AccountType.isCloudAnalyticsBlockedByBillingAdminOnly
 * @type {Boolean}
 * @description
 * Is Cloud Analytics blocked on this account due to the `billing_admin_only` setting
            being enabled and the user not having the `billing` or `admin` permissions?
 */
      this.isCloudAnalyticsBlockedByBillingAdminOnly = data['is_cloud_analytics_blocked_by_billing_admin_only'];
      /**
 * @ngdoc property
 * @name AccountType.cloudAnalyticsEnabled
 * @type {Boolean}
 * @description
 * Does the user have the required settings and permissions for this account to be enabled
            for them in Cloud Analytics?
 */
      this.cloudAnalyticsEnabled = data['cloud_analytics_enabled'];
      /**
       * @ngdoc property
       * @name AccountType.enterpriseId
       * @type {Number}
       * @description
       * The RightScale enterprise ID for the account, only applicable for enterprise accounts.
       */
      this.enterpriseId = data['enterprise_id'];
      /**
       * @ngdoc property
       * @name AccountType.enterpriseName
       * @type {String}
       * @description
       * The RightScale enterprise name for the account, only applicable for enterprise accounts.
       */
      this.enterpriseName = data['enterprise_name'];
      /**
       * @ngdoc property
       * @name AccountType.isEnterpriseParent
       * @type {Boolean}
       * @description
       * Is the account an enterprise parent account? i.e. does it have the `enterprise_master` account setting?
       */
      this.isEnterpriseParent = data['is_enterprise_parent'];
      /**
       * @ngdoc property
       * @name AccountType.parentAccountId
       * @type {Number}
       * @description
       * The ID of the RightScale enterprise parent account. Only applicable for enterprise accounts.
       */
      this.parentAccountId = data['parent_account_id'];
      /**
       * @ngdoc property
       * @name AccountType.parentAccountName
       * @type {String}
       * @description
       * The name of the RightScale enterprise parent account. Only applicable for enterprise accounts.
       */
      this.parentAccountName = data['parent_account_name'];
      /**
       * @ngdoc property
       * @name AccountType.planCode
       * @type {String}
       * @description
       * The internal plan code for the account.
       */
      this.planCode = data['plan_code'];
      /**
       * @ngdoc property
       * @name AccountType.shardId
       * @type {Number}
       * @description
       * The shard ID for the account.
       */
      this.shardId = data['shard_id'];
      /**
       * @ngdoc property
       * @name AccountType.ownerId
       * @type {Number}
       * @description
       * The user ID of the account owner.
       */
      this.ownerId = data['owner_id'];
      /**
       * @ngdoc property
       * @name AccountType.expiresIn
       * @type {Number}
       * @description
       * The number of days until the account expires. Only applicable for certain accounts (e.g. Free edition).
       */
      this.expiresIn = data['expires_in'];
      /**
       * @ngdoc property
       * @name AccountType.userHasAdmin
       * @type {Boolean}
       * @description
       * Does the currently logged-in user have the admin permission in the account?
       */
      this.userHasAdmin = data['user_has_admin'];
      /**
       * @ngdoc property
       * @name AccountType.userHasActor
       * @type {Boolean}
       * @description
       * Does the currently logged-in user have the actor permission in the account?
       */
      this.userHasActor = data['user_has_actor'];
      /**
       * @ngdoc property
       * @name AccountType.userHasEnterpriseManager
       * @type {Boolean}
       * @description
       * Does the currently logged-in user have the enterprise_manager permission in the account?
       */
      this.userHasEnterpriseManager = data['user_has_enterprise_manager'];
      /**
       * @ngdoc property
       * @name AccountType.usesIpWhitelisting
       * @type {Boolean}
       * @description
       * Does the account use IP whitelisting to restrict access?
       */
      this.usesIpWhitelisting = data['uses_ip_whitelisting'];
      /**
       * @ngdoc property
       * @name AccountType.cloudAccounts
       * @type {Array}
       * @description
       * The account's cloud accounts.
       */
      // Currently the existence of this type is assumed
      this.cloudAccounts = (data['cloud_accounts'] || []).map(function(element) {
        return new CloudAccountType(element);
      });
    }
  };
});

angular.module('AnalyticsAngularClient').provider('AnalysisSnapshotType', function() {
  this.$get = function(SetType, FilterType, ModuleStateType) {
    function AnalysisSnapshotType(data) {
      /**
       * @ngdoc property
       * @name AnalysisSnapshotType.uuid
       * @type {String}
       * @description
       * Universally unique ID of the snapshot.
       */
      this.uuid = data['uuid'];
      /**
       * @ngdoc property
       * @name AnalysisSnapshotType.href
       * @type {String}
       * @description
       * undefined
       */
      this.href = data['href'];
      /**
       * @ngdoc property
       * @name AnalysisSnapshotType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name AnalysisSnapshotType.createdAt
       * @type {Date}
       * @description
       * Timestamp of when the snapshot was created.
       */
      this.createdAt = data['created_at'];
      /**
       * @ngdoc property
       * @name AnalysisSnapshotType.createdBy
       * @type {String}
       * @description
       * Whether the snapshot was created manually by a user, or automatically via a ScheduledReport or BudgetAlert.
       */
      this.createdBy = data['created_by'];
      /**
       * @ngdoc property
       * @name AnalysisSnapshotType.updatedAt
       * @type {Date}
       * @description
       * Timestamp of when the snapshot was last updated.
       */
      this.updatedAt = data['updated_at'];
      /**
       * @ngdoc property
       * @name AnalysisSnapshotType.startTime
       * @type {Date}
       * @description
       * The start time of the snapshot.
       */
      this.startTime = data['start_time'];
      /**
       * @ngdoc property
       * @name AnalysisSnapshotType.endTime
       * @type {Date}
       * @description
       * The end time of the snapshot.
       */
      this.endTime = data['end_time'];
      /**
       * @ngdoc property
       * @name AnalysisSnapshotType.isComparison
       * @type {Boolean}
       * @description
       * Whether the snapshot should return comparison data for the previous date range.
       */
      this.isComparison = data['is_comparison'];
      /**
       * @ngdoc property
       * @name AnalysisSnapshotType.granularity
       * @type {String}
       * @description
       * Granularity of time series data.
       */
      this.granularity = data['granularity'];
      /**
       * @ngdoc property
       * @name AnalysisSnapshotType.metrics
       * @type {SetType}
       * @description
       * Metrics that should be included in the snapshot.
       */
      // Currently the existence of this type is assumed
      this.metrics = new SetType(data['metrics']);
      /**
       * @ngdoc property
       * @name AnalysisSnapshotType.filters
       * @type {Array}
       * @description
       * Filters used to create the snapshot
       */
      // Currently the existence of this type is assumed
      this.filters = (data['filters'] || []).map(function(element) {
        return new FilterType(element);
      });
      /**
       * @ngdoc property
       * @name AnalysisSnapshotType.moduleStates
       * @type {Array}
       * @description
       * Used by the Cloud Analytics UI to store the state of the snapshot modules based on the state of the Analyze page modules.
       */
      // Currently the existence of this type is assumed
      this.moduleStates = (data['module_states'] || []).map(function(element) {
        return new ModuleStateType(element);
      });
      /**
       * @ngdoc property
       * @name AnalysisSnapshotType.excludedTagTypes
       * @type {SetType}
       * @description
       * Used by the Cloud Analytics UI to disable tag types in the tags module.
       */
      // Currently the existence of this type is assumed
      this.excludedTagTypes = new SetType(data['excluded_tag_types']);
      /**
       * @ngdoc property
       * @name AnalysisSnapshotType.missingAccessToSomeAccounts
       * @type {Boolean}
       * @description
       * Returns true if the user viewing the snapshot does not have access to the all of the accounts that were used to create the snapshot.
       */
      this.missingAccessToSomeAccounts = data['missing_access_to_some_accounts'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('BudgetAlertType', function() {
  this.$get = function(FilterType) {
    function BudgetAlertType(data) {
      /**
       * @ngdoc property
       * @name BudgetAlertType.id
       * @type {Number}
       * @description
       * undefined
       */
      this.id = data['id'];
      /**
       * @ngdoc property
       * @name BudgetAlertType.href
       * @type {String}
       * @description
       * undefined
       */
      this.href = data['href'];
      /**
       * @ngdoc property
       * @name BudgetAlertType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name BudgetAlertType.name
       * @type {String}
       * @description
       * undefined
       */
      this.name = data['name'];
      /**
       * @ngdoc property
       * @name BudgetAlertType.budget
       * @type {Object}
       * @description
       * Budget for the alert.
       */
      this.budget = data['budget'];
      /**
 * @ngdoc property
 * @name BudgetAlertType.type
 * @type {String}
 * @description
 * Whether alerts should be triggered when the actual cost exceeds the monthly budget, or when
            we forecast the costs going over the monthly budget based on the average daily-cost of the current month.
 */
      this.type = data['type'];
      /**
       * @ngdoc property
       * @name BudgetAlertType.frequency
       * @type {String}
       * @description
       * The intervals at which alerts should be sent, emails will be sent at most once a day, week or month.
       */
      this.frequency = data['frequency'];
      /**
       * @ngdoc property
       * @name BudgetAlertType.additionalEmails
       * @type {Array}
       * @description
       * In addition to your email, the report will be sent to these additional email addresses.
       */
      this.additionalEmails = data['additional_emails'];
      /**
       * @ngdoc property
       * @name BudgetAlertType.attachCsv
       * @type {Boolean}
       * @description
       * Whether the emails should include a CSV attachement of the instance data.
       */
      this.attachCsv = data['attach_csv'];
      /**
       * @ngdoc property
       * @name BudgetAlertType.filters
       * @type {Array}
       * @description
       * Filters to use for the BudgetAlert.
       */
      // Currently the existence of this type is assumed
      this.filters = (data['filters'] || []).map(function(element) {
        return new FilterType(element);
      });
      /**
       * @ngdoc property
       * @name BudgetAlertType.createdAt
       * @type {Date}
       * @description
       * Timestamp of when the BudgetAlert was created.
       */
      this.createdAt = data['created_at'];
      /**
       * @ngdoc property
       * @name BudgetAlertType.updatedAt
       * @type {Date}
       * @description
       * Timestamp of when the BudgetAlert was last updated.
       */
      this.updatedAt = data['updated_at'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('CloudAccountType', function() {
  this.$get = function() {
    function CloudAccountType(data) {
      /**
       * @ngdoc property
       * @name CloudAccountType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name CloudAccountType.cloudId
       * @type {Number}
       * @description
       * ID of the cloud.
       */
      this.cloudId = data['cloud_id'];
      /**
       * @ngdoc property
       * @name CloudAccountType.cloudName
       * @type {String}
       * @description
       * Name of the cloud.
       */
      this.cloudName = data['cloud_name'];
      /**
       * @ngdoc property
       * @name CloudAccountType.cloudType
       * @type {String}
       * @description
       * Type of the cloud.
       */
      this.cloudType = data['cloud_type'];
      /**
       * @ngdoc property
       * @name CloudAccountType.cloudVendorName
       * @type {String}
       * @description
       * The name for the cloud provider
       */
      this.cloudVendorName = data['cloud_vendor_name'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('CurrentUserType', function() {
  this.$get = function() {
    function CurrentUserType(data) {
      /**
       * @ngdoc property
       * @name CurrentUserType.id
       * @type {Number}
       * @description
       * undefined
       */
      this.id = data['id'];
      /**
       * @ngdoc property
       * @name CurrentUserType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name CurrentUserType.firstName
       * @type {String}
       * @description
       * First name of the user.
       */
      this.firstName = data['first_name'];
      /**
       * @ngdoc property
       * @name CurrentUserType.lastName
       * @type {String}
       * @description
       * Last name of the user.
       */
      this.lastName = data['last_name'];
      /**
       * @ngdoc property
       * @name CurrentUserType.email
       * @type {String}
       * @description
       * Email address of the user.
       */
      this.email = data['email'];
      /**
       * @ngdoc property
       * @name CurrentUserType.timezone
       * @type {String}
       * @description
       * The time zone of the user, can be any valid tz timezone (`http://en.wikipedia.org/wiki/List_of_tz_database_time_zones`).
       */
      this.timezone = data['timezone'];
      /**
       * @ngdoc property
       * @name CurrentUserType.company
       * @type {String}
       * @description
       * The company of the user.
       */
      this.company = data['company'];
      /**
       * @ngdoc property
       * @name CurrentUserType.phone
       * @type {String}
       * @description
       * The phone number of the user.
       */
      this.phone = data['phone'];
      /**
       * @ngdoc property
       * @name CurrentUserType.createdAt
       * @type {Date}
       * @description
       * Timestamp of when the user was created.
       */
      this.createdAt = data['created_at'];
      /**
       * @ngdoc property
       * @name CurrentUserType.updatedAt
       * @type {Date}
       * @description
       * Timestamp of when the user was last updated.
       */
      this.updatedAt = data['updated_at'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('FilterType', function() {
  this.$get = function() {
    function FilterType(data) {
      /**
       * @ngdoc property
       * @name FilterType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name FilterType.type
       * @type {String}
       * @description
       * The type that is being used to filter. If the account_id filter is left empty, all of the accounts you have access to will be used.
       */
      this.type = data['type'];
      /**
       * @ngdoc property
       * @name FilterType.value
       * @type {String}
       * @description
       * The value of the type that is being used to filter.
       */
      this.value = data['value'];
      /**
       * @ngdoc property
       * @name FilterType.label
       * @type {String}
       * @description
       * undefined
       */
      this.label = data['label'];
      /**
       * @ngdoc property
       * @name FilterType.tagResourceType
       * @type {String}
       * @description
       * undefined
       */
      this.tagResourceType = data['tag_resource_type'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('InstanceType', function() {
  this.$get = function(TagType) {
    function InstanceType(data) {
      /**
       * @ngdoc property
       * @name InstanceType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name InstanceType.instanceKey
       * @type {String}
       * @description
       * Unique identifier for the instance across accounts, clouds and cloud vendors.
       */
      this.instanceKey = data['instance_key'];
      /**
       * @ngdoc property
       * @name InstanceType.instanceUid
       * @type {String}
       * @description
       * Cloud vendor indentifier for instance.
       */
      this.instanceUid = data['instance_uid'];
      /**
       * @ngdoc property
       * @name InstanceType.instanceRsid
       * @type {String}
       * @description
       * RightScale identifier for instance.
       */
      this.instanceRsid = data['instance_rsid'];
      /**
       * @ngdoc property
       * @name InstanceType.accountId
       * @type {Number}
       * @description
       * The RightScale account ID.
       */
      this.accountId = data['account_id'];
      /**
       * @ngdoc property
       * @name InstanceType.accountName
       * @type {String}
       * @description
       * The RightScale account name.
       */
      this.accountName = data['account_name'];
      /**
       * @ngdoc property
       * @name InstanceType.instanceStartAt
       * @type {Date}
       * @description
       * The time that the instance went operational, in the user's current timezone.
       */
      this.instanceStartAt = data['instance_start_at'];
      /**
 * @ngdoc property
 * @name InstanceType.instanceEndAt
 * @type {Date}
 * @description
 * The time the instance was wither terminated or stopped, in the user's current timezone.
                        This can be null if the instance is still operational.
 */
      this.instanceEndAt = data['instance_end_at'];
      /**
       * @ngdoc property
       * @name InstanceType.cloudVendorName
       * @type {String}
       * @description
       * The name of the cloud vendor.
       */
      this.cloudVendorName = data['cloud_vendor_name'];
      /**
       * @ngdoc property
       * @name InstanceType.cloudId
       * @type {Number}
       * @description
       * The RightScale ID of the cloud.
       */
      this.cloudId = data['cloud_id'];
      /**
       * @ngdoc property
       * @name InstanceType.cloudName
       * @type {String}
       * @description
       * The name of the cloud.
       */
      this.cloudName = data['cloud_name'];
      /**
       * @ngdoc property
       * @name InstanceType.datacenterKey
       * @type {String}
       * @description
       * A unique identifier for the datacenter across cloud vendors.
       */
      this.datacenterKey = data['datacenter_key'];
      /**
       * @ngdoc property
       * @name InstanceType.datacenterName
       * @type {String}
       * @description
       * The name of the datacenter.
       */
      this.datacenterName = data['datacenter_name'];
      /**
       * @ngdoc property
       * @name InstanceType.deploymentId
       * @type {Number}
       * @description
       * The RightScale ID of the deployment.
       */
      this.deploymentId = data['deployment_id'];
      /**
       * @ngdoc property
       * @name InstanceType.deploymentName
       * @type {String}
       * @description
       * The name of the deployment. If null the instance does not belong to a deployment.
       */
      this.deploymentName = data['deployment_name'];
      /**
       * @ngdoc property
       * @name InstanceType.instanceTypeKey
       * @type {String}
       * @description
       * Unique identifier for the instance type across cloud vendors.
       */
      this.instanceTypeKey = data['instance_type_key'];
      /**
       * @ngdoc property
       * @name InstanceType.instanceTypeName
       * @type {String}
       * @description
       * The name of the instance type.
       */
      this.instanceTypeName = data['instance_type_name'];
      /**
       * @ngdoc property
       * @name InstanceType.instanceName
       * @type {String}
       * @description
       * The name given to the instance by the user.
       */
      this.instanceName = data['instance_name'];
      /**
       * @ngdoc property
       * @name InstanceType.serverTemplateId
       * @type {Number}
       * @description
       * The RightScale ID of the ServerTemplate.
       */
      this.serverTemplateId = data['server_template_id'];
      /**
       * @ngdoc property
       * @name InstanceType.serverTemplateName
       * @type {String}
       * @description
       * The name of the ServerTemplate. If null the instance does not have a ServerTemplate.
       */
      this.serverTemplateName = data['server_template_name'];
      /**
       * @ngdoc property
       * @name InstanceType.platform
       * @type {String}
       * @description
       * The platform of the instance.
       */
      this.platform = data['platform'];
      /**
       * @ngdoc property
       * @name InstanceType.provisionedByUserId
       * @type {Number}
       * @description
       * The ID of the RightScale user that provisioned the instance. User ID 0 means that the instance was automatically launched from by the RightScale platform.
       */
      this.provisionedByUserId = data['provisioned_by_user_id'];
      /**
       * @ngdoc property
       * @name InstanceType.provisionedByUserEmail
       * @type {String}
       * @description
       * The email address of the RightScale user that provisioned the instance. If null the instance was not provisioned by a RightScale user.
       */
      this.provisionedByUserEmail = data['provisioned_by_user_email'];
      /**
       * @ngdoc property
       * @name InstanceType.incarnatorId
       * @type {Number}
       * @description
       * The ID of the Server or ServerType that launched the instance.
       */
      this.incarnatorId = data['incarnator_id'];
      /**
       * @ngdoc property
       * @name InstanceType.incarnatorType
       * @type {String}
       * @description
       * Whether the instance was launched by a Server or ServerArray. If null the instance is not managed by RightScale.
       */
      this.incarnatorType = data['incarnator_type'];
      /**
       * @ngdoc property
       * @name InstanceType.state
       * @type {String}
       * @description
       * The current state of the instance.
       */
      this.state = data['state'];
      /**
       * @ngdoc property
       * @name InstanceType.tags
       * @type {Array}
       * @description
       * undefined
       */
      // Currently the existence of this type is assumed
      this.tags = (data['tags'] || []).map(function(element) {
        return new TagType(element);
      });
      /**
       * @ngdoc property
       * @name InstanceType.totalUsageHours
       * @type {Number}
       * @description
       * The total number of hours that the instance was operational for.
       */
      this.totalUsageHours = data['total_usage_hours'];
      /**
       * @ngdoc property
       * @name InstanceType.estimatedCostForPeriod
       * @type {Number}
       * @description
       * The total estimated cost (USD) of the instance during the period defined by the start and end time parameters.
       */
      this.estimatedCostForPeriod = data['estimated_cost_for_period'];
      /**
       * @ngdoc property
       * @name InstanceType.estimatedManagedRcuCountForPeriod
       * @type {Number}
       * @description
       * The total estimated managed RCU count of the instance during the period defined by the start and end time parameters.
       */
      this.estimatedManagedRcuCountForPeriod = data['estimated_managed_rcu_count_for_period'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('InstanceCombinationType', function() {
  this.$get = function(ScenarioType, PatternType, ReservedInstancePurchaseType) {
    function InstanceCombinationType(data) {
      /**
       * @ngdoc property
       * @name InstanceCombinationType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name InstanceCombinationType.id
       * @type {Number}
       * @description
       * undefined
       */
      this.id = data['id'];
      /**
       * @ngdoc property
       * @name InstanceCombinationType.href
       * @type {String}
       * @description
       * undefined
       */
      this.href = data['href'];
      /**
       * @ngdoc property
       * @name InstanceCombinationType.scenario
       * @type {ScenarioType}
       * @description
       * The Scenario to which this InstanceCombination belongs to.
       */
      // Currently the existence of this type is assumed
      this.scenario = new ScenarioType(data['scenario']);
      /**
       * @ngdoc property
       * @name InstanceCombinationType.cloudVendorName
       * @type {String}
       * @description
       * The cloud vendor name of the instances.
       */
      this.cloudVendorName = data['cloud_vendor_name'];
      /**
       * @ngdoc property
       * @name InstanceCombinationType.cloudName
       * @type {String}
       * @description
       * The cloud name of the instances.
       */
      this.cloudName = data['cloud_name'];
      /**
       * @ngdoc property
       * @name InstanceCombinationType.datacenterName
       * @type {String}
       * @description
       * Where applicable, the datacenter name of the instances.
       */
      this.datacenterName = data['datacenter_name'];
      /**
       * @ngdoc property
       * @name InstanceCombinationType.instanceTypeName
       * @type {String}
       * @description
       * The instance type.
       */
      this.instanceTypeName = data['instance_type_name'];
      /**
       * @ngdoc property
       * @name InstanceCombinationType.platform
       * @type {String}
       * @description
       * The platform isn't the actual operating system of the instance as cloud vendors don't always have a way for us to access this.
       */
      this.platform = data['platform'];
      /**
       * @ngdoc property
       * @name InstanceCombinationType.quantity
       * @type {Number}
       * @description
       * The number of instances.
       */
      this.quantity = data['quantity'];
      /**
       * @ngdoc property
       * @name InstanceCombinationType.monthlyUsageOption
       * @type {String}
       * @description
       * The number of hours that the instances run for every month.
       */
      this.monthlyUsageOption = data['monthly_usage_option'];
      /**
       * @ngdoc property
       * @name InstanceCombinationType.monthlyUsageHours
       * @type {Number}
       * @description
       * If monthly_usage_option is set to 'Other', this specifies the hours in the month the instances are running.
       */
      this.monthlyUsageHours = data['monthly_usage_hours'];
      /**
       * @ngdoc property
       * @name InstanceCombinationType.patterns
       * @type {Array}
       * @description
       * Patterns applied to the InstanceCombination, in the order that they are applied.
       */
      // Currently the existence of this type is assumed
      this.patterns = (data['patterns'] || []).map(function(element) {
        return new PatternType(element);
      });
      /**
       * @ngdoc property
       * @name InstanceCombinationType.reservedInstancePurchases
       * @type {Array}
       * @description
       * Reserved Instance purchases applied to the instance combination.
       */
      // Currently the existence of this type is assumed
      this.reservedInstancePurchases = (data['reserved_instance_purchases'] || []).map(function(element) {
        return new ReservedInstancePurchaseType(element);
      });
      /**
       * @ngdoc property
       * @name InstanceCombinationType.createdAt
       * @type {Date}
       * @description
       * Timestamp of when the InstanceCombination was created.
       */
      this.createdAt = data['created_at'];
      /**
       * @ngdoc property
       * @name InstanceCombinationType.updatedAt
       * @type {Date}
       * @description
       * Timestamp of when the InstanceCombination was last updated.
       */
      this.updatedAt = data['updated_at'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('InstanceUsagePeriodType', function() {
  this.$get = function() {
    function InstanceUsagePeriodType(data) {
      /**
       * @ngdoc property
       * @name InstanceUsagePeriodType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name InstanceUsagePeriodType.instanceKey
       * @type {String}
       * @description
       * Internal key for uniquely identifying an instance.
       */
      this.instanceKey = data['instance_key'];
      /**
       * @ngdoc property
       * @name InstanceUsagePeriodType.usageStartAt
       * @type {Date}
       * @description
       * The start time of the usage period.
       */
      this.usageStartAt = data['usage_start_at'];
      /**
       * @ngdoc property
       * @name InstanceUsagePeriodType.usageEndAt
       * @type {Date}
       * @description
       * The end time of the usage period.
       */
      this.usageEndAt = data['usage_end_at'];
      /**
       * @ngdoc property
       * @name InstanceUsagePeriodType.instanceTypeName
       * @type {String}
       * @description
       * The name of the instance type.
       */
      this.instanceTypeName = data['instance_type_name'];
      /**
       * @ngdoc property
       * @name InstanceUsagePeriodType.pricingType
       * @type {String}
       * @description
       * The pricing type and offering type of the instance.
       */
      this.pricingType = data['pricing_type'];
      /**
       * @ngdoc property
       * @name InstanceUsagePeriodType.hourlyPrice
       * @type {Number}
       * @description
       * The hourly price of the instance.
       */
      this.hourlyPrice = data['hourly_price'];
      /**
       * @ngdoc property
       * @name InstanceUsagePeriodType.rcuRate
       * @type {Number}
       * @description
       * The hourly RCU rate of the instance.
       */
      this.rcuRate = data['rcu_rate'];
      /**
 * @ngdoc property
 * @name InstanceUsagePeriodType.reservationUid
 * @type {String}
 * @description
 * The AWS Reserved Instance ID that was applied to this instance during this usage period.
                        Will be null if no Reserved Instance was applied.
 */
      this.reservationUid = data['reservation_uid'];
      /**
       * @ngdoc property
       * @name InstanceUsagePeriodType.estimatedCost
       * @type {Number}
       * @description
       * The estimated cost of the instance during this usage period.
       */
      this.estimatedCost = data['estimated_cost'];
      /**
       * @ngdoc property
       * @name InstanceUsagePeriodType.estimatedManagedRcuCount
       * @type {Number}
       * @description
       * The estimated managed RCU count of the instance during this usage period.
       */
      this.estimatedManagedRcuCount = data['estimated_managed_rcu_count'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('MetricsType', function() {
  this.$get = function() {
    function MetricsType(data) {
      /**
       * @ngdoc property
       * @name MetricsType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name MetricsType.averageInstanceCount
       * @type {Number}
       * @description
       * The average instance count.
       */
      this.averageInstanceCount = data['average_instance_count'];
      /**
       * @ngdoc property
       * @name MetricsType.lowestInstanceCount
       * @type {Number}
       * @description
       * The lowest instance count at any point.
       */
      this.lowestInstanceCount = data['lowest_instance_count'];
      /**
       * @ngdoc property
       * @name MetricsType.highestInstanceCount
       * @type {Number}
       * @description
       * The highest instance count at any point.
       */
      this.highestInstanceCount = data['highest_instance_count'];
      /**
       * @ngdoc property
       * @name MetricsType.totalCost
       * @type {Number}
       * @description
       * The total cost (USD).
       */
      this.totalCost = data['total_cost'];
      /**
       * @ngdoc property
       * @name MetricsType.wastedReservedInstanceCost
       * @type {Number}
       * @description
       * The total cost (USD) for any period when a Reserved Instance was not being fully utilized. This only applies to Heavy, No Upfront and Partial Upfront Reserved Instances.
       */
      this.wastedReservedInstanceCost = data['wasted_reserved_instance_cost'];
      /**
       * @ngdoc property
       * @name MetricsType.managedInstanceRcuCount
       * @type {Number}
       * @description
       * The total RightScale Compute Unit count for instances managed by RightScale.
       */
      this.managedInstanceRcuCount = data['managed_instance_rcu_count'];
      /**
       * @ngdoc property
       * @name MetricsType.unmanagedInstanceRcuCount
       * @type {Number}
       * @description
       * The total RightScale Compute Unit count for instances not managed by RightScale.
       */
      this.unmanagedInstanceRcuCount = data['unmanaged_instance_rcu_count'];
      /**
       * @ngdoc property
       * @name MetricsType.managedInstanceHours
       * @type {Number}
       * @description
       * The total hours for instances managed by RightScale.
       */
      this.managedInstanceHours = data['managed_instance_hours'];
      /**
       * @ngdoc property
       * @name MetricsType.unmanagedInstanceHours
       * @type {Number}
       * @description
       * The total hours for instances not managed by RightScale.
       */
      this.unmanagedInstanceHours = data['unmanaged_instance_hours'];
      /**
       * @ngdoc property
       * @name MetricsType.instanceUsageCost
       * @type {Number}
       * @description
       * The total usage cost (USD) of instances.
       */
      this.instanceUsageCost = data['instance_usage_cost'];
      /**
       * @ngdoc property
       * @name MetricsType.reservedInstanceUpfrontCost
       * @type {Number}
       * @description
       * The upfront cost (USD) of Reserved Instances. This only applies to Light, Mediam, Heavy, Partial and All Upfront Reserved Instances.
       */
      this.reservedInstanceUpfrontCost = data['reserved_instance_upfront_cost'];
      /**
       * @ngdoc property
       * @name MetricsType.reservedInstanceRecurringCost
       * @type {Number}
       * @description
       * The recurring cost (USD) of Reserved Instances. This only applies to Heavy, No Upfront and Partial Upfront Reserved Instances.
       */
      this.reservedInstanceRecurringCost = data['reserved_instance_recurring_cost'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('MetricsResultType', function() {
  this.$get = function(MetricsType) {
    function MetricsResultType(data) {
      /**
       * @ngdoc property
       * @name MetricsResultType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name MetricsResultType.group
       * @type {Hash}
       * @description
       * undefined
       */
      this.group = data['group'];
      /**
       * @ngdoc property
       * @name MetricsResultType.metrics
       * @type {MetricsType}
       * @description
       * undefined
       */
      // Currently the existence of this type is assumed
      this.metrics = new MetricsType(data['metrics']);
      /**
       * @ngdoc property
       * @name MetricsResultType.breakdownMetricsResults
       * @type {Array}
       * @description
       * The nested metric results requested by the `group` parameter.
       */
      // Currently the existence of this type is assumed
      this.breakdownMetricsResults = (data['breakdown_metrics_results'] || []).map(function(element) {
        return new MetricsResultType(element);
      });
    }
  };
});

angular.module('AnalyticsAngularClient').provider('ModuleStateType', function() {
  this.$get = function() {
    function ModuleStateType(data) {
      /**
       * @ngdoc property
       * @name ModuleStateType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name ModuleStateType.type
       * @type {String}
       * @description
       * Module name.
       */
      this.type = data['type'];
      /**
       * @ngdoc property
       * @name ModuleStateType.active
       * @type {Boolean}
       * @description
       * Whether this module is displayed on the page or not.
       */
      this.active = data['active'];
      /**
       * @ngdoc property
       * @name ModuleStateType.expanded
       * @type {Boolean}
       * @description
       * Whether this module is expanded on the page or not, only applicable for active modules.
       */
      this.expanded = data['expanded'];
      /**
       * @ngdoc property
       * @name ModuleStateType.sortKey
       * @type {String}
       * @description
       * The metric used to sort the values in the module.
       */
      this.sortKey = data['sort_key'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('PatternType', function() {
  this.$get = function(ScenarioType) {
    function PatternType(data) {
      /**
       * @ngdoc property
       * @name PatternType.id
       * @type {Number}
       * @description
       * undefined
       */
      this.id = data['id'];
      /**
       * @ngdoc property
       * @name PatternType.href
       * @type {String}
       * @description
       * undefined
       */
      this.href = data['href'];
      /**
       * @ngdoc property
       * @name PatternType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name PatternType.name
       * @type {String}
       * @description
       * Name of the pattern.
       */
      this.name = data['name'];
      /**
       * @ngdoc property
       * @name PatternType.summary
       * @type {String}
       * @description
       * Summary of the pattern.
       */
      this.summary = data['summary'];
      /**
 * @ngdoc property
 * @name PatternType.type
 * @type {String}
 * @description
 * Pattern type reflects whether the change that the pattern applies continues after the pattern has ended.
          Changes made by permanent patterns persist past the chosen end date, e.g. general growth.
          Changes made by temporary patterns only apply during the selected dates, e.g. holiday increase.
 */
      this.type = data['type'];
      /**
 * @ngdoc property
 * @name PatternType.value
 * @type {Number}
 * @description
 * Amount of change that the pattern will apply. The increase and decrease operations are based on percentages,
            so for example, use the value 10 to increase/decrease by 10%.
 */
      this.value = data['value'];
      /**
       * @ngdoc property
       * @name PatternType.operation
       * @type {String}
       * @description
       * Type of change, the increase and decrease operations are based on percentages.
       */
      this.operation = data['operation'];
      /**
 * @ngdoc property
 * @name PatternType.years
 * @type {String}
 * @description
 * The years that the pattern will apply to. This can be "all" to apply the pattern in all years;
          a range such as "1-3" to apply the pattern from years 1 to years 3; or individual years in a comma-separated list such as "1,3".
 */
      this.years = data['years'];
      /**
 * @ngdoc property
 * @name PatternType.months
 * @type {String}
 * @description
 * The months that the pattern apply to. This can be "all" to apply the pattern in all months;
          a range such as "1-3" meaning the pattern will be applied from the start of January to the end of March; or
          individual months in a comma-separated list such as "5, 7, 9" meaning the pattern will be applied in May, July and September.
 */
      this.months = data['months'];
      /**
       * @ngdoc property
       * @name PatternType.createdAt
       * @type {Date}
       * @description
       * Timestamp of when the pattern was created.
       */
      this.createdAt = data['created_at'];
      /**
       * @ngdoc property
       * @name PatternType.updatedAt
       * @type {Date}
       * @description
       * Timestamp of when the pattern was last updated.
       */
      this.updatedAt = data['updated_at'];
      /**
       * @ngdoc property
       * @name PatternType.scenarios
       * @type {Array}
       * @description
       * Collection of Scenarios that use this pattern.
       */
      // Currently the existence of this type is assumed
      this.scenarios = (data['scenarios'] || []).map(function(element) {
        return new ScenarioType(element);
      });
    }
  };
});

angular.module('AnalyticsAngularClient').provider('ReservedInstanceType', function() {
  this.$get = function() {
    function ReservedInstanceType(data) {
      /**
       * @ngdoc property
       * @name ReservedInstanceType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.reservationUid
       * @type {String}
       * @description
       * The AWS identifier of the Reserved Instance.
       */
      this.reservationUid = data['reservation_uid'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.accountId
       * @type {Number}
       * @description
       * The Rightscale account ID.
       */
      this.accountId = data['account_id'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.accountName
       * @type {String}
       * @description
       * The RightScale account name.
       */
      this.accountName = data['account_name'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.cloudVendorName
       * @type {String}
       * @description
       * The name of the cloud vendor. Only Amazon Web Services offer Reserved Instances.
       */
      this.cloudVendorName = data['cloud_vendor_name'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.cloudId
       * @type {Number}
       * @description
       * The RightScale ID of the cloud.
       */
      this.cloudId = data['cloud_id'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.cloudName
       * @type {String}
       * @description
       * The name of the cloud.
       */
      this.cloudName = data['cloud_name'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.datacenterKey
       * @type {String}
       * @description
       * A unique identifier for the datacenter across cloud vendors.
       */
      this.datacenterKey = data['datacenter_key'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.datacenterName
       * @type {String}
       * @description
       * The name of the datacenter.
       */
      this.datacenterName = data['datacenter_name'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.instanceTypeKey
       * @type {String}
       * @description
       * Unique identifier for the instance type across cloud vendors.
       */
      this.instanceTypeKey = data['instance_type_key'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.instanceTypeName
       * @type {String}
       * @description
       * The name of the instance type.
       */
      this.instanceTypeName = data['instance_type_name'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.duration
       * @type {Number}
       * @description
       * The duration in seconds of the Reserved Instance.
       */
      this.duration = data['duration'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.platform
       * @type {String}
       * @description
       * The operating system of the instance.
       */
      this.platform = data['platform'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.tenancy
       * @type {String}
       * @description
       * Whether the instance runs on shared hardware (default) or single-tenant hardware (dedicated).
       */
      this.tenancy = data['tenancy'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.offeringType
       * @type {String}
       * @description
       * The offering type of the Reserved Instance.
       */
      this.offeringType = data['offering_type'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.startTime
       * @type {Date}
       * @description
       * The start date of the Reserved Instance.
       */
      this.startTime = data['start_time'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.endTime
       * @type {Date}
       * @description
       * The end date of the Reserved Instance.
       */
      this.endTime = data['end_time'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.instanceCount
       * @type {Number}
       * @description
       * The number of instances applicable for the Reserved Instance.
       */
      this.instanceCount = data['instance_count'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.state
       * @type {String}
       * @description
       * The payment state of the Reserved Instance.
       */
      this.state = data['state'];
      /**
 * @ngdoc property
 * @name ReservedInstanceType.unusedRecurringCost
 * @type {Number}
 * @description
 * Total cost (USD) for any periods when the Reserved Instance was not being fully utilized during the period defined by the start and end time parameter.
                        This only applies to Heavy, No Upfront and Partial Upfront Reserved Instances.
 */
      this.unusedRecurringCost = data['unused_recurring_cost'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.utilizationPercentage
       * @type {Number}
       * @description
       * Utilization percentage for the Reserved Instance during the period defined by the start and end time parameters.
       */
      this.utilizationPercentage = data['utilization_percentage'];
      /**
       * @ngdoc property
       * @name ReservedInstanceType.costSaved
       * @type {Number}
       * @description
       * The amount (USD) saved by using Reserved Instances. This does not take into account the upfront cost.
       */
      this.costSaved = data['cost_saved'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('ReservedInstancePurchaseType', function() {
  this.$get = function(InstanceCombinationType) {
    function ReservedInstancePurchaseType(data) {
      /**
       * @ngdoc property
       * @name ReservedInstancePurchaseType.id
       * @type {Number}
       * @description
       * undefined
       */
      this.id = data['id'];
      /**
       * @ngdoc property
       * @name ReservedInstancePurchaseType.href
       * @type {String}
       * @description
       * undefined
       */
      this.href = data['href'];
      /**
       * @ngdoc property
       * @name ReservedInstancePurchaseType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name ReservedInstancePurchaseType.offeringType
       * @type {String}
       * @description
       * The ReservedInstance offering type. Support for the newer types are coming soon!
       */
      this.offeringType = data['offering_type'];
      /**
       * @ngdoc property
       * @name ReservedInstancePurchaseType.duration
       * @type {Number}
       * @description
       * The duration of the ReservedInstance in seconds, 94608000 is 3 years, 31536000 is 1 year.
       */
      this.duration = data['duration'];
      /**
       * @ngdoc property
       * @name ReservedInstancePurchaseType.quantity
       * @type {Number}
       * @description
       * Number of instances to include in the reservation.
       */
      this.quantity = data['quantity'];
      /**
       * @ngdoc property
       * @name ReservedInstancePurchaseType.startDate
       * @type {Date}
       * @description
       * Date at which the ReservedInstance purchase should start from, this can be a future date.
       */
      this.startDate = data['start_date'];
      /**
       * @ngdoc property
       * @name ReservedInstancePurchaseType.autoRenew
       * @type {Boolean}
       * @description
       * Whether the ReservedInstance should be renewed every year or not; only applicable for 1 year ReservedInstances.
       */
      this.autoRenew = data['auto_renew'];
      /**
       * @ngdoc property
       * @name ReservedInstancePurchaseType.instanceCombination
       * @type {InstanceCombinationType}
       * @description
       * The InstanceCombination for the ReservedInstance.
       */
      // Currently the existence of this type is assumed
      this.instanceCombination = new InstanceCombinationType(data['instance_combination']);
      /**
       * @ngdoc property
       * @name ReservedInstancePurchaseType.createdAt
       * @type {Date}
       * @description
       * Timestamp of when the Reserved Instance Purchase was created.
       */
      this.createdAt = data['created_at'];
      /**
       * @ngdoc property
       * @name ReservedInstancePurchaseType.updatedAt
       * @type {Date}
       * @description
       * Timestamp of when the Reserved Instance Purchase was created.
       */
      this.updatedAt = data['updated_at'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('ScenarioType', function() {
  this.$get = function(FilterType, TimeSeriesMetricsResultType, InstanceCombinationType) {
    function ScenarioType(data) {
      /**
       * @ngdoc property
       * @name ScenarioType.id
       * @type {Number}
       * @description
       * undefined
       */
      this.id = data['id'];
      /**
       * @ngdoc property
       * @name ScenarioType.href
       * @type {String}
       * @description
       * undefined
       */
      this.href = data['href'];
      /**
       * @ngdoc property
       * @name ScenarioType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name ScenarioType.name
       * @type {String}
       * @description
       * undefined
       */
      this.name = data['name'];
      /**
       * @ngdoc property
       * @name ScenarioType.isPersisted
       * @type {Boolean}
       * @description
       * Used by the Cloud Analytics UI to define whether the Scenario should be persisted or if it's being used in experimentation mode by a user, which will result in the Scenario to be deleted automatically after a few days.
       */
      this.isPersisted = data['is_persisted'];
      /**
       * @ngdoc property
       * @name ScenarioType.snapshotTimestamp
       * @type {Date}
       * @description
       * The timestamp of when a snapshot of historic data was taken when creating the Scenario. When creating a new Scenario, you usually want to use the current time.
       */
      this.snapshotTimestamp = data['snapshot_timestamp'];
      /**
       * @ngdoc property
       * @name ScenarioType.filters
       * @type {Array}
       * @description
       * Filters to use for the Scenario.
       */
      // Currently the existence of this type is assumed
      this.filters = (data['filters'] || []).map(function(element) {
        return new FilterType(element);
      });
      /**
       * @ngdoc property
       * @name ScenarioType.historicMetricsResults
       * @type {Array}
       * @description
       * The `average_instance_count` and `total_cost` of the scenario for the last 12 months.
       */
      // Currently the existence of this type is assumed
      this.historicMetricsResults = (data['historic_metrics_results'] || []).map(function(element) {
        return new TimeSeriesMetricsResultType(element);
      });
      /**
       * @ngdoc property
       * @name ScenarioType.privateCloudInstanceCount
       * @type {Number}
       * @description
       * Used by the Cloud Analytics UI to define the total number of instances allocated to private clouds, do not use.
       */
      this.privateCloudInstanceCount = data['private_cloud_instance_count'];
      /**
       * @ngdoc property
       * @name ScenarioType.instanceCombinations
       * @type {Array}
       * @description
       * InstanceCombinations in the Scenario.
       */
      // Currently the existence of this type is assumed
      this.instanceCombinations = (data['instance_combinations'] || []).map(function(element) {
        return new InstanceCombinationType(element);
      });
      /**
       * @ngdoc property
       * @name ScenarioType.createdAt
       * @type {Date}
       * @description
       * Timestamp of when the Scenario was created.
       */
      this.createdAt = data['created_at'];
      /**
       * @ngdoc property
       * @name ScenarioType.updatedAt
       * @type {Date}
       * @description
       * Timestamp of when the Scenario was last updated.
       */
      this.updatedAt = data['updated_at'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('ScheduledReportType', function() {
  this.$get = function(FilterType) {
    function ScheduledReportType(data) {
      /**
       * @ngdoc property
       * @name ScheduledReportType.id
       * @type {Number}
       * @description
       * undefined
       */
      this.id = data['id'];
      /**
       * @ngdoc property
       * @name ScheduledReportType.href
       * @type {String}
       * @description
       * undefined
       */
      this.href = data['href'];
      /**
       * @ngdoc property
       * @name ScheduledReportType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name ScheduledReportType.name
       * @type {String}
       * @description
       * undefined
       */
      this.name = data['name'];
      /**
 * @ngdoc property
 * @name ScheduledReportType.frequency
 * @type {String}
 * @description
 * The frequency at which reports are emailed.
          Daily reports are sent every day but the cost reports can be a few days behind.
          Weekly reports are sent every Wednesday for the prior week (Sun - Mon).
          Monthly reports are sent on the 3rd of each month for the prior month.
 */
      this.frequency = data['frequency'];
      /**
       * @ngdoc property
       * @name ScheduledReportType.additionalEmails
       * @type {Array}
       * @description
       * In addition to your email, the report will be sent to these additional email addresses.
       */
      this.additionalEmails = data['additional_emails'];
      /**
       * @ngdoc property
       * @name ScheduledReportType.attachCsv
       * @type {Boolean}
       * @description
       * Whether the emails should include a CSV attachement of the instance data.
       */
      this.attachCsv = data['attach_csv'];
      /**
       * @ngdoc property
       * @name ScheduledReportType.filters
       * @type {Array}
       * @description
       * Filters to use for the ScheduledReport.
       */
      // Currently the existence of this type is assumed
      this.filters = (data['filters'] || []).map(function(element) {
        return new FilterType(element);
      });
      /**
       * @ngdoc property
       * @name ScheduledReportType.createdAt
       * @type {Date}
       * @description
       * Timestamp of when the Scheduled Report was created
       */
      this.createdAt = data['created_at'];
      /**
       * @ngdoc property
       * @name ScheduledReportType.updatedAt
       * @type {Date}
       * @description
       * Timestamp of when the Scheduled Report was last updated
       */
      this.updatedAt = data['updated_at'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('TagType', function() {
  this.$get = function() {
    function TagType(data) {
      /**
       * @ngdoc property
       * @name TagType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name TagType.resourceType
       * @type {String}
       * @description
       * Whether the tag was applied to an instance, deployment or account.
       */
      this.resourceType = data['resource_type'];
      /**
       * @ngdoc property
       * @name TagType.key
       * @type {String}
       * @description
       * The namespace and predicate for the tag.
       */
      this.key = data['key'];
      /**
       * @ngdoc property
       * @name TagType.value
       * @type {String}
       * @description
       * The value of the tag.
       */
      this.value = data['value'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('TimeSeriesMetricsResultType', function() {
  this.$get = function(MetricsResultType) {
    function TimeSeriesMetricsResultType(data) {
      /**
       * @ngdoc property
       * @name TimeSeriesMetricsResultType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name TimeSeriesMetricsResultType.timestamp
       * @type {Date}
       * @description
       * undefined
       */
      this.timestamp = data['timestamp'];
      /**
       * @ngdoc property
       * @name TimeSeriesMetricsResultType.results
       * @type {Array}
       * @description
       * undefined
       */
      // Currently the existence of this type is assumed
      this.results = (data['results'] || []).map(function(element) {
        return new MetricsResultType(element);
      });
    }
  };
});

angular.module('AnalyticsAngularClient').provider('UserType', function() {
  this.$get = function(UserAccountsType) {
    function UserType(data) {
      /**
       * @ngdoc property
       * @name UserType.id
       * @type {Number}
       * @description
       * undefined
       */
      this.id = data['id'];
      /**
       * @ngdoc property
       * @name UserType.href
       * @type {String}
       * @description
       * undefined
       */
      this.href = data['href'];
      /**
       * @ngdoc property
       * @name UserType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name UserType.email
       * @type {String}
       * @description
       * Email of the user.
       */
      this.email = data['email'];
      /**
       * @ngdoc property
       * @name UserType.accounts
       * @type {Array}
       * @description
       * List of accounts that the user has access to.
       */
      // Currently the existence of this type is assumed
      this.accounts = (data['accounts'] || []).map(function(element) {
        return new UserAccountsType(element);
      });
      /**
       * @ngdoc property
       * @name UserType.hasAnyExpiredAccounts
       * @type {Boolean}
       * @description
       * Does the user have any expired accounts?
       */
      this.hasAnyExpiredAccounts = data['has_any_expired_accounts'];
      /**
       * @ngdoc property
       * @name UserType.hasAnyIpWhitelistedAccountsWithAdmin
       * @type {Boolean}
       * @description
       * Does the user have the admin permission on any accounts that have IP Whitelists?
       */
      this.hasAnyIpWhitelistedAccountsWithAdmin = data['has_any_ip_whitelisted_accounts_with_admin'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('UserAccountsType', function() {
  this.$get = function(SetType) {
    function UserAccountsType(data) {
      /**
       * @ngdoc property
       * @name UserAccountsType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name UserAccountsType.accountId
       * @type {Number}
       * @description
       * RightScale account ID.
       */
      this.accountId = data['account_id'];
      /**
       * @ngdoc property
       * @name UserAccountsType.accountName
       * @type {String}
       * @description
       * RightScale account name.
       */
      this.accountName = data['account_name'];
      /**
       * @ngdoc property
       * @name UserAccountsType.billingAdminOnly
       * @type {Boolean}
       * @description
       * Does the account have the billing_admin_only account setting enabled?
       */
      this.billingAdminOnly = data['billing_admin_only'];
      /**
 * @ngdoc property
 * @name UserAccountsType.cloudAnalyticsAccountSettingEnabled
 * @type {Boolean}
 * @description
 * Is the `cloud_analytics` account setting enabled? Just because this setting is enabled,
            it does not mean that the account is `cloud_analytics_enabled`.
 */
      this.cloudAnalyticsAccountSettingEnabled = data['cloud_analytics_account_setting_enabled'];
      /**
 * @ngdoc property
 * @name UserAccountsType.cloudAnalyticsEnabled
 * @type {Boolean}
 * @description
 * Does the user have the required settings and permissions for this account to be enabled
            for them in Cloud Analytics?
 */
      this.cloudAnalyticsEnabled = data['cloud_analytics_enabled'];
      /**
 * @ngdoc property
 * @name UserAccountsType.permissions
 * @type {SetType}
 * @description
 * List of permissions that the user has on this account, see
            `https://support.rightscale.com/12-Guides/15-References/Lists/The_User_Roles` for details
 */
      // Currently the existence of this type is assumed
      this.permissions = new SetType(data['permissions']);
    }
  };
});

angular.module('AnalyticsAngularClient').provider('UserEnvironmentType', function() {
  this.$get = function(UserSettingType) {
    function UserEnvironmentType(data) {
      /**
       * @ngdoc property
       * @name UserEnvironmentType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name UserEnvironmentType.environment
       * @type {String}
       * @description
       * undefined
       */
      this.environment = data['environment'];
      /**
       * @ngdoc property
       * @name UserEnvironmentType.useLocalAssets
       * @type {Boolean}
       * @description
       * undefined
       */
      this.useLocalAssets = data['use_local_assets'];
      /**
       * @ngdoc property
       * @name UserEnvironmentType.cloudManagementUrl
       * @type {String}
       * @description
       * undefined
       */
      this.cloudManagementUrl = data['cloud_management_url'];
      /**
       * @ngdoc property
       * @name UserEnvironmentType.analyticsUiSha
       * @type {String}
       * @description
       * undefined
       */
      this.analyticsUiSha = data['analytics_ui_sha'];
      /**
       * @ngdoc property
       * @name UserEnvironmentType.googleAnalytics
       * @type {Object}
       * @description
       * undefined
       */
      this.googleAnalytics = data['google_analytics'];
      /**
       * @ngdoc property
       * @name UserEnvironmentType.currentUser
       * @type {Object}
       * @description
       * undefined
       */
      this.currentUser = data['current_user'];
      /**
       * @ngdoc property
       * @name UserEnvironmentType.userSettings
       * @type {UserSettingType}
       * @description
       * undefined
       */
      // Currently the existence of this type is assumed
      this.userSettings = new UserSettingType(data['user_settings']);
    }
  };
});

angular.module('AnalyticsAngularClient').provider('UserOnboardingStatusType', function() {
  this.$get = function() {
    function UserOnboardingStatusType(data) {
      /**
       * @ngdoc property
       * @name UserOnboardingStatusType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name UserOnboardingStatusType.status
       * @type {String}
       * @description
       * Onboarding status of the user.
       */
      this.status = data['status'];
      /**
       * @ngdoc property
       * @name UserOnboardingStatusType.urlToAddFirstCloud
       * @type {String}
       * @description
       * URL that should be used to add the user's first cloud.
       */
      this.urlToAddFirstCloud = data['url_to_add_first_cloud'];
      /**
       * @ngdoc property
       * @name UserOnboardingStatusType.accountIdToAddFirstCloud
       * @type {Number}
       * @description
       * RightScale account ID that should be used to add the user's first cloud.
       */
      this.accountIdToAddFirstCloud = data['account_id_to_add_first_cloud'];
      /**
       * @ngdoc property
       * @name UserOnboardingStatusType.accountNames
       * @type {Array}
       * @description
       * List of RightScale account names that the user has access to.
       */
      this.accountNames = data['account_names'];
    }
  };
});

angular.module('AnalyticsAngularClient').provider('UserSettingType', function() {
  this.$get = function(SetType, ModuleStateType, FilterType) {
    function UserSettingType(data) {
      /**
       * @ngdoc property
       * @name UserSettingType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name UserSettingType.mainMenuVisible
       * @type {Boolean}
       * @description
       * Whether or not the left hand menu is visible or collapsed
       */
      this.mainMenuVisible = data['main_menu_visible'];
      /**
 * @ngdoc property
 * @name UserSettingType.sorting
 * @type {Hash}
 * @description
 * Stores how sortable items (mainly tables) are sorted.
The key of the hash is the identifier of the table.

 */
      this.sorting = data['sorting'];
      /**
 * @ngdoc property
 * @name UserSettingType.dismissedDialogs
 * @type {SetType}
 * @description
 * Dialogs, popups, alerts and messages that the user has dismissed.

 */
      // Currently the existence of this type is assumed
      this.dismissedDialogs = new SetType(data['dismissed_dialogs']);
      /**
 * @ngdoc property
 * @name UserSettingType.tableColumnVisibility
 * @type {Hash}
 * @description
 * Table columns that are hidden. Currently this is only supported in the instance datatable.

The key is the ID of the table (i.e. `instance_datatable`), the Set is the visible columns.

 */
      this.tableColumnVisibility = data['table_column_visibility'];
      /**
       * @ngdoc property
       * @name UserSettingType.dateRange
       * @type {Object}
       * @description
       * Date range used for displaying the Analyze Page
       */
      this.dateRange = data['date_range'];
      /**
       * @ngdoc property
       * @name UserSettingType.granularity
       * @type {String}
       * @description
       * The granularity of the top chart on the Analyze page
       */
      this.granularity = data['granularity'];
      /**
       * @ngdoc property
       * @name UserSettingType.moduleStates
       * @type {Array}
       * @description
       * These are the modules displayed on the Analyze Page.
       */
      // Currently the existence of this type is assumed
      this.moduleStates = (data['module_states'] || []).map(function(element) {
        return new ModuleStateType(element);
      });
      /**
       * @ngdoc property
       * @name UserSettingType.filters
       * @type {Array}
       * @description
       * Filters the user has currently *applied* on the Analyze Page
       */
      // Currently the existence of this type is assumed
      this.filters = (data['filters'] || []).map(function(element) {
        return new FilterType(element);
      });
      /**
       * @ngdoc property
       * @name UserSettingType.metrics
       * @type {SetType}
       * @description
       * undefined
       */
      // Currently the existence of this type is assumed
      this.metrics = new SetType(data['metrics']);
      /**
       * @ngdoc property
       * @name UserSettingType.excludedTagTypes
       * @type {SetType}
       * @description
       * Tag types that are not displayed in the Tags module on the analyze page
       */
      // Currently the existence of this type is assumed
      this.excludedTagTypes = new SetType(data['excluded_tag_types']);
      /**
       * @ngdoc property
       * @name UserSettingType.selectedCloudVendorNames
       * @type {SetType}
       * @description
       * These are the cloud vendor filters that are applied on the instance combination edit page in Scenario Builder.
       */
      // Currently the existence of this type is assumed
      this.selectedCloudVendorNames = new SetType(data['selected_cloud_vendor_names']);
      /**
       * @ngdoc property
       * @name UserSettingType.onboardingStatus
       * @type {String}
       * @description
       * undefined
       */
      this.onboardingStatus = data['onboarding_status'];
    }
  };
});

//# sourceMappingURL=client.js.map