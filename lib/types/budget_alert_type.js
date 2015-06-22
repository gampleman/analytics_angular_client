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
      this.filters = _.map((data['filters'] || []), function(element) {
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
    return BudgetAlertType;
  };
});
