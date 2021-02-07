import bigInt from 'big-integer';

export function fibA(n) {
  if (n < 2) return n;
  return fibA(n - 1) + fibA(n - 2);
}

export function fibB(n) {
  if (n === 0) return '0';
  if (n === 1) return '1';

  let f0 = bigInt('0');
  let f1 = bigInt('1');
  let result;

  for (let i = 1; i < n; i++) {
    if (i % 10000 === 0) {
      const perc = (i / n) * 100;
      printProgress(`${i}/${n}, ${perc.toFixed(1)}%`);
    }
    result = f1.add(f0);

    f0 = f1;
    f1 = result;
  }
  printProgress(`100%, toString`);

  result = result.toString();
  finishProgress();

  return result;
}

export function fibC(n) {
  const f = (1 + Math.sqrt(5)) / 2;

  return Math.floor((f ** n) / Math.sqrt(5) + 0.5);
}

export function fibD(n) {
  if (n === 0) return '0';

  return powMatrix([
    [bigInt(1), bigInt(1)],
    [bigInt(1), bigInt(0)],
  ], n - 2)[0][0].toString();
}


function mulMatrix(a, b) {
  return [
    [
      a[0][0].multiply(b[0][0]).add(a[0][1].multiply(b[1][0])),
      a[0][0].multiply(b[0][1]).add(a[0][1].multiply(b[1][1]))],
    [
      a[1][0].multiply(b[0][0]).add(a[1][1].multiply(b[1][0])),
      a[1][0].multiply(b[0][1]).add(a[1][1].multiply(b[1][1]))],
  ];
}


export function powMatrix(m, n) {
  let result = [
    [bigInt(1), bigInt(1)],
    [bigInt(1), bigInt(0)],
  ];
  const baseN = n;

  for (let i = 1; n > 0; i += i) {
    if (n % 2 === 1) {
      result = mulMatrix(result, pow2Matrix(m, i));
    }
    n = Math.floor(n / 2);
  }

  return result;
}


function pow2Matrix(m, n) {
  if (n === 0) return [
    [bigInt(1), bigInt(1)],
    [bigInt(1), bigInt(0)],
  ];

  for (let i = 1; i < n; i += i) {
    m = mulMatrix(m, m);
  }

  return m;
}

function printProgress(str) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(str);
}

function finishProgress() {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
}
