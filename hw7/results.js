import { time } from '../test-runner.js';
import { BinaryTree } from './BinaryTree.js';
import { AVLTree } from './AVLTree.js';

// testRightRotataion();
// testLeftRotataion();
// testBigRightRotataion();
// testBigLeftRotataion();

function testBigLeftRotataion() {
  const avlTree = new AVLTree();

  const rotateNode = avlTree.insert(12);
  avlTree.insert(11);
  avlTree.insert(16);
  avlTree.insert(18);
  avlTree.insert(14);
  avlTree.insert(15);
  avlTree.insert(13);

  console.log(avlTree.print());
  console.log(avlTree.printTree());
// return;

  avlTree.bigLeftRotation(rotateNode);

  console.log(avlTree.print());
  console.log(avlTree.printTree());
}

function testBigRightRotataion() {
  const avlTree = new AVLTree();

  const rotateNode = avlTree.insert(12);
  avlTree.insert(8);
  avlTree.insert(10);
  avlTree.insert(11);
  avlTree.insert(9);
  avlTree.insert(7);
  avlTree.insert(13);

  console.log(avlTree.print());
  console.log(avlTree.printTree());
// return;

  avlTree.bigRightRotation(rotateNode);

  console.log(avlTree.print());
  console.log(avlTree.printTree());
}

function testLeftRotataion() {
  const avlTree = new AVLTree();

  const rotateNode = avlTree.insert(8);
  avlTree.insert(5);
  avlTree.insert(15);
  avlTree.insert(10);
  avlTree.insert(17);
  avlTree.insert(16);
  avlTree.insert(18);

  console.log(avlTree.print());
  console.log(avlTree.printTree());

  avlTree.smallLeftRotation(rotateNode);

  console.log(avlTree.print());
  console.log(avlTree.printTree());

}

function testRightRotataion() {
  const avlTree = new AVLTree();

  const rotateNode = avlTree.insert(11);
  avlTree.insert(8);
  avlTree.insert(15);
  avlTree.insert(5);
  avlTree.insert(2);
  avlTree.insert(6);
  avlTree.insert(9);

  console.log(avlTree.print());
  console.log(avlTree.printTree());

  avlTree.smallRightRotation(rotateNode);

  console.log(avlTree.print());
  console.log(avlTree.printTree());

}

/*
Test "add 20,000,000 (random)" time: 0:40.322
Test "search 2,000,000" time: 0:03.934
Test "remove 2,000,000" time: 0:04.652
Test "add 150,000 (sorted)" time: 0:37.071
Test "search 15,000" time: 0:03.742
Test "remove 15,000" time: 0:03.839
*/
// testTree('random', new BinaryTree(), shuffle(getArray(20_000_000)));
// testTree('sorted', new BinaryTree(), getArray(150_000));

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
  console.log(`Test "search ${numberWithComma(findArr.length)}" ${time(duration)}`);

  start = Date.now();
  for (let i = 0; i < findArr.length; i++) {
    tree.remove(findArr[i]);
  }
  duration = Date.now() - start;
  console.log(`Test "remove ${numberWithComma(findArr.length)}" ${time(duration)}`);
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
