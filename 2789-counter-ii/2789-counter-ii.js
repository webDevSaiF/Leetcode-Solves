/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let val = init;
  let functionsOfObject = {};
  functionsOfObject.increment = () => {
    val++;
    return val;
  };
  functionsOfObject.decrement = () => {
    val--;
    return val;
  };
  functionsOfObject.reset = () => {
    val = init;
    return val;
  };

  return functionsOfObject;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */