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

  insert(value) { // todo обработать добавление элемента который уже есть
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

  remove(value) { // todo прото не сделано
    let target = this.head;
    let parent = null;

    while (target) {
      if (target.value === value) {
        if (target === parent.L) { // todo "parent" может отсутствовать, если удаляем корень
          parent.L = target;
        } else {

        }
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
    console.log(log);
  }
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(20);
tree.insert(14);
tree.print();
tree.insert(5);
tree.insert(40);
tree.print();

console.log(tree.search(2));
console.log(tree.search(10));
console.log(tree.search(40));
