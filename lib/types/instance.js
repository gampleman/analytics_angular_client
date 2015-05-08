angular.module('AnalyticsAngularClient').provider('InstanceType', function() {
  this.$get = function(TagType) {
    function InstanceType(data) {
      /**
       * @ngdoc property
       * @name InstanceType.kind
       * @type {String}
       * @description
       * undefined
       */
      this.kind = data['kind'];
      /**
       * @ngdoc property
       * @name InstanceType.instanceKey
       * @type {String}
       * @description
       * Unique identifier for the instance across accounts, clouds and cloud vendors.
       */
      this.instanceKey = data['instance_key'];
      /**
       * @ngdoc property
       * @name InstanceType.instanceUid
       * @type {String}
       * @description
       * Cloud vendor indentifier for instance.
       */
      this.instanceUid = data['instance_uid'];
      /**
       * @ngdoc property
       * @name InstanceType.instanceRsid
       * @type {String}
       * @description
       * RightScale identifier for instance.
       */
      this.instanceRsid = data['instance_rsid'];
      /**
       * @ngdoc property
       * @name InstanceType.accountId
       * @type {Number}
       * @description
       * The RightScale account ID.
       */
      this.accountId = data['account_id'];
      /**
       * @ngdoc property
       * @name InstanceType.accountName
       * @type {String}
       * @description
       * The RightScale account name.
       */
      this.accountName = data['account_name'];
      /**
       * @ngdoc property
       * @name InstanceType.instanceStartAt
       * @type {Date}
       * @description
       * The time that the instance went operational, in the user's current timezone.
       */
      this.instanceStartAt = data['instance_start_at'];
      /**
 * @ngdoc property
 * @name InstanceType.instanceEndAt
 * @type {Date}
 * @description
 * The time the instance was wither terminated or stopped, in the user's current timezone.
                        This can be null if the instance is still operational.
 */
      this.instanceEndAt = data['instance_end_at'];
      /**
       * @ngdoc property
       * @name InstanceType.cloudVendorName
       * @type {String}
       * @description
       * The name of the cloud vendor.
       */
      this.cloudVendorName = data['cloud_vendor_name'];
      /**
       * @ngdoc property
       * @name InstanceType.cloudId
       * @type {Number}
       * @description
       * The RightScale ID of the cloud.
       */
      this.cloudId = data['cloud_id'];
      /**
       * @ngdoc property
       * @name InstanceType.cloudName
       * @type {String}
       * @description
       * The name of the cloud.
       */
      this.cloudName = data['cloud_name'];
      /**
       * @ngdoc property
       * @name InstanceType.datacenterKey
       * @type {String}
       * @description
       * A unique identifier for the datacenter across cloud vendors.
       */
      this.datacenterKey = data['datacenter_key'];
      /**
       * @ngdoc property
       * @name InstanceType.datacenterName
       * @type {String}
       * @description
       * The name of the datacenter.
       */
      this.datacenterName = data['datacenter_name'];
      /**
       * @ngdoc property
       * @name InstanceType.deploymentId
       * @type {Number}
       * @description
       * The RightScale ID of the deployment.
       */
      this.deploymentId = data['deployment_id'];
      /**
       * @ngdoc property
       * @name InstanceType.deploymentName
       * @type {String}
       * @description
       * The name of the deployment. If null the instance does not belong to a deployment.
       */
      this.deploymentName = data['deployment_name'];
      /**
       * @ngdoc property
       * @name InstanceType.instanceTypeKey
       * @type {String}
       * @description
       * Unique identifier for the instance type across cloud vendors.
       */
      this.instanceTypeKey = data['instance_type_key'];
      /**
       * @ngdoc property
       * @name InstanceType.instanceTypeName
       * @type {String}
       * @description
       * The name of the instance type.
       */
      this.instanceTypeName = data['instance_type_name'];
      /**
       * @ngdoc property
       * @name InstanceType.instanceName
       * @type {String}
       * @description
       * The name given to the instance by the user.
       */
      this.instanceName = data['instance_name'];
      /**
       * @ngdoc property
       * @name InstanceType.serverTemplateId
       * @type {Number}
       * @description
       * The RightScale ID of the ServerTemplate.
       */
      this.serverTemplateId = data['server_template_id'];
      /**
       * @ngdoc property
       * @name InstanceType.serverTemplateName
       * @type {String}
       * @description
       * The name of the ServerTemplate. If null the instance does not have a ServerTemplate.
       */
      this.serverTemplateName = data['server_template_name'];
      /**
       * @ngdoc property
       * @name InstanceType.platform
       * @type {String}
       * @description
       * The platform of the instance.
       */
      this.platform = data['platform'];
      /**
       * @ngdoc property
       * @name InstanceType.provisionedByUserId
       * @type {Number}
       * @description
       * The ID of the RightScale user that provisioned the instance. User ID 0 means that the instance was automatically launched from by the RightScale platform.
       */
      this.provisionedByUserId = data['provisioned_by_user_id'];
      /**
       * @ngdoc property
       * @name InstanceType.provisionedByUserEmail
       * @type {String}
       * @description
       * The email address of the RightScale user that provisioned the instance. If null the instance was not provisioned by a RightScale user.
       */
      this.provisionedByUserEmail = data['provisioned_by_user_email'];
      /**
       * @ngdoc property
       * @name InstanceType.incarnatorId
       * @type {Number}
       * @description
       * The ID of the Server or ServerType that launched the instance.
       */
      this.incarnatorId = data['incarnator_id'];
      /**
       * @ngdoc property
       * @name InstanceType.incarnatorType
       * @type {String}
       * @description
       * Whether the instance was launched by a Server or ServerArray. If null the instance is not managed by RightScale.
       */
      this.incarnatorType = data['incarnator_type'];
      /**
       * @ngdoc property
       * @name InstanceType.state
       * @type {String}
       * @description
       * The current state of the instance.
       */
      this.state = data['state'];
      /**
       * @ngdoc property
       * @name InstanceType.tags
       * @type {Array}
       * @description
       * undefined
       */
      // Currently the existence of this type is assumed
      this.tags = (data['tags'] || []).map(function(element) {
        return new TagType(element);
      });
      /**
       * @ngdoc property
       * @name InstanceType.totalUsageHours
       * @type {Number}
       * @description
       * The total number of hours that the instance was operational for.
       */
      this.totalUsageHours = data['total_usage_hours'];
      /**
       * @ngdoc property
       * @name InstanceType.estimatedCostForPeriod
       * @type {Number}
       * @description
       * The total estimated cost (USD) of the instance during the period defined by the start and end time parameters.
       */
      this.estimatedCostForPeriod = data['estimated_cost_for_period'];
      /**
       * @ngdoc property
       * @name InstanceType.estimatedManagedRcuCountForPeriod
       * @type {Number}
       * @description
       * The total estimated managed RCU count of the instance during the period defined by the start and end time parameters.
       */
      this.estimatedManagedRcuCountForPeriod = data['estimated_managed_rcu_count_for_period'];
    }
  };
});
