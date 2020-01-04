'use strict';

const order = require('../index');
require('should');

describe('test/order_by.test.js', () => {

  describe('order.by() simple', () => {
    it('order by number', () => {
      const list = [
        { n: 1 },
        { n: 3 },
        { n: 2 },
      ];
      const result = list.sort(order.by('n'));
      result.should.eql([
        { n: 1 },
        { n: 2 },
        { n: 3 },
      ]);
    });

    it('order by number asc', () => {
      const list = [
        { n: 1 },
        { n: 3 },
        { n: 2 },
      ];
      const result = list.sort(order.by('n asc'));
      result.should.eql([
        { n: 1 },
        { n: 2 },
        { n: 3 },
      ]);
    });

    it('order by number desc', () => {
      const list = [
        { n: 1 },
        { n: 3 },
        { n: 2 },
      ];
      const result = list.sort(order.by('n desc'));
      result.should.eql([
        { n: 3 },
        { n: 2 },
        { n: 1 },
      ]);
    });

    it('order by string', () => {
      const list = [
        { s: '1' },
        { s: '3' },
        { s: '2' },
      ];
      const result = list.sort(order.by('s'));
      result.should.eql([
        { s: '1' },
        { s: '2' },
        { s: '3' },
      ]);
    });

    it('order by string asc', () => {
      const list = [
        { s: '1' },
        { s: '3' },
        { s: '2' },
      ];
      const result = list.sort(order.by('s asc'));
      result.should.eql([
        { s: '1' },
        { s: '2' },
        { s: '3' },
      ]);
    });

    it('order by string desc', () => {
      const list = [
        { s: '1' },
        { s: '3' },
        { s: '2' },
      ];
      const result = list.sort(order.by('s desc'));
      result.should.eql([
        { s: '3' },
        { s: '2' },
        { s: '1' },
      ]);
    });
  });

  describe('order.by() more', () => {
    it('order by more number', () => {
      const list = [
        { n: 1, n2: 3 },
        { n: 3, n2: 2 },
        { n: 2, n2: 1 },
        { n: 2, n2: 3 },
        { n: 2, n2: 2 },
      ];
      const result = list.sort(order.by('n', 'n2'));
      result.should.eql([
        { n: 1, n2: 3 },
        { n: 2, n2: 1 },
        { n: 2, n2: 2 },
        { n: 2, n2: 3 },
        { n: 3, n2: 2 },
      ]);
    });

    it('order by more number asc', () => {
      const list = [
        { n: 1, n2: 3 },
        { n: 3, n2: 2 },
        { n: 2, n2: 1 },
        { n: 2, n2: 3 },
        { n: 2, n2: 2 },
      ];
      const result = list.sort(order.by('n asc', 'n2 asc'));
      result.should.eql([
        { n: 1, n2: 3 },
        { n: 2, n2: 1 },
        { n: 2, n2: 2 },
        { n: 2, n2: 3 },
        { n: 3, n2: 2 },
      ]);
    });

    it('order by more number desc', () => {
      const list = [
        { n: 1, n2: 3 },
        { n: 3, n2: 2 },
        { n: 2, n2: 1 },
        { n: 2, n2: 3 },
        { n: 2, n2: 2 },
      ];
      const result = list.sort(order.by('n desc', 'n2 desc'));
      result.should.eql([
        { n: 3, n2: 2 },
        { n: 2, n2: 3 },
        { n: 2, n2: 2 },
        { n: 2, n2: 1 },
        { n: 1, n2: 3 },
      ]);
    });

    it('order by more string', () => {
      const list = [
        { s: '1', s2: '3' },
        { s: '3', s2: '2' },
        { s: '2', s2: '1' },
        { s: '2', s2: '3' },
        { s: '2', s2: '2' },
      ];
      const result = list.sort(order.by('s', 's2'));
      result.should.eql([
        { s: '1', s2: '3' },
        { s: '2', s2: '1' },
        { s: '2', s2: '2' },
        { s: '2', s2: '3' },
        { s: '3', s2: '2' },
      ]);
    });

    it('order by more string asc', () => {
      const list = [
        { s: '1', s2: '3' },
        { s: '3', s2: '2' },
        { s: '2', s2: '1' },
        { s: '2', s2: '3' },
        { s: '2', s2: '2' },
      ];
      const result = list.sort(order.by('s asc', 's2 asc'));
      result.should.eql([
        { s: '1', s2: '3' },
        { s: '2', s2: '1' },
        { s: '2', s2: '2' },
        { s: '2', s2: '3' },
        { s: '3', s2: '2' },
      ]);
    });

    it('order by more string desc', () => {
      const list = [
        { s: '1', s2: '3' },
        { s: '3', s2: '2' },
        { s: '2', s2: '1' },
        { s: '2', s2: '3' },
        { s: '2', s2: '2' },
      ];
      const result = list.sort(order.by('s desc', 's2 desc'));
      result.should.eql([
        { s: '3', s2: '2' },
        { s: '2', s2: '3' },
        { s: '2', s2: '2' },
        { s: '2', s2: '1' },
        { s: '1', s2: '3' },
      ]);
    });

    it('order by same list', () => {
      const list = [
        { s: '1', s2: '2' },
        { s: '1', s2: '2' },
        { s: '1', s2: '2' },
        { s: '1', s2: '2' },
        { s: '1', s2: '2' },
      ];
      const result = list.sort(order.by('s desc', 's2 desc'));
      result.should.eql([
        { s: '1', s2: '2' },
        { s: '1', s2: '2' },
        { s: '1', s2: '2' },
        { s: '1', s2: '2' },
        { s: '1', s2: '2' },
      ]);
    });
  });

  describe('order.by() complex', () => {
    it('order by complex number and string', () => {
      const list = [
        { n: 1, s: '3' },
        { n: 3, s: '2' },
        { n: 2, s: '1' },
        { n: 2, s: '3' },
        { n: 2, s: '2' },
      ];
      const result = list.sort(order.by('n', 's'));
      result.should.eql([
        { n: 1, s: '3' },
        { n: 2, s: '1' },
        { n: 2, s: '2' },
        { n: 2, s: '3' },
        { n: 3, s: '2' },
      ]);
    });

    it('order by complex number and string asc', () => {
      const list = [
        { n: 1, s: '3' },
        { n: 3, s: '2' },
        { n: 2, s: '1' },
        { n: 2, s: '3' },
        { n: 2, s: '2' },
      ];
      const result = list.sort(order.by('n asc', 's asc'));
      result.should.eql([
        { n: 1, s: '3' },
        { n: 2, s: '1' },
        { n: 2, s: '2' },
        { n: 2, s: '3' },
        { n: 3, s: '2' },
      ]);
    });

    it('order by complex number and string desc', () => {
      const list = [
        { n: 1, s: '3' },
        { n: 3, s: '2' },
        { n: 2, s: '1' },
        { n: 2, s: '3' },
        { n: 2, s: '2' },
      ];
      const result = list.sort(order.by('n desc', 's desc'));
      result.should.eql([
        { n: 3, s: '2' },
        { n: 2, s: '3' },
        { n: 2, s: '2' },
        { n: 2, s: '1' },
        { n: 1, s: '3' },
      ]);
    });

    it('order by complex number and string desc and null', () => {
      const list = [
        { n: 1, s: '3', date: '2019-12-17T04:04:20.000Z', nil: null },
        { n: 3, s: '2', date: '2019-12-26T07:36:57.000Z', nil: null },
        { n: 2, s: '1', date: '2019-12-19T09:05:20.000Z', nil: null },
        { n: 3, s: '1', date: '2019-12-19T09:05:20.000Z', nil: null },
        { n: 2, s: '3', date: '2019-12-18T09:05:20.000Z', nil: 2 },
        { n: 2, s: '2', date: '2019-12-30T09:05:20.000Z', nil: 1 },
      ];
      const result = list.sort(order.by('nil', 'date desc', 'n'));
      result.should.eql([
        { n: 2, s: '2', date: '2019-12-30T09:05:20.000Z', nil: 1 },
        { n: 2, s: '3', date: '2019-12-18T09:05:20.000Z', nil: 2 },
        { n: 3, s: '2', date: '2019-12-26T07:36:57.000Z', nil: null },
        { n: 2, s: '1', date: '2019-12-19T09:05:20.000Z', nil: null },
        { n: 3, s: '1', date: '2019-12-19T09:05:20.000Z', nil: null },
        { n: 1, s: '3', date: '2019-12-17T04:04:20.000Z', nil: null },
      ]);
    });

    it('order by complex real', () => {
      const list = [
        {
          'activityId': 'S-20191212',
          'gameStartDate': '2019-12-12T07:00:00.000Z',
          'orderRankNo': null,
          'gmtCreate': '2019-12-26T07:36:57.000Z', // 真皮
        },
        {
          'activityId': 'S-20191212',
          'gameStartDate': '2019-12-12T07:00:00.000Z',
          'orderRankNo': null,
          'gmtCreate': '2019-12-19T09:05:20.000Z',
        },
        {
          'activityId': 'S-20191212',
          'gameStartDate': '2019-12-12T07:00:00.000Z',
          'orderRankNo': null,
          'gmtCreate': '2019-12-17T04:04:20.000Z',
        },
      ];
      const result = list.sort(order.by('gameStartDate DESC', 'activityId', 'orderRankNo', 'gmtCreate DESC'));
      result.should.eql([
        {
          'activityId': 'S-20191212',
          'gameStartDate': '2019-12-12T07:00:00.000Z',
          'orderRankNo': null,
          'gmtCreate': '2019-12-26T07:36:57.000Z', // 真皮
        },
        {
          'activityId': 'S-20191212',
          'gameStartDate': '2019-12-12T07:00:00.000Z',
          'orderRankNo': null,
          'gmtCreate': '2019-12-19T09:05:20.000Z',
        },
        {
          'activityId': 'S-20191212',
          'gameStartDate': '2019-12-12T07:00:00.000Z',
          'orderRankNo': null,
          'gmtCreate': '2019-12-17T04:04:20.000Z',
        },
      ]);
    });
  });

  describe('order.by RULE ERROR', () => {
    it('rule error', () => {
      const list = [
        { n: 1 },
        { n: 3 },
        { n: 2 },
      ];
      let err = 0;
      try {
        const result = list.sort(order.by('n ABC'));
        err = 1;
      } catch(ex) {
        err = 2;
        ex.message.should.equal('[order.by] rule error: n ABC');
      }
      err.should.equal(2);
    });
  });

  describe('order.by NOT FOUND CLOUMN NAME', () => {
    it('cloumn name error', () => {
      const list = [
        { n: 1 },
        { n: 3 },
        { n: 2 },
      ];
      let err = 0;
      try {
        const result = list.sort(order.by('__NOT_EXIST__'));
        err = 1;
      } catch(ex) {
        err = 2;
        ex.message.should.equal('[order.by] not found "__NOT_EXIST__" in data');
      }
      err.should.equal(2);
    });
  });
});
