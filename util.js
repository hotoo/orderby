''
function typeOf(type) {
  return function(obj) {
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  };
}
const isBoolean = typeOf('Boolean');
const isDate = typeOf('Date');
const isFunction = typeOf('Function');
const isNull = typeOf('Null');
const isNumber = typeOf('Number');
const isObject = typeOf('Object');
const isRegExp = typeOf('RegExp');
const isString = typeOf('String');
const isUndefined = typeOf('Undefined');

module.exports = {
  isBoolean,
  isDate,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isRegExp,
  isString,
  isUndefined,
};
