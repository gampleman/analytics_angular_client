angular.module('AnalyticsAngularClient').provider('UserType', function() {
  this.$get = function(UserAccountsType) {
    function UserType(data) {
      /**
       * @ngdoc property
       * @name UserType.id
       * @type {Number}
       * @description
       * undefined
       */
      this.id = data['id'];
      /**
       * @ngdoc property
       * @name UserType.href
       * @type {String}
       * @description
       * undefined
       */
      this.href = data['href'];
      /**
       * @ngdoc property
       * @name UserType.email
       * @type {String}
       * @description
       * Email of the user.
       */
      this.email = data['email'];
      /**
       * @ngdoc property
       * @name UserType.accounts
       * @type {Array}
       * @description
       * List of accounts that the user has access to.
       */
      // Currently the existence of this type is assumed
      this.accounts = (data['accounts'] || []).map(function(element) {
        return new UserAccountsType(element);
      });
      /**
       * @ngdoc property
       * @name UserType.hasAnyExpiredAccounts
       * @type {Boolean}
       * @description
       * Does the user have any expired accounts?
       */
      this.hasAnyExpiredAccounts = data['has_any_expired_accounts'];
      /**
       * @ngdoc property
       * @name UserType.hasAnyIpWhitelistedAccountsWithAdmin
       * @type {Boolean}
       * @description
       * Does the user have the admin permission on any accounts that have IP Whitelists?
       */
      this.hasAnyIpWhitelistedAccountsWithAdmin = data['has_any_ip_whitelisted_accounts_with_admin'];
    }
  };
});
