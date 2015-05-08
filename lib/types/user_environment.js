angular.module('AnalyticsAngularClient').provider('UserEnvironmentType', function() {
  this.$get = function(UserSettingType) {
    function UserEnvironmentType(data) {
      /**
       * @ngdoc property
       * @name UserEnvironmentType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name UserEnvironmentType.environment
       * @type {String}
       * @description
       * undefined
       */
      this.environment = data['environment'];
      /**
       * @ngdoc property
       * @name UserEnvironmentType.useLocalAssets
       * @type {Boolean}
       * @description
       * undefined
       */
      this.useLocalAssets = data['use_local_assets'];
      /**
       * @ngdoc property
       * @name UserEnvironmentType.cloudManagementUrl
       * @type {String}
       * @description
       * undefined
       */
      this.cloudManagementUrl = data['cloud_management_url'];
      /**
       * @ngdoc property
       * @name UserEnvironmentType.analyticsUiSha
       * @type {String}
       * @description
       * undefined
       */
      this.analyticsUiSha = data['analytics_ui_sha'];
      /**
       * @ngdoc property
       * @name UserEnvironmentType.googleAnalytics
       * @type {Object}
       * @description
       * undefined
       */
      this.googleAnalytics = data['google_analytics'];
      /**
       * @ngdoc property
       * @name UserEnvironmentType.currentUser
       * @type {Object}
       * @description
       * undefined
       */
      this.currentUser = data['current_user'];
      /**
       * @ngdoc property
       * @name UserEnvironmentType.userSettings
       * @type {UserSettingType}
       * @description
       * undefined
       */
      // Currently the existence of this type is assumed
      this.userSettings = new UserSettingType(data['user_settings']);
    }
  };
});
