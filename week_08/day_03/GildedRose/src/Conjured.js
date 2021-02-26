import Item from "./Item";

class Conjured extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.name = "Conjured " + this.name;
  }

  updateQuality() {
    const multiplicator = this.sellIn < 0 ? 2 : 1;
    this.quality <= 2
      ? (this.quality = 0)
      : (this.quality = this.quality - 2 * multiplicator);
  }
}

export default Conjured;
