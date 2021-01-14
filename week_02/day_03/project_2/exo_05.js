const numbers_list = [10, 4, 18, 3, -5, 9];
let numbers_duet = [];

sumEqualTo = (numbers, target) => {
  let number = numbers[0];
  let leftover = target - number;

  if (numbers.length < 1) {
    console.log(`Les duo égaux à la somme ${target} :`, numbers_duet);
    return true;
  }

  if (numbers.includes(leftover)) {
    numbers_duet.push([leftover, number]);
  }
  numbers.shift();

  sumEqualTo(numbers, target);
};

console.log(sumEqualTo(numbers_list, 13));
