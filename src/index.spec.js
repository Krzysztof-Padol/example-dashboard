require('angular');
require('babel-polyfill');
const context = require.context('./app', true, /\.(js|ts|tsx)$/);
context.keys().forEach(context);
