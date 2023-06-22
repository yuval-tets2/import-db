import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CLUB_TITLE_FIELD } from "./ClubTitle";

export const ClubShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField reference="Course" target="ClubId" label="Courses">
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <TextField label="Course Name" source="courseName" />
            <TextField label="Created At" source="createdAt" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField label="Club" source="club.id" reference="Club">
              <TextField source={CLUB_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
