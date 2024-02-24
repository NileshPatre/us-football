import { Module } from '@nestjs/common';
import { TeamsModule } from './teams/teams.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), TeamsModule],
})
export class AppModule {}
