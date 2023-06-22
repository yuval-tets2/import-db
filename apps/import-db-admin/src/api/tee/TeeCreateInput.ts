import { HoleCreateNestedManyWithoutTeesInput } from "./HoleCreateNestedManyWithoutTeesInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type TeeCreateInput = {
  hole?: HoleCreateNestedManyWithoutTeesInput;
  name?: string | null;
  gender: "M" | "F";
  par: number;
  rating: number;
  slope: number;
  frating: number;
  fslope: number;
  brating: number;
  bslope: number;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  course?: CourseWhereUniqueInput | null;
};
