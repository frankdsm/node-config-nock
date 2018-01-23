'use strict';

const assert = require('assert');
const mocker = require('../index');

describe('Config nock', () => {
  it('should set the config', (done) => {
    mocker.setConfig({
      'payment.monitoring': {
        baseUrl: 'https://example.com/api/',
        path: '/status/monitoring',
        method: 'GET',
        status: 200,
        options: {},
        response: ''
      },
    });

    assert(mocker);

    done();
  });
});