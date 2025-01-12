function expect(val) {
  return {
    toBe: function (compareVal) {
      if (val === compareVal) {
        return true;
      }

      throw new Error("Not Equal");
    },
    notToBe: function (compareVal) {
      if (val !== compareVal) {
        return true;
      }
      throw new Error("Equal");
    },
  };
}

expect(5).toBe(5);
expect(5).notToBe(10);
expect(5).notToBe(5);
