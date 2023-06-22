import { SeasonCourse } from "../seasonCourse/SeasonCourse";
import { Team } from "../team/Team";

export type Season = {
  id: number | null;
  name: string | null;
  startDate: Date;
  endDate: Date;
  midseasonDate: Date;
  numTeams: number;
  playersPerTeam: number;
  scheduleCreated: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  seasonCourse?: Array<SeasonCourse>;
  team?: Array<Team>;
};
