'use strict';
/**
 * 类似 SQL 的 ORDER BY 通用排序算法。
 *
 * const order = require('./order');
 *
 * [
 *  {a:2, b:'b'},
 *  {a:1, b:'a'},
 *  {a:2, b:'a'},
 * ].sort(order.by('a', 'b DESC'));
 *
 * @author 冒顿
 * @version 2017-05-31
 */

const RE_ORDER_BY_RULE = /^([^\s]+)(?:\s+(ASC|DESC))?$/i;
function _order(a, b) {
  const typeA = typeof a;
  const typeB = typeof b;
  if (typeA === 'number' && typeB === 'number') {
    const order = a - b;
    if (order > 0) {
      return 1;
    }
    if (order < 0) {
      return -1;
    }
    return 0;
  }
  return String(a).localeCompare(String(b));

}

/**
 * list.sort(orderBy('columnA DESC','columnB'))
 * @return {Number} -1, 0, 1
 */
function orderBy() {
  const rules = [];
  for (let i = 0, l = arguments.length; i < l; i++) {
    const rule = arguments[i];
    const m = RE_ORDER_BY_RULE.exec(rule);
    if (!m || !m[1]) {
      throw new Error('order by rule error: ' + rule);
    }
    rules.push([
      m[1],
      (m[2] || 'ASC').toUpperCase(),
    ]);
  }
  return (a, b) => {
    for (let i = 0, l = rules.length; i < l; i++) {
      const rule = rules[i];
      const columnName = rule[0];
      let order;
      if (typeof a[columnName] === 'undefined' || typeof b[columnName] === 'undefined') {
        throw new Error('[order.by] not found "' + columnName + '" in data');
      }
      if (rule[1] === 'ASC') {
        order = _order(a[columnName], b[columnName]);
      } else { // DESC
        order = _order(b[columnName], a[columnName]);
      }
      if (order !== 0) {
        return order;
      }
    }
    return 0;
  };
}

module.exports = orderBy;
module.exports.by = orderBy;
