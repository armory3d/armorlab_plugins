let project = new Project('plugins');

project.addExclude('.git/**');
project.addExclude('build/**');
project.addFile('Sources/**');

project.addDefine('WITH_PLUGIN_EMBED');

resolve(project);
