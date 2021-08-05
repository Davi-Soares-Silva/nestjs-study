import { Module } from '@nestjs/common';
import { PlayerController } from 'src/presentation/controllers/player.controller';

@Module({
  controllers: [PlayerController],
})
export class PlayerModule {}
