import { BinaryTree } from './BinaryTree.js';

export class AVLTree extends BinaryTree {
  constructor() {
    super();
    this.head = null;
  }

  // move "nodeB" to old "nodeA" place. "parent" MUST be a "nodeA" parent
  replaceNode(parent, nodeA, nodeB) {
    if (parent) {
      if (parent.R === nodeA) {
        this.setR(parent, nodeB);
      } else {
        this.setL(parent, nodeB);
      }
    } else {
      this.head = nodeB;
      nodeB.parent = null;
    }
  }

  smallRightRotation(nodeZ) {
    console.log('smallRightRotation', nodeZ && nodeZ.value || 'NONE');
    const oldParent = nodeZ.parent;
    const nodeY = nodeZ.L;
    const nodeT3 = nodeZ.L.R;

    this.setL(nodeZ, nodeT3);
    this.setR(nodeY, nodeZ);
    this.replaceNode(oldParent, nodeZ, nodeY);

    return nodeZ;
  }

  // https://www.geeksforgeeks.org/avl-tree-set-1-insertion/
  smallLeftRotation(nodeZ) {
    console.log('smallLeftRotation', nodeZ && nodeZ.value || 'NONE');
    const oldParent = nodeZ.parent;
    const nodeY = nodeZ.R;
    const nodeT2 = nodeZ.R.L;

    this.setR(nodeZ, nodeT2);
    this.setL(nodeY, nodeZ);
    this.replaceNode(oldParent, nodeZ, nodeY);

    return nodeZ;
  }

  bigRightRotation(node) {
    this.smallLeftRotation(node.L);
    this.smallRightRotation(node);
    this.recountNode(node.parent.L);
  }

  bigLeftRotation(node) {
    this.smallRightRotation(node.R);
    this.smallLeftRotation(node);
    this.recountNode(node.parent.R);
  }

  setR(base, node) { // todo create as Node class method
    base.R = node;
    if (node) node.parent = base;
  }

  setL(base, node) { // todo create as Node class method
    base.L = node;
    if (node) node.parent = base;
  }

  insert(value) {
    console.log('insert', value);
    const node = {
      value,
      deep: 1,
      parent: null,
      L: null,
      R: null,
    };

    if (!this.head) {
      this.head = node;
      return node;
    }

    let target = this.head;

    while (target) {
      if (value > target.value) {
        if (!target.R) {
          this.setR(target, node);
          break;
        }
        target = target.R;
      } else if (value < target.value) {
        if (!target.L) {
          this.setL(target, node);
          break;
        }
        target = target.L;
      }
    }

    const balanceNode = this.recountNode(node.parent);
    if (balanceNode) {
      this.rebalance(balanceNode);
    }

    return node;
  }

  rebalance(node) {
    const [deepL, deepR] = this.getDeep(node);
    console.log('rebalance', node.value);

    if (deepR > deepL) {
      const [deepRL, deepRR] = this.getDeep(node.R);

      if (deepRL <= deepRR) {
        const recount = this.smallLeftRotation(node);
        this.recountNode(recount);
      } else {
        // big rotate
      }
    } else { // if (deepR < deepL)
      const [deepLL, deepLR] = this.getDeep(node.L);

      if (deepLL >= deepLR) {
        const recount = this.smallRightRotation(node);
        this.recountNode(recount);
      } else {
        // big rotate
      }
    }
  }

  getDeep(node) {
    return [this.getDeepL(node), this.getDeepR(node)];
  }

  getDeepL(node) {
    return node.L && node.L.deep || 0;
  }

  getDeepR(node) {
    return node.R && node.R.deep || 0;
  }

  recountNode(node) {
    const deepL = this.getDeepL(node);
    const deepR = this.getDeepR(node);

    const max = Math.max(deepL, deepR);
    const oldDeep = node.deep;

    node.deep = max + 1;

    const delta = Math.abs(deepL - deepR);
    if (delta > 1) {
      return node;
    }

    if (oldDeep !== node.deep && node.parent) {
      return this.recountNode(node.parent);
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