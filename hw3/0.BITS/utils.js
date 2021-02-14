export function res(n) {
  const b = last64(n.toString(2));
  return `${b.replace(/0/g, '').length}\r\n${BigInt('0b' + b)}`;
}

export function board(n) {
  const b = last64(n.toString(2));
  console.log('board: ', b, n);

  for (let i = 0; i < 8; i++) {
    console.log(b.slice(i * 8, (i + 1) * 8).split('').reverse().join(' '));
  }
}

export function last64(n) {
  n = '0000000000000000000000000000000000000000000000000000000000000000000000' + n;
  return n.slice(n.length - 64, n.length);
}
