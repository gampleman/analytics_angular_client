angular.module('AnalyticsAngularClient').provider('PatternType', function() {
  this.$get = function(ScenarioType) {
    function PatternType(data) {
      /**
       * @ngdoc property
       * @name PatternType.id
       * @type {Number}
       * @description
       * undefined
       */
      this.id = data['id'];
      /**
       * @ngdoc property
       * @name PatternType.href
       * @type {String}
       * @description
       * undefined
       */
      this.href = data['href'];
      /**
       * @ngdoc property
       * @name PatternType.name
       * @type {String}
       * @description
       * Name of the pattern.
       */
      this.name = data['name'];
      /**
       * @ngdoc property
       * @name PatternType.summary
       * @type {String}
       * @description
       * Summary of the pattern.
       */
      this.summary = data['summary'];
      /**
 * @ngdoc property
 * @name PatternType.type
 * @type {String}
 * @description
 * Pattern type reflects whether the change that the pattern applies continues after the pattern has ended.
          Changes made by permanent patterns persist past the chosen end date, e.g. general growth.
          Changes made by temporary patterns only apply during the selected dates, e.g. holiday increase.
 */
      this.type = data['type'];
      /**
 * @ngdoc property
 * @name PatternType.value
 * @type {Number}
 * @description
 * Amount of change that the pattern will apply. The increase and decrease operations are based on percentages,
            so for example, use the value 10 to increase/decrease by 10%.
 */
      this.value = data['value'];
      /**
       * @ngdoc property
       * @name PatternType.operation
       * @type {String}
       * @description
       * Type of change, the increase and decrease operations are based on percentages.
       */
      this.operation = data['operation'];
      /**
 * @ngdoc property
 * @name PatternType.years
 * @type {String}
 * @description
 * The years that the pattern will apply to. This can be "all" to apply the pattern in all years;
          a range such as "1-3" to apply the pattern from years 1 to years 3; or individual years in a comma-separated list such as "1,3".
 */
      this.years = data['years'];
      /**
 * @ngdoc property
 * @name PatternType.months
 * @type {String}
 * @description
 * The months that the pattern apply to. This can be "all" to apply the pattern in all months;
          a range such as "1-3" meaning the pattern will be applied from the start of January to the end of March; or
          individual months in a comma-separated list such as "5, 7, 9" meaning the pattern will be applied in May, July and September.
 */
      this.months = data['months'];
      /**
       * @ngdoc property
       * @name PatternType.createdAt
       * @type {Date}
       * @description
       * Timestamp of when the pattern was created.
       */
      this.createdAt = data['created_at'];
      /**
       * @ngdoc property
       * @name PatternType.updatedAt
       * @type {Date}
       * @description
       * Timestamp of when the pattern was last updated.
       */
      this.updatedAt = data['updated_at'];
      /**
       * @ngdoc property
       * @name PatternType.scenarios
       * @type {Array}
       * @description
       * Collection of Scenarios that use this pattern.
       */
      // Currently the existence of this type is assumed
      this.scenarios = _.map((data['scenarios'] || []), function(element) {
        return new ScenarioType(element);
      });
    }
    return PatternType;
  };
});
