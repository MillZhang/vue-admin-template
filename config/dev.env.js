var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var testEnv = require('./test.env')
module.exports = merge(prodEnv, testEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"haidu"'
})
