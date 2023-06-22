import { SortOrder } from "../../util/SortOrder";

export type TeamscoreCopyOrderByInput = {
  id?: SortOrder;
  teamkey?: SortOrder;
  teamIid?: SortOrder;
  dateOfPlay?: SortOrder;
  points?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
