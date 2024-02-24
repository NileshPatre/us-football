import { Controller, Get, Header } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamDetails } from './types/types';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}
  @Get('/getTeamsDetails')
  @Header('content-type', 'text/json')
  getTeamsDetails(): Promise<TeamDetails[]> {
    return this.teamsService.getTeamsDetails();
  }
}
