'use strict';

const os = require('os');

const pkg = {version:'1.7.9',name:'@alicloud/pop-core'}

exports.DEFAULT_UA = `AlibabaCloud (${os.platform()}; ${os.arch()}) ` +
  `Node.js/${process.version} Core/${pkg.version}`;
exports.DEFAULT_CLIENT = `Node.js(${process.version}), ${pkg.name}: ${pkg.version}`;
