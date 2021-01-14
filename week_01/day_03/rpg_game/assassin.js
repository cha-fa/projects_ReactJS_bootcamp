class Assassin extends Character {
  constructor(
    name,
    human = false,
    health_points = 6,
    damages = 6,
    manas = 20,
    status = "playing",
    is_protected = false,
    turn_protected,
    special_attack
  ) {
    super(name, human, health_points, damages, manas, special_attack);

    this.name = name;
    this.human;
    this.health_points = health_points;
    this.damages = damages;
    this.manas = manas;
    this.is_protected = is_protected;
    this.turn_protected = turn_protected;
    this.special_attack = new Attack("Shadow Hit", 7, 7, 20, 0); //lui donnant +1 pour ses attaques pour tout le reste de la partie mais lui enlevant 1 hp
  }

  effectsAfterSpecialAttack = (isKilled, turn_protected) => {
    if (!isKilled) {
      console.log(
        `La victime n'a pas été tuée, ${this.name} perd donc 7 points de vie`
      );
      this.health_points -= 7;
    }
    if (this.health_points > 0) {
      console.log(
        `${this.name} est ${this.constructor.name} et sera protégé au prochain tour et ne subira pas de dégats`
      );
      this.turn_protected = turn_protected;
    }
    else {
      this.isKilled();
      console.log("=======================")
      console.log(`${this.name} s'est tué avec sa propre attaque...`)
      console.log("=======================")
    }
  }
}
