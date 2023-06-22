import { CourseCreateNestedManyWithoutClubsInput } from "./CourseCreateNestedManyWithoutClubsInput";

export type ClubCreateInput = {
  name: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  course?: CourseCreateNestedManyWithoutClubsInput;
};
