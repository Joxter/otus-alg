/*



*/

main();

function main() {

  // console.log(fib(10));

  console.log(1.618 ** 100 / Math.sqrt(5) + 1/2);
}

function fib(n) {
  let f0 = 0;
  let f1 = 1;
  let f2 = 1;

  for (let i = 2; i <= n; i++) {
    f2 = f0 + f1;
    f0 = f1;
    f1 = f2;
  }

  return f2;
}

