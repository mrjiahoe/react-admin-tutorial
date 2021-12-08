import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

export const PostEdit = (props) => {
	return (
		<Edit title="Edit Post" {...props}>
			<SimpleForm>
				<TextInput disabled source="id" />
				<TextInput multiline source="body" />
				<DateInput label="Published" source="publishedAt" />
			</SimpleForm>
		</Edit>
	);
};
