class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    const multiplicator = this.sellIn < 0 ? 2 : 1;
    this.quality <= 1
      ? (this.quality = 0)
      : (this.quality = this.quality - 1 * multiplicator);
  }
}

export default Item;
