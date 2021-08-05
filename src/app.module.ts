import { Module } from '@nestjs/common';
import { PlayerModule } from './main/modules';

@Module({
  imports: [PlayerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
