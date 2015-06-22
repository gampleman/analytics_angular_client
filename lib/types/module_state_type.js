angular.module('AnalyticsAngularClient').provider('ModuleStateType', function() {
  this.$get = function() {
    function ModuleStateType(data) {
      /**
       * @ngdoc property
       * @name ModuleStateType.type
       * @type {String}
       * @description
       * Module name.
       */
      this.type = data['type'];
      /**
       * @ngdoc property
       * @name ModuleStateType.active
       * @type {Boolean}
       * @description
       * Whether this module is displayed on the page or not.
       */
      this.active = data['active'];
      /**
       * @ngdoc property
       * @name ModuleStateType.expanded
       * @type {Boolean}
       * @description
       * Whether this module is expanded on the page or not, only applicable for active modules.
       */
      this.expanded = data['expanded'];
      /**
       * @ngdoc property
       * @name ModuleStateType.sortKey
       * @type {String}
       * @description
       * The metric used to sort the values in the module.
       */
      this.sortKey = data['sort_key'];
    }
    return ModuleStateType;
  };
});
