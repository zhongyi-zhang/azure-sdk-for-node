// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadla7447.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2015-11-01-preview')
  .reply(200, "{\"value\":[],\"nextLink\":null,\"count\":null}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c25d5f7c-9e17-4d7a-9914-abaa288dff9c',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 20 Jan 2016 20:38:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla7447.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2015-11-01-preview')
  .reply(200, "{\"value\":[],\"nextLink\":null,\"count\":null}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c25d5f7c-9e17-4d7a-9914-abaa288dff9c',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 20 Jan 2016 20:38:24 GMT',
  connection: 'close' });
 return result; }]];