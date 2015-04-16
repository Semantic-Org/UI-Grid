
Package.describe({
  name    : 'semantic:ui-grid',
  summary : 'Semantic UI - Grid: Single component release',
  version : '1.12.0',
  git     : 'git://github.com/Semantic-Org/UI-Grid.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'grid.css'
  ], 'client');
});
