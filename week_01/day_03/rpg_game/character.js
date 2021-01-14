class Character {
  constructor(
    name,
    human = false,
    health_points,
    damages,
    manas,
    status = "playing",
    special_attack
    ) {
    this.name = name;
    this.human = human;
    this.health_points = health_points;
    this.damages = damages;
    this.manas = manas;
    this.status = status;
    this.special_attack = special_attack;
  }

  takeDamage = (damages) => {
    if (this instanceof Fighter && this.is_protected) {
      console.log(`${this.name} est protégé et subira 2 dommages de moins`);
      damages = damages - 2;
      damages = Math.max(0, damages);
    } else if (this instanceof Assassin && this.is_protected) {
      console.log(
        `${this.name} est protégé pour ce tour et ne subit pas de dommages`
        );
      damages = 0;
    }

    this.health_points -= damages;

    console.log(`[[[${this.name} a subi ${damages} dommages]]]`);
  };

  isKilled = () => {
    if (this.health_points < 1) {
      this.status = "loser";
      return true;
    }
  };

  enoughManas = () => {
    return this.special_attack.cost > this.manas ? false : true;
  };

  launchSpecialAttack = (victim, turn_number) => {
    this.manas -= this.special_attack.cost;
    console.log(
      `L'attaque spéciale ${this.special_attack.name} coûte ${this.special_attack.cost} manas à ${this.name} `
      );

    victim.takeDamage(this.special_attack.inflicted_damages);

    if (victim.isKilled()) {
      console.log("===========================================");
      console.log(`||${victim.name} A ÉTÉ TUÉ.E PAR ${this.name}, bye loser !||`);
      console.log("===========================================");
      alert("T'as vu ce qu'il vient de se passer ??")
      this.manas += 20

    } else {
      console.log(
        `[[[${victim.name} a survécu, et a encore ${victim.health_points} points de vie.]]]`
        );
    }

    this instanceof Assassin
    ? this.effectsAfterSpecialAttack(victim.isKilled(), turn_number)
    : this.effectsAfterSpecialAttack();
  };

  launchClassicAttack = (victim) => {
    console.log(
      `${this.name} a choisi l'attaque classique pour attaquer ${victim.name}`
      );
    victim.takeDamage(this.damages);
    if (victim.isKilled()) {
      console.log("===========================================");
      console.log(`||${victim.name} A ÉTÉ TUÉ.E PAR ${this.name}, bye loser !||`);
      console.log("===========================================");
      alert("Et un de moins !")
      this.manas += 20
    }
  };

  attack = (victim, attack, turn_number) => {
    if (attack == "specialAttack") {
      if (this.enoughManas()) {
        this.launchSpecialAttack(victim, turn_number);
      } else {
        console.log(
          `${this.name} a choisi l'attaque spéciale, mais n'a pas assez de manas :(. Ce  sera donc une attaque classique !`
          );
        this.launchClassicAttack(victim);
      }
    } else {
      this.launchClassicAttack(victim);
    }
  }
}
