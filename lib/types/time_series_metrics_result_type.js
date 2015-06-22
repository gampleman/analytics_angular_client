angular.module('AnalyticsAngularClient').provider('TimeSeriesMetricsResultType', function() {
  this.$get = function(MetricsResultType) {
    function TimeSeriesMetricsResultType(data) {
      /**
       * @ngdoc property
       * @name TimeSeriesMetricsResultType.timestamp
       * @type {Date}
       * @description
       * undefined
       */
      this.timestamp = data['timestamp'];
      /**
       * @ngdoc property
       * @name TimeSeriesMetricsResultType.results
       * @type {Array}
       * @description
       * undefined
       */
      // Currently the existence of this type is assumed
      this.results = _.map((data['results'] || []), function(element) {
        return new MetricsResultType(element);
      });
    }
    return TimeSeriesMetricsResultType;
  };
});
