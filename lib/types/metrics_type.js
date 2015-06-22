angular.module('AnalyticsAngularClient').provider('MetricsType', function() {
  this.$get = function() {
    function MetricsType(data) {
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
    return MetricsType;
  };
});
