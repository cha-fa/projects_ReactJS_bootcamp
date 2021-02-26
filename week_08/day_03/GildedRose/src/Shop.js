import Legendary from "./Legendary";

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      item instanceof Legendary ? null : item.sellIn--;
      item.updateQuality();
    });
  }
}
export default Shop;
