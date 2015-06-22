angular.module('AnalyticsAngularClient').provider('TagType', function() {
  this.$get = function() {
    function TagType(data) {
      /**
       * @ngdoc property
       * @name TagType.resourceType
       * @type {String}
       * @description
       * Whether the tag was applied to an instance, deployment or account.
       */
      this.resourceType = data['resource_type'];
      /**
       * @ngdoc property
       * @name TagType.key
       * @type {String}
       * @description
       * The namespace and predicate for the tag.
       */
      this.key = data['key'];
      /**
       * @ngdoc property
       * @name TagType.value
       * @type {String}
       * @description
       * The value of the tag.
       */
      this.value = data['value'];
    }
    return TagType;
  };
});
