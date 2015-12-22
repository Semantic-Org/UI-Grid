
Package.describe({
  name    : 'semantic:ui-grid',
  summary : 'Semantic UI - Grid: Single component release',
  version : '2.1.7',
  git     : 'git://github.com/Semantic-Org/UI-Grid.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'grid.css'
  ], 'client');
});
