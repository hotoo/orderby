'use strict';

require('should');
const compare = require('../compare');

describe('test/compare.test', function() {
  const now = new Date();
  const CASES = [
    [ 'Number', 0, 0, 0 ],
    [ 'Number', 0, 1, -1 ],
    [ 'Number', 1, 0, 1 ],
    [ 'Number', 0, 100, -1 ],
    [ 'Number', 100, 0, 1 ],
    [ 'Number', NaN, NaN, 0 ],
    [ 'Number', NaN, 0, 1 ],
    [ 'Number', NaN, -1, 1 ],
    [ 'Number', NaN, 1, 1 ],
    [ 'Number', 0, NaN, -1 ],
    [ 'Number', -1, NaN, -1 ],
    [ 'Number', 1, NaN, -1 ],

    [ 'String', 'a', 'a', 0 ],
    [ 'String', '0', '0', 0 ],
    [ 'String', 'A', 'A', 0 ],
    [ 'String', '中', '中', 0 ],
    [ 'String', 'a', 'b', -1 ],
    [ 'String', 'b', 'a', 1 ],
    [ 'String', 'A', 'a', -1 ],
    [ 'String', 'a', 'A', 1 ],
    [ 'String', 'a', '中', -1 ],
    [ 'String', 'A', '中', -1 ],
    [ 'String', 'A', '中', -1 ],
    [ 'String', '中', '国', -1 ],
    [ 'String', '国', '中', 1 ],

    [ 'String', 'abcdefg', 'abcdefg', 0],
    [ 'String', '012345', '012345', 0],
    [ 'String', 'ABCDEFG', 'ABCDEFG', 0],
    [ 'String', new String('ABCDEFG'), 'ABCDEFG', 0],
    [ 'String', 'ABCDEFG', new String('ABCDEFG'), 0],
    [ 'String', new String('ABCDEFG'), new String('ABCDEFG'), 0],
    [ 'String', 'abcdefg', 'a', 1],
    [ 'String', 'a', 'abcdefg', -1],
    [ 'String', 'abcdefg', 'b', -1],
    [ 'String', 'b', 'abcdefg', 1],
    [ 'String', 'abcdefg', 'A', 1],
    [ 'String', 'A', 'abcdefg', -1],
    [ 'String', 'ABCDEFG', 'abcdefg', -1],
    [ 'String', 'abcdefg', 'ABCDEFG', 1],

    [ 'Boolean', true, true, 0],
    [ 'Boolean', false, false, 0],
    [ 'Boolean', true, false, 1],
    [ 'Boolean', false, true, -1],
    [ 'Boolean', new Boolean(true), new Boolean(true), 0],
    [ 'Boolean', new Boolean(false), new Boolean(false), 0],
    [ 'Boolean', new Boolean(true), new Boolean(false), 1],
    [ 'Boolean', new Boolean(false), new Boolean(true), -1],

    [ 'Date', now, now, 0],
    [ 'Date', new Date(2020,1,1), new Date(2020,1,1), 0],
    [ 'Date', new Date('2019-12-31'), new Date('2019-12-31'), 0],
    [ 'Date', new Date('2019-12-31T00:00:00.000Z'), new Date('2019-12-31T00:00:00.000Z'), 0],
    [ 'Date', new Date('2019-12-31T00:00:00.000Z'), new Date('2019-12-31T00:00:01.000Z'), -1],
    [ 'Date', new Date('2019-12-31T00:00:01.000Z'), new Date('2019-12-31T00:00:00.000Z'), 1],

    [ 'RegExp', /re/g, /re/g, 0],
    [ 'RegExp', /re/, /re/, 0],
    [ 'RegExp', /re/, /re/i, -1],
    [ 'RegExp', /re/, /re/m, -1],
    [ 'RegExp', /re/, /re/g, -1],
    [ 'RegExp', /ab/g, /re/g, -1],

    [ 'Function', function(){return false;}, function(){return true}, 0],
    [ 'Function', () => false, () => true, 0],
    [ 'Function', new Function('return false'), new Function('return true'), 0],

    [ 'Object', {}, {}, 0],
    [ 'Object', { n: 1 }, { n: 2 }, 0],

    [ 'MIX Date', new Date(), null, -1],
    [ 'MIX Date', null, new Date(), 1],

    [ 'Null', null, null, 0],
    [ 'MIX Null', null, undefined, -1],
    [ 'MIX Null', undefined, null, 1],
    [ 'MIX Null', null, 0, 1],
    [ 'MIX Null', null, 1, 1],
    [ 'MIX Null', null, '1', 1],
    [ 'MIX Null', null, 'a', 1],
    [ 'MIX Null', null, 'abcdefg', 1],
    [ 'MIX Null', null, true, 1],
    [ 'MIX Null', null, false, 1],
    [ 'MIX Null', null, new Date(), 1],
    [ 'MIX Null', null, /re/g, 1],
    [ 'MIX Null', null, function(){}, 1],

    [ 'MIX Null', 0, null, -1],
    [ 'MIX Null', 1, null, -1],
    [ 'MIX Null', '1', null, -1],
    [ 'MIX Null', 'a', null, -1],
    [ 'MIX Null', 'abcdefg', null, -1],
    [ 'MIX Null', true, null, -1],
    [ 'MIX Null', false, null, -1],
    [ 'MIX Null', new Date(), null, -1],
    [ 'MIX Null', /re/g, null, -1],
    [ 'MIX Null', function(){}, null, -1],

    [ 'MIX Undefined', undefined, undefined, 0],
    [ 'MIX Undefined', undefined, null, 1],
    [ 'MIX Undefined', undefined, 0, 1],
    [ 'MIX Undefined', undefined, 1, 1],
    [ 'MIX Undefined', undefined, '1', 1],
    [ 'MIX Undefined', undefined, 'a', 1],
    [ 'MIX Undefined', undefined, 'abcdefg', 1],
    [ 'MIX Undefined', undefined, new Date(), 1],
  ];

  describe('compare', function() {
    CASES.forEach(function(kase) {
      it(`${kase[0]}: copmare(${kase[1]}, ${kase[2]}) === ${kase[3]}`, function() {
        compare(kase[1], kase[2]).should.eql(kase[3]);
      });
    });
  });

  describe('compareStrings()', function() {
    it('compare same char', function() {
      const c = compare.compareStrings('a', 'a');
      c.should.equal(0);
    });
    it('compare different char to -1', function() {
      const c = compare.compareStrings('a', 'b');
      c.should.equal(-1);
    });
    it('compare different char to 1', function() {
      const c = compare.compareStrings('b', 'a');
      c.should.equal(1);
    });
    it('compare same string', function() {
      const c = compare.compareStrings('abcdefg', 'abcdefg');
      c.should.equal(0);
    });
    it('compare same string and new String', function() {
      const c = compare.compareStrings(new String('abcdefg'), 'abcdefg');
      c.should.equal(0);
    });
    it('compare same new String and string', function() {
      const c = compare.compareStrings('abcdefg', new String('abcdefg'));
      c.should.equal(0);
    });
    it('compare same new String', function() {
      const c = compare.compareStrings(new String('abcdefg'), new String('abcdefg'));
      c.should.equal(0);
    });
    it('compare long string and short sting to -1', function() {
      const c = compare.compareStrings('abcdefg', 'b');
      c.should.equal(-1);
    });
    it('compare long string and short string to 1', function() {
      const c = compare.compareStrings('abcdefg', 'aa');
      c.should.equal(1);
    });
    it('compare short string and long sting to -1', function() {
      const c = compare.compareStrings('a', 'abcdefg');
      c.should.equal(-1);
    });
    it('compare short string and long string to 1', function() {
      const c = compare.compareStrings('b', 'abcdefg');
      c.should.equal(1);
    });
  });
});
