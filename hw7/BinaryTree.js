/*
Создать простейшее двоичное дерево поиска. +3 байта.
Методы к реализации:
void insert(int x) - вставка элемента
bool search(int x) - поиск элемента
void remove(int x) - удаление элемента
*/

export class BinaryTree {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = {
      value,
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

  search(value) {
    if (!this.head) {
      return false;
    }

    let target = this.head;

    while (target) {
      if (target.value === value) {
        return true;
      } else if (value > target.value) {
        target = target.R;
      } else if (value < target.value) {
        target = target.L;
      }
    }
    return false;
  }

  _lastRight(node) {
    if (!node) return null;

    while (node.R) {
      node = node.R;
    }
    return node;
  }

  _lastLeft(node) {
    if (!node) return null;

    while (node.L) {
      node = node.L;
    }
    return node;
  }

  _isLeaf(node) {
    return !node.L && !node.R;
  }

  _isOneBranch(node) {
    return (!node.L && node.R) || (node.L && !node.R);
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
    }

    const moveToParent = (node) => {
      if (!parent) { // родителя нет только, если пытаемся удалить корень
        this.head = node;
        return;
      }
      if (parent.L === target) parent.L = node;
      if (parent.R === target) parent.R = node;
    };

    if (this._isLeaf(target)) {
      moveToParent(null);
      return;
    }

    if (this._isOneBranch(target)) {
      moveToParent(target.L || target.R);
      return;
    }

    let lastR = target.L;
    let lastRParent = target;
    while (lastR.R) {
      lastRParent = lastR;
      lastR = lastR.R;
    }

    moveToParent(lastR);
    if (lastRParent !== target) {
      // нужно, когда у нас у левого потомка (1) был хотя бы один правый потомок (2).
      // тогда родителю потомка-1 навешимаем детей потомка-2
      lastRParent.R = lastR.L;
      lastR.L = target.L;
    }
    lastR.R = target.R;
  }

  print() {
    let log = '';
    const _print = (node) => {
      if (!node) {
        return;
      }

      _print(node.L);
      log += ' ' + node.value;
      _print(node.R);
    };

    _print(this.head);
    return log;
  }

  printTree() {
    let log = [[], [], [], [], []];
    const offsets = [
      [0, 1],
      [2, 5],
      [6, 13],
      [14, 29],
      [30, 61],
    ];

    function _print(node, level) {
      if (offsets.length <= level) return;

      _print(node && node.L, level + 1);
      log[level].push(node && node.value || null);
      _print(node && node.R, level + 1);
    }

    _print(this.head, 0);

    return log
      .map((logLevel, i) => {
        let [offset, separator] = offsets[log.length - i - 1];
        offset = getSpaceString(offset);
        separator = getSpaceString(separator);

        return offset + logLevel.map(value => formatValue(value)).join(separator);
      })
      .filter(logStr => !isEmptyLogString(logStr))
      .join('\n');

    function formatValue(val) {
      return val === null ? ' - ' : String(val).padStart(3, '0');
    }

    function getSpaceString(len) {
      return ''.padStart(len, ' ');
    }

    function isEmptyLogString(logStr) {
      return (/^[ -]+$/.test(logStr));
    }
  }
}

(() => {
  const tree = new BinaryTree();
  tree.insert(10);
  tree.insert(20);
  console.log(tree.print() === ' 10 20');
  tree.remove(10);
  console.log(tree.print() === ' 20');
  tree.remove(20);
  console.log(tree.print() === '');
})();

(() => {
  const tree = new BinaryTree();
  tree.insert(10);
  tree.insert(15);
  tree.insert(5);
  console.log(tree.print() === ' 5 10 15');
  // console.log(tree.printTree());
  // console.log('-----------');
  tree.remove(10);
  console.log(tree.print() === ' 5 15');
  // console.log(tree.printTree());
  // console.log('-----------');
})();

const tree = new BinaryTree();
tree.insert(10);
tree.insert(20);
tree.insert(14);
tree.insert(5);
tree.insert(8);
tree.insert(40);
tree.insert(12);
tree.insert(44);
tree.insert(6);
tree.insert(16);
tree.insert(15);
console.log(tree.print() === ' 5 6 8 10 12 14 15 16 20 40 44');
// console.log(tree.printTree());
// console.log('--------------------------');
tree.remove(20);
console.log(tree.print() === ' 5 6 8 10 12 14 15 16 40 44');
// console.log(tree.printTree());
// console.log('--------------------------');
tree.remove(14);
console.log(tree.print() === ' 5 6 8 10 12 15 16 40 44');
tree.remove(44);
console.log(tree.print() === ' 5 6 8 10 12 15 16 40');
tree.remove(8);
console.log(tree.print() === ' 5 6 10 12 15 16 40');

console.log(tree.search(2) === false);
console.log(tree.search(5) === true);
