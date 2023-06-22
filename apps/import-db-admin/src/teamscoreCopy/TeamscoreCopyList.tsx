import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TeamscoreCopyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TeamscoreCopies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Teamkey" source="teamkey" />
        <TextField label="Team Iid" source="teamIid" />
        <TextField label="Date Of Play" source="dateOfPlay" />
        <TextField label="Points" source="points" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
