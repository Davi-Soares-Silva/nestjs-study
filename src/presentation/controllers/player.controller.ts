import { CreatePlayerDto } from '@/domain/dto/player.dto';
import { CreatePlayer } from '@/domain/usecases/create-player.interface';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('api/v1/players')
export class PlayerController {
  constructor(private readonly createPlayer: CreatePlayer) {}
  @Post()
  async handle(@Body() body: CreatePlayerDto) {
    try {
      const { email } = body;
      return {
        email: `seu email é ${email}`,
      };
    } catch (error) {
      switch (error.message) {
        default:
          return console.log(error);
      }
    }
  }
}
