angular.module('AnalyticsAngularClient').provider('UserAccountsType', function() {
  this.$get = function(SetType) {
    function UserAccountsType(data) {
      /**
       * @ngdoc property
       * @name UserAccountsType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name UserAccountsType.accountId
       * @type {Number}
       * @description
       * RightScale account ID.
       */
      this.accountId = data['account_id'];
      /**
       * @ngdoc property
       * @name UserAccountsType.accountName
       * @type {String}
       * @description
       * RightScale account name.
       */
      this.accountName = data['account_name'];
      /**
       * @ngdoc property
       * @name UserAccountsType.billingAdminOnly
       * @type {Boolean}
       * @description
       * Does the account have the billing_admin_only account setting enabled?
       */
      this.billingAdminOnly = data['billing_admin_only'];
      /**
 * @ngdoc property
 * @name UserAccountsType.cloudAnalyticsAccountSettingEnabled
 * @type {Boolean}
 * @description
 * Is the `cloud_analytics` account setting enabled? Just because this setting is enabled,
            it does not mean that the account is `cloud_analytics_enabled`.
 */
      this.cloudAnalyticsAccountSettingEnabled = data['cloud_analytics_account_setting_enabled'];
      /**
 * @ngdoc property
 * @name UserAccountsType.cloudAnalyticsEnabled
 * @type {Boolean}
 * @description
 * Does the user have the required settings and permissions for this account to be enabled
            for them in Cloud Analytics?
 */
      this.cloudAnalyticsEnabled = data['cloud_analytics_enabled'];
      /**
 * @ngdoc property
 * @name UserAccountsType.permissions
 * @type {SetType}
 * @description
 * List of permissions that the user has on this account, see
            `https://support.rightscale.com/12-Guides/15-References/Lists/The_User_Roles` for details
 */
      // Currently the existence of this type is assumed
      this.permissions = new SetType(data['permissions']);
    }
  };
});
