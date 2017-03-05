# shipit-deploy

Simple and fast deploy:fetch replacement for [shipit-deploy](https://github.com/shipitjs/shipit-deploy)

## Install

```
npm install shipit-deploy-simple-fetch
```

## Usage

### Example `shipitfile.js`

```js
module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  // import task to use it later in the file
  const fetch = require('shipit-deploy-simple-fetch')(shipit);

  shipit.initConfig({
    default: {
      repositoryUrl: 'https://github.com/user/repo.git',
      branch: 'master'
    }
  });

  // replace default task with imported
  shipit.blTask('deploy:fetch', fetch);
};
```
