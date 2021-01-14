const numbers = [10, 4, 18, 3, -5, 9];

sumEqualTo = (numbers, k) => {
  let numbers_duet = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == k && numbers[i] != numbers[j]) {
        numbers_duet.push([numbers[i], numbers[j]]);
      }
    }
  }
  numbers_duet.forEach((num) => {
    console.log(`La somme de ${num[0]} et ${num[1]} est égale à ${k}`);
  });

  return numbers_duet.length > 0 ? true : false;
};

console.log(sumEqualTo(numbers, 13));
