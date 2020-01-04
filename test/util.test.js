'use strict';

require('should');
const {
  isBoolean,
  isDate,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isRegExp,
  isString,
  isUndefined,
} = require('../util');
const util = require('../util');

describe('test/util.test', function() {
  const TYPES = [
    'Boolean',
    'Date',
    'Function',
    'Null',
    'Number',
    'Object',
    'RegExp',
    'String',
    'Undefined',
  ];
  const CASES = [
    [ 'Boolean', true ],
    [ 'Boolean', false ],
    [ 'Boolean', new Boolean(true) ],
    [ 'Boolean', new Boolean(false) ],
    [ 'Date', new Date() ],
    [ 'Date', new Date('2020-01-01T00:00:00.000Z') ],
    [ 'Date', new Date('Invalid Date') ],
    [ 'Function', function(){} ],
    [ 'Function', new Function('return false') ],
    [ 'Function', () => false ],
    [ 'Null', null ],
    [ 'Number', 0 ],
    [ 'Number', 1 ],
    [ 'Number', NaN ],
    [ 'Number', new Number(0) ],
    [ 'Number', new Number(1) ],
    [ 'Object', {} ],
    [ 'Object', { n: 1 } ],
    [ 'Object', new Object({}) ],
    [ 'Object', new Object({ newObject: 1 }) ],
    [ 'RegExp', /re/g ],
    [ 'RegExp', new RegExp('new RegExp', 'g') ],
    [ 'String', 'string' ],
    [ 'String', new String('new String') ],
    [ 'Undefined', undefined ],
  ];
  CASES.forEach(function(kase) {
    it(`is${kase[0]}(${String(kase[1])})`, function() {
      util['is' + kase[0]](kase[1]).should.eql(true);
    });
  });
  TYPES.forEach(function(type) {
    CASES
    .filter(kase => kase[0] !== type)
    .forEach(function(kase) {
      it(`NOT is${type}(${String(kase[1])})`, function() {
        util['is' + type](kase[1]).should.eql(false);
      });
    });
  });

});
