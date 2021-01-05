const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 0 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 10 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 99 },
];

console.log("TITLES ONLY : " + books.map((book) => " " + book.title));

let neverRented = books.filter((book) => book.rented < 1);
neverRented.length ? console.log("At least one book was never rented:", neverRented.map((book) => book.title)) : console.log("All books were rented");

let mostRented = books.reduce((previous, current) => {
  return previous.rented > current.rented ? previous : current;
});
console.log("Most rented : ", mostRented);

let leastRented = books.reduce((previous, current) => {
  return previous.rented < current.rented ? previous : current;
});
console.log("Least rented : ", leastRented);

console.log(books.filter((book) => book.id !== 133712));
