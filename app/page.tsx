"use client"

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is home page</h1>

      <p> { count } </p>

      <button className="btn px-3 py-1 bg-amber-100 text-black rounded mx-1" onClick={(e)=>setCount(count+1)}>Increase</button>
      <button className="btn px-3 py-1 bg-amber-100 text-black rounded mx-1" onClick={(e)=>setCount(count-1)}>Decrease</button>
    </>
  );
}
