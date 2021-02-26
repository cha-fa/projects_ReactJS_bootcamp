var {
  Shop,
  Item,
  Conjured,
  ReversedAging,
  Legendary,
} = require("../src/gilded_rose.js");

// Il y a 11 tests :
// Baisser de 1 item normaux
// après la date de péremption, la qualité se dégrade deux fois plus rapidement.
// Augmenter qualité aged brie et backstage pass
// Augmenter qualité aged brie et backstage pass de 3 quand on est à moins de 5 jours
// Augmenter qualité aged brie et backstage pass de 2 quand on est à moins de 10 jours
// La qualité de Backstage passes tombe a zéro après le concert
// Un nouvel objet Conjured a le préfixe Conjured
// Un object Conjured baisse sa qualité par 2
// Un object legendary ne baisse pas sa qualité après l'update du shop
// La qualité ne peut pas être inférieure à zéro
// La qualité ne peut pas être supérieure à cinquante (sauf legendary)

describe("GildedRose shop manager", function () {
  var listItems;

  beforeEach(function () {
    listItems = [];
  });

  it("Baisser de 1 la qualité et sellIn d'item normaux", function () {
    listItems.push(new Item("+5 Dexterity Vest", 10, 20));
    listItems.push(new Item("Mana Cake", 3, 6));

    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: 9, quality: 19 },
      { sellIn: 2, quality: 5 },
    ];

    gildedRose.items.forEach((testCase, idx) => {
      expect(expected[idx].quality).toBe(testCase.quality);
      expect(expected[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("après la date de péremption, la qualité se dégrade deux fois plus rapidement", function () {
    listItems.push(new Item("+5 Dexterity Vest", -3, 20));
    listItems.push(new Conjured("Magic Stick", -1, 30));

    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: -4, quality: 18 },
      { sellIn: -2, quality: 26 },
    ];

    gildedRose.items.forEach((testCase, idx) => {
      expect(expected[idx].quality).toBe(testCase.quality);
      expect(expected[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmenter la qualité de 1 pour Aged Brie et Backstage passes", function () {
    listItems.push(new ReversedAging("Aged Brie", 20, 30));
    listItems.push(
      new ReversedAging("Backstage passes to a TAFKAL80ETC concert", 20, 30)
    );
    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: 19, quality: 31 },
      { sellIn: 19, quality: 31 },
    ];
    gildedRose.items.forEach((testCase, idx) => {
      expect(expected[idx].quality).toBe(testCase.quality);
      expect(expected[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("qualité augmente par 3 quand il reste 5 jours ou moins (Aged Brie et Backstage passes)", function () {
    listItems.push(new ReversedAging("Aged Brie", 5, 30));
    listItems.push(
      new ReversedAging("Backstage passes to a TAFKAL80ETC concert", 2, 30)
    );
    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: 4, quality: 33 },
      { sellIn: 1, quality: 33 },
    ];

    gildedRose.items.forEach((testCase, idx) => {
      expect(expected[idx].quality).toBe(testCase.quality);
      expect(expected[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("qualité augmente par 2 quand il reste 10 jours ou moins (Aged Brie et Backstage passes)", function () {
    listItems.push(new ReversedAging("Aged Brie", 10, 30));
    listItems.push(
      new ReversedAging("Backstage passes to a TAFKAL80ETC concert", 8, 30)
    );
    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: 9, quality: 32 },
      { sellIn: 7, quality: 32 },
    ];

    gildedRose.items.forEach((testCase, idx) => {
      expect(expected[idx].quality).toBe(testCase.quality);
      expect(expected[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("La qualité de Backstage passes tombe a zéro après le concert", function () {
    listItems.push(new Item("+5 Dexterity Vest", -1, 20));
    listItems.push(new ReversedAging("Aged Brie", -1, 30));
    listItems.push(
      new ReversedAging("Backstage passes to a TAFKAL80ETC concert", -1, 30)
    );
    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: -2, quality: 18 },
      { sellIn: -2, quality: 33 },
      { sellIn: -2, quality: 0 },
    ];

    gildedRose.items.forEach((testCase, idx) => {
      expect(expected[idx].quality).toBe(testCase.quality);
      expect(expected[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Créer un object Conjured", function () {
    listItems.push(new Conjured("Dark Blade", 20, 30));
    listItems.push(new Conjured("Magic Stick", 20, 30));
    const gildedRose = new Shop(listItems);

    expect(gildedRose.items[0].name).toBe("Conjured Dark Blade");
    expect(gildedRose.items[1].name).toBe("Conjured Magic Stick");
  });

  it("Baisser de 1 sellin un object Conjured doit baisser de deux sa qualité", function () {
    listItems.push(new Conjured("Dark Blade", 20, 30));
    listItems.push(new Conjured("Magic Stick", 10, 22));
    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: 19, quality: 28 },
      { sellIn: 9, quality: 20 },
    ];
    gildedRose.items.forEach((testCase, idx) => {
      expect(expected[idx].quality).toBe(testCase.quality);
      expect(expected[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Un object legendary ne doit pas baisser en qualité (80) ", function () {
    listItems.push(new Legendary("Sulfuras"));

    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [{ quality: 80 }];
    gildedRose.items.forEach((testCase, idx) => {
      expect(expected[idx].quality).toBe(testCase.quality);
    });
  });

  it("La qualité ne peut pas être inférieure à zéro", function () {
    listItems.push(new Item("Mana Cake", 20, 0));
    listItems.push(new Conjured("Dark Blade", 10, 0));
    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: 19, quality: 0 },
      { sellIn: 9, quality: 0 },
    ];
    gildedRose.items.forEach((testCase, idx) => {
      expect(expected[idx].quality).toBe(testCase.quality);
      expect(expected[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("La qualité ne peut pas être supérieure à cinquante (sauf legendary)", function () {
    listItems.push(new ReversedAging("Aged Brie", 5, 50));
    listItems.push(
      new ReversedAging("Backstage passes to a TAFKAL80ETC concert", 2, 50)
    );
    listItems.push(new Legendary("Sulfuras"));
    const gildedRose = new Shop(listItems);
    gildedRose.updateQuality();

    var expected = [
      { sellIn: 4, quality: 50 },
      { sellIn: 1, quality: 50 },
      { sellIn: 0, quality: 80 },
    ];

    gildedRose.items.forEach((testCase, idx) => {
      expect(expected[idx].quality).toBe(testCase.quality);
      expect(expected[idx].sellIn).toBe(testCase.sellIn);
    });
  });
});
