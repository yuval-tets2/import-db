import { HoleUpdateManyWithoutTeesInput } from "./HoleUpdateManyWithoutTeesInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type TeeUpdateInput = {
  hole?: HoleUpdateManyWithoutTeesInput;
  name?: string | null;
  gender?: "M" | "F";
  par?: number;
  rating?: number;
  slope?: number;
  frating?: number;
  fslope?: number;
  brating?: number;
  bslope?: number;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  course?: CourseWhereUniqueInput | null;
};
