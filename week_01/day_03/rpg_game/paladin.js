class Paladin extends Character {
  constructor(
    name,
    human = false,
    health_points = 16,
    damages = 3,
    manas = 160,
    status = "playing",
    special_attack
  ) {
    super(name, human, health_points, damages, manas, special_attack);

    this.name = name;
    this.human = human;
    this.special_attack = new Attack("Healing Lighting", 4, 0, 40, 5);
  }

  effectsAfterSpecialAttack = () => {
    console.log(
      `${this.name} reçoit 5 points de vie grâce à son attaque spéciale !`
    );
    this.health_points += 5;
  }
}
