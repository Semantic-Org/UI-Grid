var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-grid',
  summary : 'Semantic UI - Grid (official): Single component release of grid',
  version : '1.9.2',
  git     : 'git://github.com/Semantic-Org/UI-Grid.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
