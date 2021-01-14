const buildings_list = [3, 2, 8, 3, 6, 1]; //should return 3

getSunset = (buildings) => {
  let buildingsWithSunset = [];
  let rightArray = [];

  for (let i = buildings.length - 1; i >= 0; i--) { // Passing on all element from the right to the left
    rightArray.push(buildings[i]); //keep track of buildings on the right of i
    let tallerThanI = [];

    for (let j = 0; j < rightArray.length; j++) {
      if (rightArray[j] > buildings[i]) {
        tallerThanI.push(rightArray[j]);
      }
    }

    if (tallerThanI.length === 0) {
      buildingsWithSunset.push(buildings[i]);
    }
  }

  console.log(
    `There are ${buildingsWithSunset.length} buildings that have apt with a sunset view : ${buildingsWithSunset}`
  );
  return buildingsWithSunset.length;
};

getSunset(buildings_list);
