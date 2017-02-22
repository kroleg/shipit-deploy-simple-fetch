'use strict';

const mkdirp = require('mkdirp'),
    chalk = require('chalk'),
    Bluebird = require('bluebird');

module.exports = function (shipit) {

    return createWorkspace()
        .then(cloneRepository)
        .then(() => shipit.emit('fetched'));

    function createWorkspace() {
        return shipit.local('rm -rf ' + shipit.config.workspace)
            .then(() => shipit.log('Create workspace "%s"', shipit.config.workspace))
            .then(() => Bluebird.promisify(mkdirp)(shipit.config.workspace))
            .then(() => shipit.log(chalk.green('Workspace created.')));
    }

    function cloneRepository() {
        return shipit.local(`git clone -b ${shipit.config.branch} --depth=1 ${shipit.config.repositoryUrl} .`, { cwd: shipit.config.workspaces })
            .then(() => shipit.log(chalk.green('Repository fetched.')));
    }
};