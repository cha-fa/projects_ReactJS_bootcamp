class Berzerker extends Character {
  constructor(
    name,
    human = false,
    health_points = 8,
    damages = 4,
    manas = 0,
    status = "playing",
    special_attack
  ) {
    super(name, human, health_points, damages, manas, special_attack);
    this.human = human;
    this.name = name;
    this.special_attack = new Attack("Rage", 1, 1, 0, 0);
  }

  effectsAfterSpecialAttack = () => {
    console.log(
      `${this.name} augmente ses dommages de 1 pour le reste de la partie, mais perd 1 points de vie avec son attaque spéciale !`
    );
    this.health_points -= 1;
    this.damages += 1;
  }
}
