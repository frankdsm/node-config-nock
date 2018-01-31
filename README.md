# config-nock
Config based mocking using node-nock

## Installation

```
npm install config-nock
```

## Usage
```
const request = require('request');
const mocker = require('config-nock');
const config = {
  'payment.monitoring': {
    baseUrl: 'https://example.com/api/',
    path: '/status/monitoring',
    method: 'GET',
    status: 200,
    options: {},
    response: ''
  }
};
mocker.setConfig(config);

// Enable mock
mocker.mock('payment.monitoring');

// Make a request in your tests
request.get('https://example.com/api/status/monitoring', (err, response, body) => {
  // Mocked request
});
```

## Run Tests
```
npm test
```