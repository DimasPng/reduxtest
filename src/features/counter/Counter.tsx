import styles from "./Counetr.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "./counterSlice.js";
export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState("2");
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          onClick={() => dispatch(increment())}
          className={styles.button}
          aria-label="Increment value"
        >
          +
        </button>
        <span className={styles.value}>vxcv</span>
        <button className={styles.button} aria-label="Decrement value">
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button}>Add Amount</button>
        <button className={styles.asyncButton}>Add Async</button>
      </div>
    </div>
  );
}
