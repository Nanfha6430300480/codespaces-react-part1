import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("type here!");
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(event) => {setValue(event.target.value)}}
      />
      <h3>You type {value.length} chars</h3>

      <button onClick={() => setCount(count + 1)}> Click Me! </button>
      <button onClick={() => setCount(0)}> Reset! </button>
      <p>You Clicked {count} times</p>
    </>
  );
}
