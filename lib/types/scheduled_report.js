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
