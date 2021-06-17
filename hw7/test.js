import { AVLTree } from './AVLTree';

testRightRotation();
testLeftRotation();
testBigRightRotation();
testBigLeftRotation();

function testBigLeftRotation() {
  const avlTree = new AVLTree();

  try {
    avlTree.insert(20);
    avlTree.insert(15);
    avlTree.insert(25);
    avlTree.insert(30);
    avlTree.insert(23);
    avlTree.insert(24);
  } catch (err) {
    console.error(err);
  } finally {
    console.log(avlTree.print());
    console.log(avlTree.printTree());
  }
}

function testBigRightRotation() {
  const avlTree = new AVLTree();

  try {
    avlTree.insert(20);
    avlTree.insert(25);
    avlTree.insert(15);
    avlTree.insert(10);
    avlTree.insert(17);
    avlTree.insert(16);
  } catch (err) {
    console.error(err);
  } finally {
    console.log(avlTree.print());
    console.log(avlTree.printTree());
  }
}

function testLeftRotation() {
  const avlTree = new AVLTree();

  try {
    avlTree.insert(5);
    avlTree.insert(10);
    avlTree.insert(15);
    avlTree.insert(13);
    avlTree.insert(20);
    avlTree.insert(25);
    avlTree.insert(30);
  } catch (err) {
    console.error(err);
  } finally {
    console.log(avlTree.print());
    console.log(avlTree.printTree());
  }
}

function testRightRotation() {
  const avlTree = new AVLTree();

  try {
    avlTree.insert(30);
    avlTree.insert(25);
    avlTree.insert(20);
    avlTree.insert(22);
    avlTree.insert(15);
    avlTree.insert(10);
    avlTree.insert(5);

  } catch (err) {
    console.error(err);
  } finally {
    console.log(avlTree.print());
    console.log(avlTree.printTree());
  }
}