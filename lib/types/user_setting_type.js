angular.module('AnalyticsAngularClient').provider('UserSettingType', function() {
  this.$get = function(SetType, ModuleStateType, FilterType) {
    function UserSettingType(data) {
      /**
       * @ngdoc property
       * @name UserSettingType.mainMenuVisible
       * @type {Boolean}
       * @description
       * Whether or not the left hand menu is visible or collapsed
       */
      this.mainMenuVisible = data['main_menu_visible'];
      /**
 * @ngdoc property
 * @name UserSettingType.sorting
 * @type {Hash}
 * @description
 * Stores how sortable items (mainly tables) are sorted.
The key of the hash is the identifier of the table.

 */
      this.sorting = data['sorting'];
      /**
 * @ngdoc property
 * @name UserSettingType.dismissedDialogs
 * @type {SetType}
 * @description
 * Dialogs, popups, alerts and messages that the user has dismissed.

 */
      // Currently the existence of this type is assumed
      this.dismissedDialogs = new SetType(data['dismissed_dialogs']);
      /**
 * @ngdoc property
 * @name UserSettingType.tableColumnVisibility
 * @type {Hash}
 * @description
 * Table columns that are hidden. Currently this is only supported in the instance datatable.

The key is the ID of the table (i.e. `instance_datatable`), the Set is the visible columns.

 */
      this.tableColumnVisibility = data['table_column_visibility'];
      /**
       * @ngdoc property
       * @name UserSettingType.dateRange
       * @type {Object}
       * @description
       * Date range used for displaying the Analyze Page
       */
      this.dateRange = data['date_range'];
      /**
       * @ngdoc property
       * @name UserSettingType.granularity
       * @type {String}
       * @description
       * The granularity of the top chart on the Analyze page
       */
      this.granularity = data['granularity'];
      /**
       * @ngdoc property
       * @name UserSettingType.moduleStates
       * @type {Array}
       * @description
       * These are the modules displayed on the Analyze Page.
       */
      // Currently the existence of this type is assumed
      this.moduleStates = _.map((data['module_states'] || []), function(element) {
        return new ModuleStateType(element);
      });
      /**
       * @ngdoc property
       * @name UserSettingType.filters
       * @type {Array}
       * @description
       * Filters the user has currently *applied* on the Analyze Page
       */
      // Currently the existence of this type is assumed
      this.filters = _.map((data['filters'] || []), function(element) {
        return new FilterType(element);
      });
      /**
       * @ngdoc property
       * @name UserSettingType.metrics
       * @type {Array}
       * @description
       * undefined
       */
      this.metrics = data['metrics'];
      /**
       * @ngdoc property
       * @name UserSettingType.excludedTagTypes
       * @type {SetType}
       * @description
       * Tag types that are not displayed in the Tags module on the analyze page
       */
      // Currently the existence of this type is assumed
      this.excludedTagTypes = new SetType(data['excluded_tag_types']);
      /**
       * @ngdoc property
       * @name UserSettingType.selectedCloudVendorNames
       * @type {SetType}
       * @description
       * These are the cloud vendor filters that are applied on the instance combination edit page in Scenario Builder.
       */
      // Currently the existence of this type is assumed
      this.selectedCloudVendorNames = new SetType(data['selected_cloud_vendor_names']);
      /**
       * @ngdoc property
       * @name UserSettingType.onboardingStatus
       * @type {String}
       * @description
       * undefined
       */
      this.onboardingStatus = data['onboarding_status'];
    }
    return UserSettingType;
  };
});
