class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    let max = this.items.reduce(function (a, b) {
      return Math.max(a, b);
    });

    return max;
  }

  min() {
    let min = this.items.reduce(function (a, b) {
      return Math.min(a, b);
    });

    return min;
  }

  sum() {
    if(this.length === 0) {
      return 0;
    }
    let sum = this.items.reduce((a, b) => {
      return a + b;
    });

    return sum;
  }

  avg() { 
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }

    let sum = this.sum();
    let avg = sum/this.length;

    return avg;
  }
}

module.exports = SortedList;
