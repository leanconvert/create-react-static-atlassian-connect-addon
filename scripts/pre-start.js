const fs = require('fs');
const path = require('path');
const util = require('./util');
const ngrok = require('ngrok');
const ncp = require("copy-paste");

util.setHostVariable('dev');

ngrok.connect(3000, (err, url) => {
  util.updateConnectConfig(url);
  ncp.copy(`${url}/atlassian-connect.json`);
});
