export function res(n) {
  let bits = last64(n.toString(2)); // не придумал другого для JS ограничить число только 64 битами
  const position = BigInt('0b' + bits);

  let pos = position;
  let countOfOne = 0;
  while (pos) {
    pos = pos - 1n & pos;
    countOfOne++;
  }

  return `${countOfOne}\r\n${position}`;
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

export const NO_1 = 0x7f7f7f7f7f7f7f7fn;
export const NO_2 = 0xbfbfbfbfbfbfbfbfn;
export const NO_3 = 0xdfdfdfdfdfdfdfdfn;
export const NO_4 = 0xefefefefefefefefn;
export const NO_5 = 0xf7f7f7f7f7f7f7f7n;
export const NO_6 = 0xfbfbfbfbfbfbfbfbn;
export const NO_7 = 0xfdfdfdfdfdfdfdfdn;
export const NO_8 = 0xfefefefefefefefen;