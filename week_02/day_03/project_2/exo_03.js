const numbers = [10, 4, 18, 3, -5, 9];

sumEqualTo = (numbers, target) => {
  let numbers_duet = [];

  for (let i = 0; i < numbers.length; i++) {
    let leftover = target - numbers[i];
    if (numbers.includes(leftover)) {
      numbers_duet.push([numbers[i], leftover]);
    }
  }

  numbers_duet.forEach((num) => {
    console.log(`La somme de ${num[0]} et ${num[1]} est égale à ${target}`);
  });

  return numbers_duet.length > 0 ? true : false;
};



console.log(sumEqualTo(numbers, 13));
