angular.module('AnalyticsAngularClient').provider('AnalysisSnapshotType', function() {
  this.$get = function(FilterType, ModuleStateType, SetType) {
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
       * @type {Array}
       * @description
       * Metrics that should be included in the snapshot.
       */
      this.metrics = data['metrics'];
      /**
       * @ngdoc property
       * @name AnalysisSnapshotType.filters
       * @type {Array}
       * @description
       * Filters used to create the snapshot
       */
      // Currently the existence of this type is assumed
      this.filters = _.map((data['filters'] || []), function(element) {
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
      this.moduleStates = _.map((data['module_states'] || []), function(element) {
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
    return AnalysisSnapshotType;
  };
});
