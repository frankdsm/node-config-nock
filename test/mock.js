'use strict';

const assert = require('assert');
const request = require('request');
const mocker = require('../index');

describe('Config nock', () => {
  it('should mock a request', (done) => {
    mocker.setConfig({
      'payment.monitoring': {
        baseUrl: 'https://example.com/api',
        path: '/status/monitoring',
        method: 'GET',
        status: 200,
        options: {},
        response: 'test'
      }
    });

    mocker.mock('payment.monitoring');
    request.get('https://example.com/api/status/monitoring', (err, response, body) => {
      assert.equal(response.statusCode, 200);
      assert.equal(body, 'test');
      done();
    });

  });
});