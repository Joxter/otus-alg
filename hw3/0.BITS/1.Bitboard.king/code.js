///////
let l = '';

function log(...strs) {
  l += strs.join(' ') + '\n';
}

function showLog() {
  console.log(l);
}

export function king(n) {
  n = 1n << BigInt(n);

  let no1 = 18374403900871474942n & n;
  let no8 = 9187201950435737471n & n;

  const m = no1 << 7n | n << 8n | no8 << 9n
    | no1 >> 1n /*     */ | no8 << 1n
    | no1 >> 9n | n >> 8n | no8 >> 7n;

  return m;
}

board((king(56)));
board((king(63)));

function board(n) {
  const b = last64(n.toString(2));
  log('board: ', b, n);

  for (let i = 0; i < 8; i++) {
    log(b.slice(i * 8, (i + 1) * 8).split('').reverse().join(' '));
  }
}

export function last64(n) {
  n = '0000000000000000000000000000000000000000000000000000000000000000000000' + n;
  return n.slice(n.length - 64, n.length);
}


showLog();
