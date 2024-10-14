'use strict';

const moduleTest = require('..');
const assert = require('assert').strict;

assert.strictEqual(moduleTest(), 'Hello from moduleTest');
console.info('moduleTest tests passed');
