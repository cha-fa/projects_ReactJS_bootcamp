import { GamesIndex } from './gamesindex';
import { Game } from './game';

const routes = {
  "": GamesIndex,
  "gamesindex": GamesIndex,
  "game": Game,
  "developers": GamesIndex,
  "genres": GamesIndex,
  "tags": GamesIndex,
  "publishers": GamesIndex,
  "platforms": GamesIndex
};

export { routes };
