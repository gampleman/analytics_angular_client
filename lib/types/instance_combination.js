angular.module('AnalyticsAngularClient').provider('InstanceCombinationType', function() {
  this.$get = function(ScenarioType, PatternType, ReservedInstancePurchaseType) {
    function InstanceCombinationType(data) {
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
