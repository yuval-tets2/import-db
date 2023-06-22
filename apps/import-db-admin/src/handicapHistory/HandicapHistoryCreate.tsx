import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const HandicapHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Player Name" source="playerName" />
        <TextInput label="Ghin Number" source="ghinNumber" />
        <NumberInput label="Gindex" source="gindex" />
        <DateTimeInput label="Created Date" source="createdDate" />
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
