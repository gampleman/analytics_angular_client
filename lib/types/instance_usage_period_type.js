angular.module('AnalyticsAngularClient').provider('InstanceUsagePeriodType', function() {
  this.$get = function() {
    function InstanceUsagePeriodType(data) {
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
    return InstanceUsagePeriodType;
  };
});
