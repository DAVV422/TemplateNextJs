"use client";

import { useState } from "react";
import styles from "./WelcomeCard.module.css";

export function WelcomeCard() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Welcome to Next.js + TypeScript</h1>
      <p className={styles.description}>
        This is a template ready for your technical test.
      </p>

      <div className={styles.counter}>
        <p>Counter: {count}</p>
        <div className={styles.buttons}>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}
