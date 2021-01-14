class Turn {
  constructor(game, players_alive = new Array()) {
    this.game = game;
    this.players_alive = this.game.players;
  }

  startTurn = () => {
    alert("Un nouveau tour commence ! \n Si tu veux voir les scores c'est : 'game.showStats()' en console !")
    this.game.newTurn();
    const turn_number = 10 - this.game.turn_left;
    console.clear()
    this.game.turn_left == 0
      ? console.log("C'EST LE DERNIER TOUR")
      : console.log(`LE TOUR n°${turn_number} COMMENCE`);

    this.players_alive
      .filter((player) => player instanceof Fighter)
      .map((fighter) => fighter.protection(false));

    this.checkIfAssassinIsProtected(turn_number);

    const shuffledPlayers = this.shufflePlayers(this.players_alive);

    shuffledPlayers.forEach((player) => {
      if (player.health_points > 0) {
        console.log(
          `********* C'est au tour de ${player.name} de jouer *********`
        );
        this.updateAlivePlayers();
        player.human ? this.suggestStats() : null
        this.launchStrategy(player);
      }
    });

    this.updateAlivePlayers();
    this.endTurn();
  }

  suggestStats = () => {
    const isOk = prompt(
      `Tape 1 pour voir les scores (en console), et 2 pour n*quer des mamans`
    );
    if (isOk == 1) {
      this.game.showStats();
    } else if (isOk != 1 && isOk != 2) {
      console.log("Pas compris, voilà quand mêmes les scores ocazou");
      this.game.showStats();
    }
  }

  endTurn = () => {
    console.log(`Le tour ${10 - this.game.turn_left} est terminé`);

    this.game.turn_left == 0 || this.players_alive.length < 2
      ? this.game.endGame()
      : this.game.nextTurn();
  }

  updateAlivePlayers = () => {
    this.players_alive = this.players_alive.filter(
      (player) => player.health_points > 0
    );
    this.game.players.map((player) =>
      player.health_points < 1 ? player.isKilled() : null
    );
    this.players_alive.length < 2 ? this.game.endGame() : null;
  }

  checkIfAssassinIsProtected = (turn_number) => {
    this.players_alive
      .filter((player) => player instanceof Assassin)
      .filter((assassin) => assassin.turn_protected == turn_number)
      .map((assassin) => (assassin.is_protected = true));
  }

  launchStrategy = (player) => {
    const attacks = ["classicAttack", "specialAttack"];
    const victims_available = this.players_alive.filter(
      (alive_player) => alive_player != player
    );
    let selected_attack;
    let victim;

    if (player.human) {
      const inputVictim = prompt(
        `A toi de jouer ! \n Tape le chiffre de ta victime : \n ${victims_available.map(
          (victim) =>
            `N° ${victims_available.indexOf(victim) + 1} pour ${victim.name} \n`
        )}\n `
      );
      if (inputVictim > 0 && inputVictim < victims_available.length + 1) {
        victim = victims_available[inputVictim - 1];
      } else {
        const secondVictim = prompt(
          `Ta saisie n'était pas correcte \n Si tu te trompes de nouveau, la première sera choisie par défault \n Tape le chiffre de ta victime : \n ${victims_available.map(
            (victim) =>
              `N° ${victims_available.indexOf(victim) + 1} pour ${
                victim.name
              } \n`
          )}\n `
        );

        inputVictim > 0 && inputVictim < victims_available.length
          ? (victim = victims_available[secondVictim - 1])
          : (victim = victims_available[0]);
      }

      const inputAttack = prompt(
        "Avec quelle attaque ? \n Tape 1 pour l'attaque classique \n Tape 2 pour l'attaque spéciale"
      );
      if (inputAttack == 1 || inputAttack == 2) {
        selected_attack = attacks[inputAttack - 1];
      } else {
        console.log(
          "Ta saisie n'était pas correct, l'attaque classique a été lancée par défault (Concentre toi, ta vie est en jeu! )"
        );
        selected_attack = attacks[0];
      }
    } else {
      selected_attack = attacks[Math.floor(Math.random() * attacks.length)];
      victim =
        victims_available[Math.floor(Math.random() * victims_available.length)];
    }
    console.log(`===== ${player.name} (${player.constructor.name}) ATTAQUE ${victim.name} (${victim.constructor.name}) ===== `)
    player.attack(victim, selected_attack, 10 - this.game.turn_left);
  }

  shufflePlayers = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
