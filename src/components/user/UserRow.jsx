/* eslint-disable react/prop-types */
const UserRow = ({ user }) => {
  return (
    <div className="user">
      <div className="fw-semibold">{user.name}</div>
      <div>
        <span>
          <em>Date De Départ: </em>
          {user.pivot.date_depart}
        </span>
        <span>
          <em>Date De D&#39;arrivée: </em>
          {user.pivot.date_arrivee}
        </span>
      </div>
    </div>
  );
};

export default UserRow;
