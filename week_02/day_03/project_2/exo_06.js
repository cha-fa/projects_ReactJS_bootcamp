const buildings_list = [3, 2, 8, 3, 6, 1]; //should return 3
let buildingsWithSunset = [];
let rightArray = [];

getSunset = (buildings) => {
  let building = buildings[buildings.length - 1]
  rightArray.push(building)

  if (buildings.length < 1) {
    console.log(`There are ${buildingsWithSunset.length} buildings that have apt with a sunset view : ${buildingsWithSunset}`);
    return true
  }

  if (rightArray.filter((buildingRight) => building < buildingRight).length == 0) {
    buildingsWithSunset.push(building);
  }
  buildings.pop();

  getSunset(buildings)
};

getSunset(buildings_list);
