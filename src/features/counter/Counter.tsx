import styles from "./Counetr.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {decrement, increment, selectCount} from "./counterSlice.js";
export function Counter() {
  const count = useSelector(selectCount)
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
        <span className={styles.value}>{count}</span>
        <button onClick={()=> dispatch(decrement())} className={styles.button} aria-label="Decrement value">
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
