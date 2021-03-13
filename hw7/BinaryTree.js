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
    let target = this.head;
    let parent = null;

    while (target) {
      if (target.value === value) {
        // todo "parent" может отсутствовать, если удаляем корень

        if (this._isLeaf(target)) {
          if (parent.L === target) parent.L = null;
          if (parent.R === target) parent.R = null;
          return;
        }

        if (this._isOneBranch(target)) {
          const one = target.L || target.R;
          if (parent.L === target) parent.L = one;
          if (parent.R === target) parent.R = one;
          return;
        }

        let newParent = target;
        let lastR = target.L;
        while (lastR.R) {
          newParent = lastR;
          lastR = lastR.R;
        }

        if (parent.L === target) parent.L = lastR;
        if (parent.R === target) parent.R = lastR;
        if (newParent !== target) {
          newParent.R = lastR.L;
          lastR.L = target.L;
        }
        lastR.R = target.R;
        return;
      }

      parent = target;
      if (value > target.value) {
        target = target.R;
      } else if (value < target.value) {
        parent = target;
        target = target.L;
      }
    }
    return;
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

const tree = new BinaryTree();

tree.insert(10);
tree.insert(20);
tree.insert(14);
// console.log(tree.print());
// console.log(tree.printTree());
// console.log('--------------');
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
// console.log(tree.printTree());

console.log(tree.search(2) === false);
console.log(tree.search(5) === true);
