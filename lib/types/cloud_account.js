angular.module('AnalyticsAngularClient').provider('CloudAccountType', function() {
  this.$get = function() {
    function CloudAccountType(data) {
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
