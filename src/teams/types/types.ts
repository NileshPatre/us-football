type Score = {
  label: string;
  value: string;
  score: string | number;
};
type LastFiveGames = {
  gameNo: number;
  stats: string | number;
};
type PlayerStats = {
  player: string;
  score: Score[];
  lastFiveGames: LastFiveGames[];
};
export type TeamDetails = {
  teamName: string;
  totalScore: number;
  overallScore: Score[];
  passing: PlayerStats[];
  rushing: PlayerStats[];
  receiving: PlayerStats[];
  touchDowns: PlayerStats[];
};
