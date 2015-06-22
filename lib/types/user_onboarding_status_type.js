angular.module('AnalyticsAngularClient').provider('UserOnboardingStatusType', function() {
  this.$get = function() {
    function UserOnboardingStatusType(data) {
      /**
       * @ngdoc property
       * @name UserOnboardingStatusType.status
       * @type {String}
       * @description
       * Onboarding status of the user.
       */
      this.status = data['status'];
      /**
       * @ngdoc property
       * @name UserOnboardingStatusType.urlToAddFirstCloud
       * @type {String}
       * @description
       * URL that should be used to add the user's first cloud.
       */
      this.urlToAddFirstCloud = data['url_to_add_first_cloud'];
      /**
       * @ngdoc property
       * @name UserOnboardingStatusType.accountIdToAddFirstCloud
       * @type {Number}
       * @description
       * RightScale account ID that should be used to add the user's first cloud.
       */
      this.accountIdToAddFirstCloud = data['account_id_to_add_first_cloud'];
      /**
       * @ngdoc property
       * @name UserOnboardingStatusType.accountNames
       * @type {Array}
       * @description
       * List of RightScale account names that the user has access to.
       */
      this.accountNames = data['account_names'];
    }
    return UserOnboardingStatusType;
  };
});
