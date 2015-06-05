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
