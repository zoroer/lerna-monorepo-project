'use strict';

const moduleTestOthers = require('..');
const assert = require('assert').strict;

assert.strictEqual(moduleTestOthers(), 'Hello from moduleTestOthers');
console.info('moduleTestOthers tests passed');
