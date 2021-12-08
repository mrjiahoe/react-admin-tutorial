import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

export const UserCreate = (props) => {
	return (
		<Create title="Create a Post" {...props}>
			<SimpleForm>
				<TextInput source="name" />
				<TextInput source="email" />
			</SimpleForm>
		</Create>
	);
};
