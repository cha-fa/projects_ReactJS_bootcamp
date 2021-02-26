import Item from "./Item";

class Legendary extends Item {
  constructor(name, sellIn = 0, quality = 80) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    return;
  }
}

export default Legendary;

// "Sulfuras", étant un objet légendaire, n'a pas de date de péremption et ne perd jamais en qualité (quality)
