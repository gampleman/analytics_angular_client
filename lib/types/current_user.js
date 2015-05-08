angular.module('AnalyticsAngularClient').provider('CurrentUserType', function() {
  this.$get = function() {
    function CurrentUserType(data) {
      /**
       * @ngdoc property
       * @name CurrentUserType.id
       * @type {Number}
       * @description
       * undefined
       */
      this.id = data['id'];
      /**
       * @ngdoc property
       * @name CurrentUserType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name CurrentUserType.firstName
       * @type {String}
       * @description
       * First name of the user.
       */
      this.firstName = data['first_name'];
      /**
       * @ngdoc property
       * @name CurrentUserType.lastName
       * @type {String}
       * @description
       * Last name of the user.
       */
      this.lastName = data['last_name'];
      /**
       * @ngdoc property
       * @name CurrentUserType.email
       * @type {String}
       * @description
       * Email address of the user.
       */
      this.email = data['email'];
      /**
       * @ngdoc property
       * @name CurrentUserType.timezone
       * @type {String}
       * @description
       * The time zone of the user, can be any valid tz timezone (`http://en.wikipedia.org/wiki/List_of_tz_database_time_zones`).
       */
      this.timezone = data['timezone'];
      /**
       * @ngdoc property
       * @name CurrentUserType.company
       * @type {String}
       * @description
       * The company of the user.
       */
      this.company = data['company'];
      /**
       * @ngdoc property
       * @name CurrentUserType.phone
       * @type {String}
       * @description
       * The phone number of the user.
       */
      this.phone = data['phone'];
      /**
       * @ngdoc property
       * @name CurrentUserType.createdAt
       * @type {Date}
       * @description
       * Timestamp of when the user was created.
       */
      this.createdAt = data['created_at'];
      /**
       * @ngdoc property
       * @name CurrentUserType.updatedAt
       * @type {Date}
       * @description
       * Timestamp of when the user was last updated.
       */
      this.updatedAt = data['updated_at'];
    }
  };
});
