const util = require('./util');
const pkg = require('../package');

if (!pkg['atlassian-connect-addon-home']) {
  console.error('Please specify your addon home (hosting) URL as a value of the "atlassian-connect-addon-home" property in your package.json (e.g. <YOUR_ADDON>.firebaseapp.com).');
  process.exit(1);
}

util.setHostVariable('prod');
util.updateConnectConfig(pkg['atlassian-connect-addon-home']);
