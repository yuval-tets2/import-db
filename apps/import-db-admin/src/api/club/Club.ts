import { Course } from "../course/Course";

export type Club = {
  id: number | null;
  name: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  course?: Array<Course>;
};
