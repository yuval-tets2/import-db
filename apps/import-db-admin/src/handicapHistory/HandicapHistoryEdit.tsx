import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const HandicapHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Player Name" source="playerName" />
        <TextInput label="Ghin Number" source="ghinNumber" />
        <NumberInput label="Gindex" source="gindex" />
        <DateTimeInput label="Created Date" source="createdDate" />
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
