class Wizard extends Character {
  constructor(
    name,
    human = false,
    health_points = 10,
    damages = 2,
    manas = 200,
    status = "playing",
    special_attack
  ) {
    super(name, human, health_points, damages, manas, special_attack);
    this.human = human;
    this.name = name;
    this.special_attack = new Attack("Fireball", 7, 0, 25, 0);
  }

  effectsAfterSpecialAttack = () => {
    console.log(
      `${this.name} a une attaque spéciale un peu naze, et a seulement infligé 7 dégats !`
    );
  };
}
