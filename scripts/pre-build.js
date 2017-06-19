const util = require('./util');
const pkg = require('../package');
const ncp = require("copy-paste");

if (!pkg['atlassian-connect-addon-home']) {
  console.error('Please specify your addon home (hosting) URL as a value of the "atlassian-connect-addon-home" property in your package.json (e.g. <YOUR_ADDON>.firebaseapp.com).');
  process.exit(1);
}

const hostingUrl = pkg['atlassian-connect-addon-home'];

util.setHostVariable('prod');
util.updateConnectConfig(hostingUrl);
ncp.copy(`${hostingUrl}/atlassian-connect.json`);
