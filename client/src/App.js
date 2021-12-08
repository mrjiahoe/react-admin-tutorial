import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { PostList } from "./components/PostList";
import { PostCreate } from "./components/PostCreate";
import { PostEdit } from "./components/PostEdit";
import { UserList } from "./components/PostList";
import { UserCreate } from "./components/PostCreate";
import { UserEdit } from "./components/PostEdit";

function App() {
	return (
		<Admin dataProvider={restProvider("http://localhost:4000")}>
			<Resource
				name="posts"
				list={PostList}
				create={PostCreate}
				edit={PostEdit}
			/>
			<Resource
				name="user"
				list={UserList}
				create={UserCreate}
				edit={UserEdit}
			/>
		</Admin>
	);
}

export default App;
