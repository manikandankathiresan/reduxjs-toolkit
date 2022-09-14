import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/action/users";
import Card from "../card";

const Users = () => {
  const dispatch = useDispatch();
  const usersResponse = useSelector((state) => state.user.usersResponse);
  const isFetching = useSelector((state) => state.user.isFetching);

  return (
    <>
      <h3>Users</h3>
      <button className="btn" onClick={() => dispatch(getUsers())}>
        {" "}
        getUsers{" "}
      </button>
      {isFetching ? <div>loading...</div> : null}
      <ul>
        {usersResponse.length > 0 &&
          usersResponse.map((it, index) => {
            return <li key={index}>{it.name}</li>;
          })}
      </ul>
    </>
  );
};

export default Users;

{/* <div class="card">
<div class="card-header">email: {it.email}</div>
<div class="card-body">
  <h5 class="card-title">{it.name}</h5>
  <p class="card-text"> website: {it.website}</p>
</div>
</div> */}