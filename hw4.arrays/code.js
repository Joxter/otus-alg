export class MatrixArray {
  constructor(arrSize = 100) {
    this.arrays = [this._newArr()];
    this.length = 0;
    this.arrSize = arrSize;
  }

  log() {
    console.log('length:', this.length);
    this.arrays.forEach((arr, i) => {
      const viewArr = arr.join(', ');
      console.log(i, `[${viewArr}]`);
    });
  }

  add(value, index = null) {
    if (index !== null) {
      return this._addTo(value, index);
    }
    this.length++;
    if (this.length === this.arrSize * this.arrays.length) {
      this.arrays.push(this._newArr());
    }

    const [arrIndex, innerIndex] = this._getAddress(this.length - 1);

    this.arrays[arrIndex][innerIndex] = value;
  }

  remove(index = null) {
    const [arrIndex, innerIndex] = this._getAddress(index);
    const item = this.arrays[arrIndex][innerIndex];

    for (let i = arrIndex; i < this.arrays.length; i++) {
      for (let j = 0; j <= this.arrSize; j++) {
        const currentIndex = i * this.arrSize + j;

        if (currentIndex >= index && currentIndex < this.length) {
          if (j === this.arrSize) {
            this.arrays[i][this.arrSize - 1] = this.arrays[i + 1][0];
          } else {
            this.arrays[i][j] = this.arrays[i][j + 1];
          }
        }
      }
    }

    this.length--;

    if (Math.ceil(this.length / this.arrSize) < this.arrays.length) {
      this.arrays.pop();
    }

    return item;
  }

  _addTo(value, index) {
    this.length++;
    if (this.length === this.arrSize * this.arrays.length) {
      this.arrays.push(this._newArr());
    }

    const [arrIndex, innerIndex] = this._getAddress(index);

    for (let i = this.arrays.length - 1; i >= arrIndex; i--) {
      for (let j = this.arrSize - 1; j >= 0; j--) {
        const currentIndex = i * this.arrSize + j;

        if (currentIndex > index && currentIndex <= this.length) {
          if (j === 0) {
            this.arrays[i][0] = this.arrays[i - 1][this.arrSize - 1];
          } else {
            this.arrays[i][j] = this.arrays[i][j - 1];
          }
        }
      }
    }

    this.arrays[arrIndex][innerIndex] = value;
  }

  _getAddress(n) {
    const arrIndex = Math.floor(n / this.arrSize);
    const innerIndex = n % this.arrSize;

    return [arrIndex, innerIndex];
  }

  _newArr() {
    return Array.from({length: this.arrSize});
  }
}

export class PureArray {
  constructor() {
    this.array = [];
    this.length = 0;
  }

  log() {
    console.log(this.array);
  }

  add(value, index = null) {
    this.length++;

    if (index !== null) {
      this.array.splice(index, 0, value);
    } else {
      this.array.push(value);
    }
  }

  remove(index) {
    this.length--;

    const item = this.array[index];
    this.array.splice(index, 1);

    return item;
  }
}