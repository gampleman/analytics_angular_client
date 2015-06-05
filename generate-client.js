module.exports = function(Package, builtin) {
  return new Package('MyGen', [builtin('angular'), builtin('npm'), builtin('bower'), builtin('lodash'), builtin('git'), builtin('grunt')])
    .config(function(globalConfig, override) {
      globalConfig.praxisDocsPath = '../analytics_api_service/docs/api/1.0';
      globalConfig.outputPath = '.';
      globalConfig.moduleName = 'AnalyticsAngularClient';
      globalConfig.project = false;
      globalConfig.base_path = '';
      globalConfig.debugOverrides = false;
      override('*.type.kind.attribute', ' ');
    });
};
