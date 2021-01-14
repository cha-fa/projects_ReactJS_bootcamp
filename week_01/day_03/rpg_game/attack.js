class Attack {
  constructor(
    name = "classic",
    inflicted_damages = 0,
    received_damages = 0,
    cost = 0,
    healing_points = 0
  ) {
    this.name = name;
    this.inflicted_damages = inflicted_damages;
    this.received_damages = received_damages;
    this.cost = cost;
    this.healing_points = healing_points;
  }
}
