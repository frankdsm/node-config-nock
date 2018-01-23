'use strict';

const nock = require('nock');
const pathParams = require('path-params');
let requestConfig = {};

function setConfig(config) {
  requestConfig = config;
}

function mock(configKey, options, body) {
  if (requestConfig.hasOwnProperty(configKey)) {
    const config = requestConfig[configKey];
    const configOptions = config.options || {};
    options = options || {};
    const params = options.params || {};
    const path = pathParams(config.path, params);
    const scope = nock(config.baseUrl)
      // .log(console.log)
      .intercept(path, config.method.toUpperCase(), body);

    if (options.query || configOptions.query) {
      scope.query(Object.assign(configOptions.query || {}, options.query));
    }
    if (options && options.persist) {
      scope.scope._persist = true;
    }

    if (config.error) {
      return scope.replyWithError(config.error);
    }
    return scope.reply(config.status, config.response);
  }
  return console.error('Could not find matching mock config');
}

module.exports = {
  setConfig,
  mock
};
