import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SeasonCourseTitle } from "../seasonCourse/SeasonCourseTitle";
import { TeamTitle } from "../team/TeamTitle";

export const SeasonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <DateTimeInput label="Start Date" source="startDate" />
        <DateTimeInput label="End Date" source="endDate" />
        <DateTimeInput label="Midseason Date" source="midseasonDate" />
        <NumberInput step={1} label="Num Teams" source="numTeams" />
        <NumberInput
          step={1}
          label="Players Per Team"
          source="playersPerTeam"
        />
        <NumberInput
          step={1}
          label="Schedule Created"
          source="scheduleCreated"
        />
        <ReferenceArrayInput
          source="seasonCourse"
          reference="SeasonCourse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SeasonCourseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="team"
          reference="Team"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeamTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
