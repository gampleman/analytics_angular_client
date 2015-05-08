angular.module('AnalyticsAngularClient').provider('FilterType', function() {
  this.$get = function() {
    function FilterType(data) {
      /**
       * @ngdoc property
       * @name FilterType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name FilterType.type
       * @type {String}
       * @description
       * The type that is being used to filter. If the account_id filter is left empty, all of the accounts you have access to will be used.
       */
      this.type = data['type'];
      /**
       * @ngdoc property
       * @name FilterType.value
       * @type {String}
       * @description
       * The value of the type that is being used to filter.
       */
      this.value = data['value'];
      /**
       * @ngdoc property
       * @name FilterType.label
       * @type {String}
       * @description
       * undefined
       */
      this.label = data['label'];
      /**
       * @ngdoc property
       * @name FilterType.tagResourceType
       * @type {String}
       * @description
       * undefined
       */
      this.tagResourceType = data['tag_resource_type'];
    }
  };
});
