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

export const NO_1 = 9187201950435737471n;
export const NO_2 = 13816973012072644543n;
export const NO_3 = 16131858542891098079n;
export const NO_4 = 17289301308300324847n;
export const NO_5 = 17868022691004938231n;
export const NO_6 = 18157383382357244923n;
export const NO_7 = 18302063728033398269n;
export const NO_8 = 18374403900871474942n;