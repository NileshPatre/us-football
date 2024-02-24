import { TeamsService } from './teams.service';
import { TeamDetails } from './types/types';
export declare class TeamsController {
    private teamsService;
    constructor(teamsService: TeamsService);
    getTeamsDetails(): Promise<TeamDetails[]>;
}
