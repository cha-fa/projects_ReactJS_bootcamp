class Monk extends Character {
  constructor(
    name,
    human = false,
    health_points = 8,
    damages = 2,
    manas = 200,
    status = "playing",
    special_attack
  ) {
    super(name, human, health_points, damages, manas, special_attack);
    this.human = human;
    this.name = name;
    this.special_attack = new Attack("Heal", 0, 0, 25, 8);
  }

  effectsAfterSpecialAttack = () => {
    console.log(
      `${this.name} reçoit 8 points de vie grâce à son attaque spéciale !`
    );
    this.health_points += 8;
  };
}
