import { Hole } from "../hole/Hole";
import { Course } from "../course/Course";

export type Tee = {
  hole?: Array<Hole>;
  id: number | null;
  name: string | null;
  gender?: "M" | "F";
  par: number;
  rating: number;
  slope: number;
  frating: number;
  fslope: number;
  brating: number;
  bslope: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  course?: Course | null;
};
