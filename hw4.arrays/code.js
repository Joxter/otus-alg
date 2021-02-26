export class MatrixArray {

  constructor(arrSize = 100) {
    this.arrays = [this.newArr()];
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

  newArr(n) {
    return Array.from({length: n});
  }

  add(value, index = null) {
    if (index !== null) {
      return this.addTo(value, index);
    }
    this.length++;
    if (this.length === this.arrSize * this.arrays.length) {
      this.arrays.push(this.newArr());
    }

    const [arrIndex, innerIndex] = this.getAddress(this.length - 1);

    this.arrays[arrIndex][innerIndex] = value;
  }

  addTo(value, index) {
    if (this.length === this.arrSize * this.arrays.length) {
      this.arrays.push(this.newArr());
    }
    this.length++;
  }

  getAddress(n) {
    const arrIndex = Math.floor(n / this.arrSize);
    const innerIndex = n % this.arrSize;

    return [arrIndex, innerIndex];
  }

  remove(index = null) {
    const [arrIndex, innerIndex] = this.getAddress(index);
    const item = this.arrays[arrIndex][innerIndex];

    for (let i = arrIndex; i < this.arrays.length; i++) {
      for (let j = 0; j <= this.arrSize; j++) {
        const currentIndex = i * this.arrSize + j;

        if (currentIndex >= index && currentIndex < this.length) {
          if (j === this.arrSize) {
            this.arrays[i][j - 1] = this.arrays[i + 1][0];
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

}