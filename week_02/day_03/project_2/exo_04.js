const buildings_list = [3, 2, 8, 3, 6, 1]; //should return 3

getSunset = (buildings) => {
  let buildingsWithSunset = [];
  let rightArray = [];

  for (let i = buildings.length - 1; i >= 0; i--) {
    rightArray.push(buildings[i]); //keep track of buildings on the right of i

    if (
      rightArray.filter((buildingRight) => buildings[i] < buildingRight)
        .length == 0
    ) {
      buildingsWithSunset.push(buildings[i]);
    }
  }
  console.log(`There are ${buildingsWithSunset.length} buildings that have apt with a sunset view : ${buildingsWithSunset}`);
  return buildingsWithSunset.length;
};

getSunset(buildings_list);
