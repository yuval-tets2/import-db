import { SortOrder } from "../../util/SortOrder";

export type TeeOrderByInput = {
  id?: SortOrder;
  name?: SortOrder;
  gender?: SortOrder;
  par?: SortOrder;
  rating?: SortOrder;
  slope?: SortOrder;
  frating?: SortOrder;
  fslope?: SortOrder;
  brating?: SortOrder;
  bslope?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  courseId?: SortOrder;
};
