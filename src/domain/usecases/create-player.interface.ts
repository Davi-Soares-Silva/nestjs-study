import { CreatePlayerDto } from '../dto/player.dto';

export interface CreatePlayer {
  create: (params: CreatePlayer.Params) => CreatePlayer.Result;
}

export namespace CreatePlayer {
  export type Params = CreatePlayerDto;

  export type Result = Promise<any>;
}
