import { CourseUpdateManyWithoutClubsInput } from "./CourseUpdateManyWithoutClubsInput";

export type ClubUpdateInput = {
  name?: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  course?: CourseUpdateManyWithoutClubsInput;
};
