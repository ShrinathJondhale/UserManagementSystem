import { useContext } from "react";
import UserContext from "../Context/UserContext";
import ShowUser from "./ShowUser";

function UserList() {
  const { users } = useContext(UserContext);

  const renderUsers = users.map((user, id) => {
    return <ShowUser user={user} key={id} id={id} />;
  });

  return (
    <div>
      <table className="table" style={{ width: "500px" }}>
        <thead>
          <tr>
            <th scope="col">Sr No</th>
            <th scope="col">UserName</th>
            <th scope="col">isAdult</th>
            <th scope="col">PhoneNumber</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{renderUsers}</tbody>
      </table>
    </div>
  );
}

export default UserList;
