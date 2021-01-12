const computeFactorialIt = (n) => {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
};

const computeFactorialRec = (n) => {
  // This is the base case.
  if (n === 0) return 1;
  // This is the recursive one.
  else return n * computeFactorialRec(n - 1);
};

const computePowerIt = (n, p) => {
    let result = n;
    if (n === 0) return 0;

    for (let i = 1; i < p; i++) {
      result = result * n ;
    }
    return result;
};

const computePowerRec = (n, p) => {
  if (p === 0) return 1;

  else return n * computePowerRec(n, p-1);
}

const computeSquareRootIt = (n) => {
  if (n < 0) return 0;

  let i
  for (i = 0; i * i <= n; i += 0.01) {}
  console.log(`value of square root`, i)

  // Array.from( {length: n} ).forEach( (element, index) => {
  //   if (index * index == n ) {
  //     i = index;
  //   }
  // });

  console.log(`value of i ${i}`)


}

const computeSquareRootRec = (n, i=n) => {
  if (n < 0) return 0;
  if (n / i == i) return i;
  else return computeSquareRootRec(n, i-1)
}
