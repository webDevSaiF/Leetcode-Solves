const isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0 || map[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
isValid("([]{}");
