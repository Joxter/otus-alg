import { time } from '../test-runner.js';
import { BinaryTree } from './BinaryTree.js';
import { AVLTree } from './AVLTree.js';

/*
******* BinaryTree
Test "add 150,000 (sorted)" time: 0:48.658
Test "search 15,000 (sorted)" time: 0:04.536
Test "remove 15,000 (sorted)" time: 0:04.736

Test "add 20,000,000 (random)" time: 0:39.823
Test "search 2,000,000 (random)" time: 0:04.334
Test "remove 2,000,000 (random)" time: 0:05.238

  Тут ожидаемо, добавление сортированных элементов очень долгое, а рандомные на порядки быстрее
  За сравнимое время в одном случае добавляет 150 тысяч элементов, а в другом 20 миллионов

******* AVLTree

Test "add 20,000,000 (sorted)" time: 0:04.524
Test "search 2,000,000 (sorted)" time: 0:03.369
Test "remove 2,000,000 (sorted)" time: 0:03.585

Test "add 20,000,000 (random)" time: 0:42.639
Test "search 2,000,000 (random)" time: 0:03.749
Test "remove 2,000,000 (random)" time: 0:04.631

Test "add 50,000,000 (sorted)" time: 0:12.258
Test "search 5,000,000 (sorted)" time: 0:09.841
Test "remove 5,000,000 (sorted)" time: 0:10.205

  А вот АВЛ удивил, думаю что где-то ошибся в реализации.

  20 миллиоднов случайных значений добавислоь примерно как в бинарное дерево.
  Но добавление 20млн сортированных значений заняло в 10 раз меньше времени, хотя я ожидал что
  АВЛ дерево работает примерно одинаково на любых данных.

  50млн сортированных добавилось так же быстро, а на бОльших значених крашилась Node.js

*/
console.log('******* BinaryTree');
testTree('sorted', new BinaryTree(), getArray(150_000));
testTree('random', new BinaryTree(), shuffle(getArray(20_000_000)));
console.log('******* AVLTree');
testTree('sorted', new AVLTree(), getArray(20_000_000));
testTree('random', new AVLTree(), shuffle(getArray(20_000_000)));
testTree('sorted', new AVLTree(), getArray(50_000_000));

function testTree(title, tree, arr) {
  const findArr = getArrToDelete(arr.length);

  let start = Date.now();
  for (let i = 0; i < arr.length; i++) {
    tree.insert(arr[i]);
  }
  let duration = Date.now() - start;
  console.log(`Test "add ${numberWithComma(arr.length)} (${title})" ${time(duration)}`);

  start = Date.now();
  for (let i = 0; i < findArr.length; i++) {
    tree.search(findArr[i]);
  }
  duration = Date.now() - start;
  console.log(`Test "search ${numberWithComma(findArr.length)} (${title})" ${time(duration)}`);

  start = Date.now();
  for (let i = 0; i < findArr.length; i++) {
    tree.remove(findArr[i]);
  }
  duration = Date.now() - start;
  console.log(`Test "remove ${numberWithComma(findArr.length)} (${title})" ${time(duration)}`);
}

function shuffle(array) {
  let currentIndex = array.length;

  while (0 !== currentIndex) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    const temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getArrToDelete(max) {
  const mySet = new Set();
  while (mySet.size < (max / 10)) {
    mySet.add(Math.floor(Math.random() * max));
  }
  return [...mySet];
}

function getArray(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
}

function numberWithComma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
