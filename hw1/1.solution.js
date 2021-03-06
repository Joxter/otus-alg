export function luckyTicketsCount(cols) {
  let total = 0n;

  for (let i = 0; i <= cols * 9; i++) {
    const cnt = BigInt(getPossibleCombinations(i, cols));
    total += cnt * cnt;
  }

  return total;
}

/*
console.log('start');
console.log('1> ', luckyTicketsCount(1)); // 10
console.log('2> ', luckyTicketsCount(2)); // 670
console.log('3> ', luckyTicketsCount(3)); // 55252
console.log('4> ', luckyTicketsCount(4)); // 4816030
console.log('5> ', luckyTicketsCount(5)); // 432457640
console.log('6> ', luckyTicketsCount(6)); // 39581170420
console.log('7> ', luckyTicketsCount(7)); // 3671331273480
console.log('8> ', luckyTicketsCount(8)); // 343900019857310
console.log('9> ', luckyTicketsCount(9)); // 32458256583753920
console.log('10> ', luckyTicketsCount(10)); // 3081918923741898000
console.log('end');
*/

function getPossibleCombinations(n, col, sum = 0) {
  if (col < 1) {
    return 0;
  }

  let cnt = 0;
  let max = 9 < n ? 9 : n;

  for (let i = 0; i <= max; i++) {
    if (sum + i === n) {
      cnt++;
      break;
    }
    if (sum > n || n - sum > col * max) {
      break;
    }

    if (col > 0) {
      cnt += getPossibleCombinations(n, col - 1, sum + i);
    } else if (n - sum <= 9) {
      cnt++;
    }
  }

  return cnt;
}

export function luckyTicketsCount2(cols) {
  let curr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  for (let i = 2; i <= cols; i++) {
    curr = getPossibleCombinations2(curr);
  }

  return curr.map((n) => BigInt(n) * BigInt(n)).reduce((s, a) => s + a, 0n);
}

function getPossibleCombinations2(arr) {
  const res = [];
  for (let i = 0; i < arr.length + 9; i++) {
    let s = 0;

    for (let j = 0; j < 10; j++) {
      s += arr[i - j] || 0;
    }

    res.push(s);
  }

  return res;
}
