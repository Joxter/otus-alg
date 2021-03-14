import { BinaryTree } from './BinaryTree';

export class AVLTree extends BinaryTree {
  constructor() {
    super();
    this.head = null;
  }

  insert(value) {
    const node = {
      value,
      deep: 1,
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
          target.R = node;
          return;
        }
        target = target.R;
      } else if (value < target.value) {
        if (!target.L) {
          target.L = node;
          return;
        }
        target = target.L;
      }
    }
  }

  remove(value) {
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