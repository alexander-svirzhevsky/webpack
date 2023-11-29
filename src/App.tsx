import { useState } from "react";
import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>Count {count}</div>
      <button className={styles["button"]} onClick={onClick}>
        <span>add one</span>
      </button>
      <Outlet />
    </>
  );
};

export default App;
