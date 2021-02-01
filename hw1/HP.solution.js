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