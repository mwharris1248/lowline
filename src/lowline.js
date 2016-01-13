var log = console.log.bind(console);
function test(func, input, output) {
  if (func(input) === output) {

  } else {

  }
}

(function() {
// ****************************************************************************
root = this;

var _ = {};
_.backup = root._;

_.getBackup = function(){
  return this.backup;
};

_.VERSION = '0.0.1';

_.getVersion = function(){
  return this.VERSION;
};

// ----------------------------------------------------------------------------
// Collections

_.each = function(list, iteratee, context){};
_.map = function(){};
_.reduce = function(){};
_.reduceRight = function(){};
_.find = function(){};
_.filter = function(){};
_.where = function(){};
_.findWhere = function(){};
_.reject = function(){};
_.every = function(){};
_.some = function(){};
_.contains = function(){};
_.invoke = function(){};
_.pluck = function(){};
_.max = function(){};
_.min = function(){};
_.sortBy = function(){};
_.groupBy = function(){};
_.indexBy = function(){};
_.countBy = function(){};
_.shuffle = function(){};
_.sample = function(){};
_.toArray = function(){};
_.size = function(){};
_.partition = function(){};

// ----------------------------------------------------------------------------
// Arrays

_.first = function(){};
_.initial = function(){};
_.last = function(){};
_.rest = function(){};
_.compact = function(){};
_.flatten = function(){};
_.without = function(){};
_.union = function(){};
_.intersection = function(){};
_.difference = function(){};
_.uniq = function(){};
_.zip = function(){};
_.unzip = function(){};
_.object = function(){};
_.indexOf = function(){};
_.lastIndexOf = function(){};
_.sortedIndex = function(){};
_.findIndex = function(){};
_.findLastIndex = function(){};
_.range = function(){};

// ----------------------------------------------------------------------------
// Functions

_.bind = function(){};
_.bindAll = function(){};
_.partial = function(){};
_.memoize = function(){};
_.delay = function(){};
_.defer = function(){};
_.throttle = function(){};
_.debounce = function(){};
_.once = function(){};
_.after = function(){};
_.before = function(){};
_.wrap = function(){};
_.negate = function(){};
_.compose = function(){};

// ----------------------------------------------------------------------------
// Objects

_.keys = function(){};
_.allKeys = function(){};
_.values = function(){};
_.mapObject = function(){};
_.pairs = function(){};
_.invert = function(){};
_.create = function(){};
_.functions = function(){};
_.findKey = function(){};
_.extend = function(){};
_.extendOwn = function(){};
_.pick = function(){};
_.omit = function(){};
_.defaults = function(){};
_.clone = function(){};
_.tap = function(){};
_.has = function(){};
_.matcher = function(){};
_.property = function(){};
_.propertyOf = function(){};
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
_.isUndefined = function(data){
  return data === undefined;
};

_.isObject = function(data){
  return typeof data === 'object';
};

_.isArray = function(data){
  return _.isObject(data) && !_.isUndefined(data.length);
};

_.isEmpty = function(data){
  if (_.isUndefined(data.length)) {
    // has no length property, is it an object?
    if (_.isObject(data)) {
      // check number of keys
      return !(Object.keys(data).length > 0);
    } else {
      return true
    }
  } else {
    return !(data.length > 0);
  }
};

_.isElement = function(){};
_.isArguments = function(){};
_.isFunction = function(){};
_.isString = function(){};
_.isNumber = function(){};
_.isFinite = function(){};
_.isBoolean = function(){};
_.isDate = function(){};
_.isRegExp = function(){};
_.isNan = function(){};
_.isNull = function(){};

_.isEqual = function(){
  // TODO: deep comparison between 2 objects
};
// _.isMatch = function(object, properties){
//   log(object, properties);
//   var keys = Object.keys(properties);
//   for (var i=0; i < keys.length; i++) {
//     var key = keys[i];
//     if (_.isUndefined(undefined)) log('UNDEFINED');
//   }
//   return true;
// };
// _.isMatch({'a':1, 'b':'z', c:null}, {'b':'z'});


// ----------------------------------------------------------------------------
// Utility

_.noConflict = function(){};
_.identity = function(){};
_.constant = function(){};
_.noop = function(){};
_.times = function(){};
_.random = function(){};
_.mixin = function(){};
_.iteratee = function(){};
_.uniqueId = function(){};
_.escape = function(){};
_.unescape = function(){};
_.result = function(){};
_.now = function(){};
_.template = function(){};

// ----------------------------------------------------------------------------
// Chaining

_.chain = function(){};
_.value = function(){};
// ----------------------------------------------------------------------------

root._ = _;

// ****************************************************************************
}());
