var romanToInt = function (s) {
  const romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const curValue = romanValue[s[i]];
    const nextValue = romanValue[s[i + 1]];
    if (curValue < nextValue) {
      result += nextValue - curValue;
      i++;
    } else result += curValue;
  }
  return result;
};
