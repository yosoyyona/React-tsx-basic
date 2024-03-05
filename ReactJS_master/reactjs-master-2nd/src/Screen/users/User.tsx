import { useParams, Outlet, Link } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();

  return (
    <div>
      <h1>
        User with ID {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>
      <Outlet 
        context={{
          nameOfMyUser: users[Number(userId) - 1].name,
        }} 
      />
    </div>
  );
}

export default User;