import { useState } from "react"

export default function UseState() {
  // ! ALways Function or nice likte hobe
  // ? React Hooks UseState 
  const [count, setCount] = useState(0)
  
  const btnHandallar = () => {
    return setCount(count + 1)
  }


  return (
    <div
      style={{
        border: "1px solid skyblue",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <h3>
        Count: <span style={{ color: "red" }}>{count}</span>
      </h3>

      <button style={{ marginRight: "10px" }} onClick={btnHandallar}>
        ++
      </button>
      <button onClick={() => count > 0 && setCount(count - 1)}>--</button>
    </div>
  );


}