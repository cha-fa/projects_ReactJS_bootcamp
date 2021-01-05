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
  { title: "La lune seule le sait", id: 63541, rented: 0 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 99 },
];

console.log("LES TITRES" + books.map((book) => " " + book.title));

for (let i = 0; i < books.length; i++) {
  if (books[i].rented < 1) {
    console.log("Le livre" + books[i].title + "n'a jamais été emprunté");
  }
}

let mostRented = books[0];
for (let i = 0; i < books.length; i++) {
  if (books[i].rented > mostRented.rented) {
    mostRented = books[i];
  }
}
console.log("Le livre le plus emprunté est " + mostRented.title);

let leastRented = books[0];
for (let i = 0; i < books.length; i++) {
  if (books[i].rented < leastRented.rented) {
    leastRented = books[i];
  }
}
console.log("Le livre le moins emprunté est " + leastRented.title);

console.log(books.filter((book) => book.id !== 133712));
