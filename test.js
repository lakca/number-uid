'use strict';

var assert = require('assert');
var nuid = require('./index');

var uid = nuid(10);
assert.ok(/^\d{10}$/.test(uid));

var uid2 = nuid(100);
assert.ok(/^\d{100}$/.test(uid2));