class Sort {
  constructor(fileName = process.argv[2], comparisonCounter = 0) {
    this.fileName = fileName;
    this.comparisonCounter = comparisonCounter;
  }

  getDataList() {
    const fs = require("fs");
    let data_list;
    try {
      const data = fs.readFileSync(this.fileName, "utf8");
      data_list = data
      .trim()
      .split(" ")
      .filter(Number)
      .map((data) => parseInt(data));
    } catch (error) {
      console.error(error.message);
    }
    return data_list;
  };

  checkFile() {
    const fs = require("fs");

    try {
      if (fs.existsSync(this.fileName)) {
        return true
      }
    } catch(err) {
      console.error(err)
    }

  }

  bubbleSort() {
    const data_list = this.getDataList();

    for (let i = 0; i < data_list.length; i++) {
      for (let j = 0; j < data_list.length; j++) {
        this.comparisonCounter++;

        if (data_list[j] > data_list[j + 1]) {
          let higher_value = data_list[j];
          data_list[j] = data_list[j + 1];
          data_list[j + 1] = higher_value;
        }
      }
    }
    return data_list;
  };

  insertionSort() {
    const data_list = this.getDataList();

    for (let i = 1; i < data_list.length; i++) {
      let current = data_list[i];
      let j = i - 1;

      while (j >= 0 && current < data_list[j]) {
        this.comparisonCounter++;
        data_list[j + 1] = data_list[j];
        j--;
      }
      data_list[j + 1] = current;
    }
    return data_list;
  };

  selectionSort() {
    const data_list = this.getDataList();

    for (let i = 0; i < data_list.length; i++) {
      let min = i;
      for (let j = i + 1; j < data_list.length; j++) {
        this.comparisonCounter++;
        if (data_list[min] > data_list[j]) {
          min = j;
        }
      }
      if (min !== i) {
        let tmp = data_list[i];
        data_list[i] = data_list[min];
        data_list[min] = tmp;
      }
    }
    return data_list;
  };


  quickSortMethod() {
    const data_list = this.getDataList();
    let actionCounter = 0;

    function swap(data_list, leftIndex, rightIndex) {
      let temp = data_list[leftIndex];
      data_list[leftIndex] = data_list[rightIndex];
      data_list[rightIndex] = temp;
    }
    function partition(data_list, left, right) {
    let pivot = data_list[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
        while (i <= j) {
          while (data_list[i] < pivot) {
            i++;
          }
          while (data_list[j] > pivot) {
            j--;
          }
          if (i <= j) {
          swap(data_list, i, j); //sawpping two elements
          i++;
          j--;
        }
      }
      return i;
    }

    function quickSort(data_list, left, right) {
      let index;
      actionCounter++

      if (data_list.length > 1) {
        index = partition(data_list, left, right); //index returned from partition
        if (left < index - 1) {
          //more elements on the left side of the pivot
          quickSort(data_list, left, index - 1);
        }
        if (index < right) {

          //more elements on the right side of the pivot
          quickSort(data_list, index, right);
        }
      }
      return data_list;
    }
    // first call to quick sort
    const sortedArray = quickSort(data_list, 0, data_list.length - 1);
    this.comparisonCounter = actionCounter
    return sortedArray;
  };
}


const bubbleSort = new Sort()
if (bubbleSort.checkFile()) {
 bubbleSort.bubbleSort()
 console.log(`Tri à bulle : ${bubbleSort.comparisonCounter} comparaisons : ${bubbleSort.bubbleSort()}`)

 const insertionSort = new Sort()
 insertionSort.insertionSort();
 console.log(`Tri par insertion : ${insertionSort.comparisonCounter} comparaisons : ${insertionSort.insertionSort()}`)

 const selectionSort = new Sort()
 selectionSort.selectionSort();
 console.log(`Tri par sélection : ${selectionSort.comparisonCounter} comparaisons : ${selectionSort.selectionSort()}`)

 const quickSort = new Sort()
 quickSort.quickSortMethod();
 console.log(`Tri par sélection : ${quickSort.comparisonCounter} comparaisons : ${quickSort.quickSortMethod()}`)

}
else {
  console.log("le fichier n'existe pas")
}

