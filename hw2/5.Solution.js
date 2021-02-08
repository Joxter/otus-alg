/*
Test #7  [OK] time: 0:00.001
Test #8  [OK] time: 0:00.007
Test #9  [OK] time: 0:00.007
Test #10 [OK] time: 0:00.114
Test #11 [OK] time: 0:02.960
Test #12 [OK] time: 1:19.445
Test #13 -
Test #14 -
*/
export function primeA(n) {
  let cnt = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      cnt++;
    }
  }

  return cnt;
}

function isPrime(x) {
  if (x === 2) return true;
  if (x % 2 === 0) return false;

  const max = Math.sqrt(x);
  for (let i = 3; i <= max; i = i + 2) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
}

/*
Test #7  [OK] time: 0:00.000
Test #8  [OK] time: 0:00.009
Test #9  [OK] time: 0:00.007
Test #10 [OK] time: 0:00.067
Test #11 [OK] time: 0:01.258
Test #12 [OK] time: 0:26.720
Test #13 -
*/
let primes = [];

export function primeB(n) {
  primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrimeB(i)) {
      primes.push(i);
    }
  }

  return primes.length;
}

function isPrimeB(x) {
  if (x === 2) return true;

  const max = Math.sqrt(x);
  for (const pr of primes) {
    if (pr > max) return true;
    if (x % pr === 0) return false;
  }

  return true;
}

/*
Test #7  [OK] time: 0:00.001
Test #8  [OK] time: 0:00.004
Test #9  [OK] time: 0:00.011
Test #10 [OK] time: 0:00.074
Test #11 [OK] time: 0:00.779
Test #12 [OK] time: 0:11.085
Test #13 - Out Of Memory Error
Test #14 - Out Of Memory Error
*/
export function primeC(n) {
  const erat = Array.from({length: n + 1}).fill(false);
  let cnt = 0;

  for (let i = 2; i <= n; i++) {
    if (!erat[i]) {
      cnt++;

      for (let j = i * i; j < erat.length; j += i) {
        erat[j] = true;
      }
    }
  }

  return cnt;
}
