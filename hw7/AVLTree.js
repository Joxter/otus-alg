import { BinaryTree } from './BinaryTree.js';

export class AVLTree extends BinaryTree {
  constructor() {
    super();
    this.head = null;
  }

  // rebalance(Tree t)
  // smallLeftRotation(Tree t), smallRightRotation(Tree t) - малое левое/правое вращение
  // bigLeftRotation(Tree t), bigRightRotation(Tree t)

  smallRightRotation(node) {
    const par8 = node.parent;
    const C = node.R;

    this.replaceNode(par8, node);
    this.setL(par8, C);
    this.setR(node, par8);
  }

  smallLeftRotation(node) {
    const par8 = node.parent;
    const C = node.L;

    this.replaceNode(par8, node);
    this.setR(par8, C);
    this.setL(node, par8);
  }

  replaceNode(node, newNode) {
    if (!node.parent) {
      this.head = newNode;
      return;
    }

    if (node.parent.L === node) {
      node.parent.L = newNode;
    } else {
      node.parent.R = newNode;
    }
    newNode.parent = node;
    node.parent = null;
  }

  setR(base, node) { // todo create as Node class method
    base.R = node;
    node.parent = base;
  }

  setL(base, node) { // todo create as Node class method
    base.L = node;
    node.parent = base;
  }

  insert(value) {
    const node = {
      value,
      deep: 1,
      parent: null,
      L: null,
      R: null,
    };

    if (!this.head) {
      this.head = node;
      return;
    }

    let target = this.head;

    while (target) {
      if (value > target.value) {
        if (!target.R) {
          this.setR(target, node);
          return node;
        }
        target = target.R;
      } else if (value < target.value) {
        if (!target.L) {
          this.setL(target, node);
          return node;
        }
        target = target.L;
      }
    }
  }

  remove(value) { // todo implement
    if (!this.head) return;

    let target = this.head;
    let parent = null;

    // находим узел который нужно удалить и его родителя
    while (target.value !== value) {
      parent = target;
      if (value > target.value) {
        target = target.R;
      } else if (value < target.value) {
        target = target.L;
      }
      if (!target) {
        console.log(`There is no ${value} in the tree`);
        return;
      }
    }

    const replaceTarget = (node) => {
      if (!parent) { // родителя нет только, если пытаемся удалить корень
        this.head = node;
        return;
      }
      if (parent.L === target) parent.L = node;
      if (parent.R === target) parent.R = node;
    };

    if (this._isLeaf(target)) {
      replaceTarget(null);
      return;
    }

    if (this._isOneBranch(target)) {
      replaceTarget(target.L || target.R);
      return;
    }

    let lastR = target.L;
    let lastRParent = target;
    while (lastR.R) {
      lastRParent = lastR;
      lastR = lastR.R;
    }

    replaceTarget(lastR);
    if (lastRParent !== target) {
      // нужно, когда у нас у левого потомка (1) был хотя бы один правый потомок (2).
      // тогда родителю потомка-1 навешимаем детей потомка-2
      lastRParent.R = lastR.L;
      lastR.L = target.L;
    }
    lastR.R = target.R;
  }
}