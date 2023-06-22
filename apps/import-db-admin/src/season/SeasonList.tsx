import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SeasonList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Seasons"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Midseason Date" source="midseasonDate" />
        <TextField label="Num Teams" source="numTeams" />
        <TextField label="Players Per Team" source="playersPerTeam" />
        <TextField label="Schedule Created" source="scheduleCreated" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
