'use strict';
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
} = require('./util');

/**
 * 一维排序算法。
 * @param {Object} a 对比对象
 * @param {Object} b 对比对象
 * @return {Number} 如果 a 要排在 b 之前，返回 -1
 *                  如果 a 要排在 b 之后，返回 1
 *                  如果 a 和 b 相等，返回 0
 *                  特殊的，对于有 null 或 undefined 的情况：
 *
 *                  任何有效值 < null < undefined
 *
 *                  如果你需要将某些反向设计的特殊值（如 -1，0 等）
 *                  排到正常值（如1，2等）之后，可以将特殊值处理为 null
 */
function compare(a, b) {
  if (isUndefined(a) || isUndefined(b) || isNull(a) || isNull(b)) {
    const la = specialValue(a);
    const lb = specialValue(b);
    return compareNumbers(la, lb);
  }

  // 以下为 a 和 b 均不为 null 或 undefined。

  if (isRegExp(a) && isRegExp(b)) {
    return compareRegExps(a, b);
  }
  // 不可比较
  if (isObject(a) && isObject(b)) {
    return 0;
  }
  if (isFunction(a) && isFunction(b)) {
    return 0;
  }

  // 数值比较
  if (isNumber(a) && isNumber(b)) {
    return compareNumbers(a, b);
  }
  if (isDate(a) && isDate(b)) {
    const da = a.getTime();
    const db = b.getTime();
    return compareNumbers(da, db);
  }
  if(isBoolean(a) && isBoolean(b)) {
    return compareNumbers(Number(a), Number(b));
  }

  // 默认使用字符串比较
  return compareStrings(String(a), String(b));
}

/**
 * 将特殊值（undefined, null）转换为数值进行排序。
 * undefined < null < value
 * @param {Object} value 需要处理的特殊值。
 * @return {Number}
 */
function specialValue(value) {
  if (isUndefined(value)) return 2;
  if (isNull(value)) return 1;
  return 0;
}

/**
 * 比较数值。
 *
 * @param {Number} a 比较对象 a
 * @param {Number} b 比较对象 b
 * @return {Number} 比较结果。
 */
function compareNumbers(a, b) {
  if (isNaN(a) && isNaN(b)) {
    return 0
  }
  if (isNaN(a)) {
    return 1;
  }
  if (isNaN(b)) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
}

function compareStrings(a, b) {
  if (a === b) { return 0; }
  const maxLength = Math.max(a.length, b.length);
  for (let i = 0; i < maxLength; i++) {
    let ca = a.charCodeAt(i) || -1;
    let cb = b.charCodeAt(i) || -1;
    if (ca > cb) {
      return 1;
    }
    if (ca < cb) {
      return -1;
    }
  }
  return 0;

  // "A".charCodeAt(0) === 65
  // "a".charCodeAt(0) === 97
  //
  // 且
  // "A" < "a" === true
  //
  // 但
  // "A".localeCompare('a') === 1
  // 用 localeCompare 时 A > a，不符合预期
  //! return a.localeCompare(b);
}

function regexp2string(reg) {
  return '/' + reg.source + '/' +
    (reg.ignoreCase ? 'i' : '') +
    (reg.multiline ? 'm' : '') +
    (reg.global ? 'g' : '');
}

function compareRegExps(a, b) {
  const ra = regexp2string(a);
  const rb = regexp2string(b);
  return compareStrings(ra, rb);
}

module.exports = compare;
module.exports.compareStrings = compareStrings;
module.exports.compareNumbers = compareNumbers;
module.exports.compareRegExps = compareRegExps;
