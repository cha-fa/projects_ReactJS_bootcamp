class Game {
  constructor(turn_left, players = new Array(), turns = new Array()) {
    this.turn_left = 10;
    this.players = players;
    this.turns = turns;
  }

  initializePlayers = () => {
    const human_player = document.getElementById("character").value
    const human_name = document.getElementById("name").value

    switch (human_player) {
      case 'no_character':
        this.players.push(
          new Fighter("Grace"),
          new Paladin("Ulder"),
          new Monk("Moana"),
          new Berzerker("Draven"),
          new Assassin("Carl"),
          new Wizard("Harry")
        );
        break;
      case 'all_character':
        this.players.push(
          new Fighter(`${human_name} (Fighter)`, true),
          new Paladin(`${human_name} (Paladin)`, true),
          new Monk(`${human_name} (Monk)`, true),
          new Berzerker(`${human_name} (Berzerker)`, true),
          new Assassin(`${human_name} (Assassin)`, true),
          new Wizard(`${human_name} (wizard)`, true)
        );
        break;
      case 'fighter':
        this.players.push(
          new Fighter(human_name, true),
          new Paladin("Ulder"),
          new Monk("Moana"),
          new Berzerker("Draven"),
          new Assassin("Carl"),
          new Wizard("Harry")
        );
        break;
      case 'paladin':
        this.players.push(
          new Fighter("Grace"),
          new Paladin(human_name, true),
          new Monk("Moana"),
          new Berzerker("Draven"),
          new Assassin("Carl"),
          new Wizard("Harry")
        );
        break;
      case 'monk':
        this.players.push(
          new Fighter("Grace"),
          new Paladin("Ulder"),
          new Monk(human_name, true),
          new Berzerker("Draven"),
          new Assassin("Carl"),
          new Wizard("Harry")
        );
        break;
      case 'berzerker':
        this.players.push(
          new Fighter("Grace"),
          new Paladin("Ulder"),
          new Monk("Moana"),
          new Berzerker(human_name, true),
          new Assassin("Carl"),
          new Wizard("Harry")
        );
        break;
      case 'assassin':
        this.players.push(
          new Fighter("Grace"),
          new Paladin("Ulder"),
          new Monk("Moana"),
          new Berzerker("Draven"),
          new Assassin(human_name, true),
          new Wizard("Harry")
        );
        break;
      case 'wizard':
        this.players.push(
          new Fighter("Grace"),
          new Paladin("Ulder"),
          new Monk("Moana"),
          new Berzerker("Draven"),
          new Assassin("Carl"),
          new Wizard(human_name, true)
        );
        break;
    }
    console.log("============================");
    this.players.forEach(player => {
      console.log(`${player.name} est un.e ${player.constructor.name} et est ready !`)
    })
    console.log("============================");
  }

  startGame = () => {
    this.initializePlayers();
    this.turns.push(new Turn(this));
    this.turns[0].startTurn();
  }

  newTurn = () => {
    this.turn_left -= 1;
    this.turn_left < 0 ? this.endGame() : null;
  }

  nextTurn = () => {
    this.turns.push(new Turn(this));
    this.turns[this.turns.length - 1].startTurn();
  }

  endGame = () => {
    this.showStats()
    console.log("LE JEU EST TERMINE");

    const players_alive = this.players.filter(
      (player) => player.health_points > 0
    );

    if (players_alive.length == 0) {
      console.log("Il n'y a eu aucun survivant !");
    } else if (players_alive.length == 1) {
      console.log(`Bravo ${players_alive[0].name}, tu es le seul survivant`);
    } else {
      console.log(
        `Bravo aux ${players_alive.length} survivants : ${players_alive.map(
          (player) => player.name
        )}`
      );
    }

    this.players = [];
    this.turns = [];

  }

  showStats = () => {
    const stats = this.players.map(function(player) {
      return {
        name: player.name,
        status: player.status,
        type: player.constructor.name,
        health_points: player.health_points,
        human: player.human,
        damages: player.damages,
        specialAttack: player.special_attack.name
      }
    })

    console.log("===========================")
    console.log(`Les stats au tour ${10 - this.turn_left}`)
    console.table(stats);
    console.log("===========================")
  }


}
