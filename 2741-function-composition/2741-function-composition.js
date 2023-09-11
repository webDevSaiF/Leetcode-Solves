/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    let functionsValue = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      functionsValue = functions[i](functionsValue);
    }
    return functionsValue;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */