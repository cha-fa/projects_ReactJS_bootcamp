class unsortedList {
  constructor(fileName = process.argv[2], comparisonCounter = 0) {
    this.fileName = fileName;
    this.comparisonCounter = comparisonCounter;
  }

  getUnsortedArray() {
    const fs = require("fs");
    let unsortedArray;
    try {
      const data = fs.readFileSync(this.fileName, "utf8");
      unsortedArray = data
        .trim()
        .split(" ")
        .filter(Number)
        .map((data) => parseInt(data));
    } catch (error) {
      console.error(error.message);
    }
    return unsortedArray;
  }

  fileExists() {
    const fs = require("fs");

    try {
      if (fs.existsSync(this.fileName)) {
        return true;
      }
    } catch (err) {
      console.error(err);
    }
  }

  reinitializeCounter() {
    this.comparisonCounter = 0;
  }

  merge(left, right) {
    const resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    this.comparisonCounter++;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
  }

  mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    const middle = Math.floor(unsortedArray.length / 2);

    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  oddEvenSort(unsortedArray) {
    let isSorted = false;
    while (!isSorted) {
      isSorted = true;

      for (let i = 1; i < unsortedArray.length - 1; i += 2) {
        if (unsortedArray[i] > unsortedArray[i + 1]) {
          let higher_value = unsortedArray[i];
          unsortedArray[i] = unsortedArray[i + 1];
          unsortedArray[i + 1] = higher_value;
          isSorted = false;
        }
      }

      for (let i = 0; i < unsortedArray.length - 1; i += 2) {
        this.comparisonCounter++;
        if (unsortedArray[i] > unsortedArray[i + 1]) {
          let higher_value = unsortedArray[i];
          unsortedArray[i] = unsortedArray[i + 1];
          unsortedArray[i + 1] = higher_value;
          isSorted = false;
        }
      }
    }
    return unsortedArray;
  }

  combSort(unsortedArray) {
    let interval = Math.floor(unsortedArray.length / 1.3);

    while (interval > 0) {
      for (let i = 0; i + interval < unsortedArray.length; i++) {
        this.comparisonCounter++;
        if (unsortedArray[i] > unsortedArray[i + interval]) {
          let lowest = unsortedArray[i + interval];
          unsortedArray[i + interval] = unsortedArray[i];
          unsortedArray[i] = lowest;
        }
      }
      interval = Math.floor(interval / 1.3);
    }
    return unsortedArray;
  }
}

const list = new unsortedList();

if (list.fileExists()) {
  list.reinitializeCounter();
  const array_1 = list.mergeSort(list.getUnsortedArray())
  console.log(`Tri par fusion : ${list.comparisonCounter} comparaisons : ${array_1}`)

  list.reinitializeCounter();
  const array_2 = list.oddEvenSort(list.getUnsortedArray())
  console.log(`Tri par pair impair : ${list.comparisonCounter} comparaisons : ${array_2}`)

  list.reinitializeCounter();
  const array_3 = list.combSort(list.getUnsortedArray())
  console.log(`Tri à peigne : ${list.comparisonCounter} comparaisons : ${array_3}`)

} else {
  console.log("File doesn't exist, please check your spelling :)");
}
