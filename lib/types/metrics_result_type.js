angular.module('AnalyticsAngularClient').provider('MetricsResultType', function() {
  this.$get = function(MetricsType) {
    function MetricsResultType(data) {
      /**
       * @ngdoc property
       * @name MetricsResultType.group
       * @type {Hash}
       * @description
       * undefined
       */
      this.group = data['group'];
      /**
       * @ngdoc property
       * @name MetricsResultType.metrics
       * @type {MetricsType}
       * @description
       * undefined
       */
      // Currently the existence of this type is assumed
      this.metrics = new MetricsType(data['metrics']);
      /**
       * @ngdoc property
       * @name MetricsResultType.breakdownMetricsResults
       * @type {Array}
       * @description
       * The nested metric results requested by the `group` parameter.
       */
      // Currently the existence of this type is assumed
      this.breakdownMetricsResults = _.map((data['breakdown_metrics_results'] || []), function(element) {
        return new MetricsResultType(element);
      });
    }
    return MetricsResultType;
  };
});
