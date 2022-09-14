import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/action/counter";
import { login, logout } from "./redux/action/auth";
import "./styles.css";
import Users from "./components/users/users";

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);
  const isAuth = useSelector((state) => state.login.isAuth);

  return (
    <>
      <div className="App">
        {isAuth ? (
          <>
            <h2>Counter</h2>
            <h3>count: {count}</h3>
            <button type="btn" onClick={() => dispatch(increment())}>
              increment
            </button>
            &nbsp;
            <button type="btn" onClick={() => dispatch(decrement())}>
              decrement
            </button>
            &nbsp;
            <button type="btn" onClick={() => dispatch(reset())}>
              reset
            </button>
            <br /> <br />
            <button type="btn" onClick={() => dispatch(logout())}>
              logout
            </button>
          </>
        ) : (
          <>
            <h1>Reduxjs/toolkit</h1>
            <h2> Login here </h2>
            <button type="btn" onClick={() => dispatch(login())}>
              loging
            </button>
            &nbsp;
          </>
        )}
      </div>
      <div>{isAuth ? <Users /> : null}</div>
    </>
  );
};
export default App;
