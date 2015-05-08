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
