angular.module('AnalyticsAngularClient').provider('AccountType', function() {
  this.$get = function(CloudAccountType) {
    function AccountType(data) {
      /**
       * @ngdoc property
       * @name AccountType.id
       * @type {Number}
       * @description
       * undefined
       */
      this.id = data['id'];
      /**
       * @ngdoc property
       * @name AccountType.href
       * @type {String}
       * @description
       * undefined
       */
      this.href = data['href'];
      /**
       * @ngdoc property
       * @name AccountType.name
       * @type {String}
       * @description
       * undefined
       */
      this.name = data['name'];
      /**
 * @ngdoc property
 * @name AccountType.isCloudAnalyticsBlockedByBillingAdminOnly
 * @type {Boolean}
 * @description
 * Is Cloud Analytics blocked on this account due to the `billing_admin_only` setting
            being enabled and the user not having the `billing` or `admin` permissions?
 */
      this.isCloudAnalyticsBlockedByBillingAdminOnly = data['is_cloud_analytics_blocked_by_billing_admin_only'];
      /**
 * @ngdoc property
 * @name AccountType.cloudAnalyticsEnabled
 * @type {Boolean}
 * @description
 * Does the user have the required settings and permissions for this account to be enabled
            for them in Cloud Analytics?
 */
      this.cloudAnalyticsEnabled = data['cloud_analytics_enabled'];
      /**
       * @ngdoc property
       * @name AccountType.enterpriseId
       * @type {Number}
       * @description
       * The RightScale enterprise ID for the account, only applicable for enterprise accounts.
       */
      this.enterpriseId = data['enterprise_id'];
      /**
       * @ngdoc property
       * @name AccountType.enterpriseName
       * @type {String}
       * @description
       * The RightScale enterprise name for the account, only applicable for enterprise accounts.
       */
      this.enterpriseName = data['enterprise_name'];
      /**
       * @ngdoc property
       * @name AccountType.isEnterpriseParent
       * @type {Boolean}
       * @description
       * Is the account an enterprise parent account? i.e. does it have the `enterprise_master` account setting?
       */
      this.isEnterpriseParent = data['is_enterprise_parent'];
      /**
       * @ngdoc property
       * @name AccountType.parentAccountId
       * @type {Number}
       * @description
       * The ID of the RightScale enterprise parent account. Only applicable for enterprise accounts.
       */
      this.parentAccountId = data['parent_account_id'];
      /**
       * @ngdoc property
       * @name AccountType.parentAccountName
       * @type {String}
       * @description
       * The name of the RightScale enterprise parent account. Only applicable for enterprise accounts.
       */
      this.parentAccountName = data['parent_account_name'];
      /**
       * @ngdoc property
       * @name AccountType.planCode
       * @type {String}
       * @description
       * The internal plan code for the account.
       */
      this.planCode = data['plan_code'];
      /**
       * @ngdoc property
       * @name AccountType.shardId
       * @type {Number}
       * @description
       * The shard ID for the account.
       */
      this.shardId = data['shard_id'];
      /**
       * @ngdoc property
       * @name AccountType.ownerId
       * @type {Number}
       * @description
       * The user ID of the account owner.
       */
      this.ownerId = data['owner_id'];
      /**
       * @ngdoc property
       * @name AccountType.expiresIn
       * @type {Number}
       * @description
       * The number of days until the account expires. Only applicable for certain accounts (e.g. Free edition).
       */
      this.expiresIn = data['expires_in'];
      /**
       * @ngdoc property
       * @name AccountType.userHasAdmin
       * @type {Boolean}
       * @description
       * Does the currently logged-in user have the admin permission in the account?
       */
      this.userHasAdmin = data['user_has_admin'];
      /**
       * @ngdoc property
       * @name AccountType.userHasActor
       * @type {Boolean}
       * @description
       * Does the currently logged-in user have the actor permission in the account?
       */
      this.userHasActor = data['user_has_actor'];
      /**
       * @ngdoc property
       * @name AccountType.userHasEnterpriseManager
       * @type {Boolean}
       * @description
       * Does the currently logged-in user have the enterprise_manager permission in the account?
       */
      this.userHasEnterpriseManager = data['user_has_enterprise_manager'];
      /**
       * @ngdoc property
       * @name AccountType.usesIpWhitelisting
       * @type {Boolean}
       * @description
       * Does the account use IP whitelisting to restrict access?
       */
      this.usesIpWhitelisting = data['uses_ip_whitelisting'];
      /**
       * @ngdoc property
       * @name AccountType.cloudAccounts
       * @type {Array}
       * @description
       * The account's cloud accounts.
       */
      // Currently the existence of this type is assumed
      this.cloudAccounts = _.map((data['cloud_accounts'] || []), function(element) {
        return new CloudAccountType(element);
      });
    }
  };
});
