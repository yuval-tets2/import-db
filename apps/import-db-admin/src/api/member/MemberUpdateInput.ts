import { MatchscoreUpdateManyWithoutMembersInput } from "./MatchscoreUpdateManyWithoutMembersInput";
import { ScoreUpdateManyWithoutMembersInput } from "./ScoreUpdateManyWithoutMembersInput";
import { TeamUpdateManyWithoutMembersInput } from "./TeamUpdateManyWithoutMembersInput";

export type MemberUpdateInput = {
  matchscore?: MatchscoreUpdateManyWithoutMembersInput;
  lname?: string | null;
  fname?: string | null;
  email?: string | null;
  active?: string;
  tee?: "MEN" | "SENIOR" | "LADIES";
  ghin?: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  scores?: ScoreUpdateManyWithoutMembersInput;
  team?: TeamUpdateManyWithoutMembersInput;
};
