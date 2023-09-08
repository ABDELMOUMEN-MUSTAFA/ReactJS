/* eslint-disable react/prop-types */
import UserRow from "./UserRow";

const UserContainer = ({ users }) => {
  return (
    <div>
      {users?.map((u) => (
        <UserRow key={u.id} user={u} />
      ))}
    </div>
  );
};

export default UserContainer;
