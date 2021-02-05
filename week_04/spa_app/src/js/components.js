const platformLogos = {
  Playstation: "<img  src='src/images/logos/playstation.svg' alt='' class='logo mx-2' >",
  Switch: "<img  src='src/images/logos/switch.svg' alt='' class='logo mx-2' >",
  Nintendo: "<img  src='src/images/logos/nintendo.png' alt='' class='logo mx-2' >",
  Xbox: "<img  src='src/images/logos/xbox.svg' alt='' class='logo mx-2' >",
  iOS: "<img  src='src/images/logos/mobile.svg' alt='' class='logo mx-2' >",
  Android: "<img  src='src/images/logos/mobile.svg' alt='' class='logo mx-2' >",
  Linux: "<img  src='src/images/logos/linux.svg' alt='' class='logo mx-2' >",
  PC: "<img  src='src/images/logos/windows.svg' alt='' class='logo mx-2' >",
  macOS: "<img  src='src/images/logos/apple.svg' alt='' class='logo mx-2' >",
}

const platformIds = {
  Playstation: "187,18,16,15,27,19,17",
  Nintendo: "8,9,13,10,11,105,83,24",
  Xbox: "1,186,14,80",
  iOS: "3",
  Android: "21",
  Linux: "6",
  PC: "4",
  macOS: "5",
  Switch: "7",
}

const storeLogos = {
  Playstation: "<img  src='src/images/stores/playstation.svg' alt='' class='logo mx-2' >",
  Nintendo: "<img  src='src/images/stores/nintendo.png' alt='' class='logo mx-2' >",
  Xbox: "<img  src='src/images/stores/xbox.svg' alt='' class='logo mx-2' >",
  App: "<img  src='src/images/stores/applestore.svg' alt='' class='logo mx-2' >",
  Google: "<img  src='src/images/stores/googleplay.svg' alt='' class='logo mx-2' >",
  Epic: "<img  src='src/images/stores/epic.svg' alt='' class='logo mx-2' >",
  Gog: "<img  src='src/images/stores/gog.svg' alt='' class='logo mx-2' >",
  Steam: "<img  src='src/images/stores/steam.svg' alt='' class='logo mx-2' >",
  itch: "<img  src='src/images/stores/itch.svg' alt='' class='logo mx-2' >",
}


const findPlatformLogo = (platform) => {
  let logo = ''
  const platformsList = Object.keys(platformLogos)

  platformsList.forEach(platformName => {
    if (platform.toLowerCase() == "nintendo switch") {
      logo = platformLogos["Switch"]
    }else if (platform.toLowerCase().split(" ").includes(platformName.toLowerCase())) {
      logo = platformLogos[platformName]
    }
  })
  return logo
}

const findStoreLogo = (store) => {
  let logo = ''
  const storeList = Object.keys(storeLogos)

  storeList.forEach(storeName => {
    if (store.toLowerCase().split(/[ .]/).includes(storeName.toLowerCase())) {
      logo = storeLogos[storeName]
    }
  })
  return logo
}

export { platformLogos };
export { platformIds };
export { findPlatformLogo };
export { findStoreLogo };
