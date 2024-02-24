import { Injectable } from '@nestjs/common';
import * as path from 'path';
import { readFile } from 'fs';
import { TeamDetails } from './types/types';
@Injectable()
export class TeamsService {
  async getTeamsDetails(): Promise<TeamDetails[]> {
    const filePath: string = path.join(__dirname, 'teams.data.json');
    return new Promise((resolve, reject) => {
      readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          try {
            const jsonData: TeamDetails[] = JSON.parse(data);
            resolve(jsonData);
          } catch (parseError) {
            reject(parseError);
          }
        }
      });
    });
  }
}
