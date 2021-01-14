class Fighter extends Character {
  constructor(
    name,
    human = false,
    health_points = 12,
    damages = 4,
    manas = 40,
    status = "playing",
    special_attack,
    is_protected = false
  ) {
    super(name, human, health_points, damages, manas, special_attack);

    this.name = name;
    this.human = human;
    this.special_attack = new Attack("Dark Vision", 5, 0, 20, 2);
    this.is_protected = is_protected;
  }

  effectsAfterSpecialAttack = () => {
    console.log(
      `${this.name} recevra 2 points de dégats en moins jusqu'à la fin du tour grâce à son attaque spéciale !`
    );
    this.protection(true);
  };

  protection = (result) => {
    result ? (this.is_protected = true) : (this.is_protected = false);
  };
}
