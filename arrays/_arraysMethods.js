const tab = [1, 2.1, "Jerome", true];
/********************************************************/
console.log("[tab]      ---------------------------------------->", tab);
console.log("[value]    .pop()                                  >", tab.pop());
console.log("[tab]      ---------------------------------------->", tab);
console.log("[tabSize]  .push(true)                             >", tab.push(true));
console.log("[tab]      ---------------------------------------->", tab);
console.log("[value]    .reduce((acc, val) => acc + val))       >", tab.reduce((acc, val) => acc + val));
console.log("[value]    .reduceRight((acc, val) => acc + val))  >", tab.reduceRight((acc, val) => acc + val));
// ↑ voir : https://code.tutsplus.com/articles/5-real-life-uses-for-the-javascript-reduce-method--cms-39096