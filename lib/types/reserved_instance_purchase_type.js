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
    return ReservedInstancePurchaseType;
  };
});
