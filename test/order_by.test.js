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
  });

});
