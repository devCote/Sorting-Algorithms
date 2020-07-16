export class Sorter {
  input = {
    result: [0],
  };

  bubleSort = (input: number[]) => {
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length - i - 1; j++) {
        if (input[j] > input[j + 1]) {
          const swap = input[j];
          input[j] = input[j + 1];
          input[j + 1] = swap;
        }
      }
    }
    this.input.result = input;
  };

  selectionSort = (input: number[]) => {
    let minIdx,
      temp,
      len = input.length;
    for (let i = 0; i < len; i++) {
      minIdx = i;
      for (let j = i + 1; j < len; j++) {
        if (input[j] < input[minIdx]) {
          minIdx = j;
        }
      }
      temp = input[i];
      input[i] = input[minIdx];
      input[minIdx] = temp;
    }
    this.input.result = input;
  };

  insertionSort = (input: number[]) => {
    let length = input.length;
    for (let i = 1; i < length; i++) {
      let key = input[i];
      let j = i - 1;
      while (j >= 0 && input[j] > key) {
        input[j + 1] = input[j];
        j = j - 1;
      }
      input[j + 1] = key;
    }
    this.input.result = input;
  };

  cycleSort = (input: number[]) => {
    for (let cycleStart = 0; cycleStart < input.length - 1; cycleStart++) {
      let item = input[cycleStart];

      let pos = cycleStart;
      for (let i = cycleStart + 1; i < input.length; i++) {
        if (input[i] < item) pos += 1;
      }
      if (pos == cycleStart) continue;

      while (item == input[pos]) {
        pos++;
      }
      const swap = input[pos];
      input[pos] = item;
      item = swap;
      console.log('write');

      while (pos != cycleStart) {
        pos = cycleStart;
        for (let i = cycleStart + 1; i < input.length; i++) {
          if (input[i] < item) pos += 1;
        }
        while (item == input[pos]) {
          pos += 1;
        }
        const swap = input[pos];
        input[pos] = item;
        item = swap;
      }
    }
    this.input.result = input;
  };
}
