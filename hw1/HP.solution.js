/*

1> i < j
2> i === j
3> i + j === 24
4> i + j < 30
5> i === Math.floor(j / 2)
6> i < 10 || j < 10;
7> i > 15 && j > 15;
8> i === 0 || j === 0;
9> Math.abs(i - j) > 10
10> i >= Math.floor(j / 2) && i < j

12> (i ** 2 + j ** 2) <= 20 ** 2
14> i + j > 25 - 6 && i + j < 25 + 4
15> Math.abs(i - j) % 21 > 9





21> (i + j) % 2 === 0
22> (i + j) % 3 === 0

*/

console.log(cast((i, j) => {
  return Math.abs(i - j) === 4;
}));

function cast(spell) {
  let out = '';
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      out += spell(i, j) ? '# ' : '. ';
    }
    out += '\n';
  }

  return out;
}