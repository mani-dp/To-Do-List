"use client";
import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  return (
    <main className="min-h-screen bg-[#121212]  p-10">
      <div className="mx-auto max-w-xl p-6 bg-gray-800 rounded-xl shadow-2xl">
        <h1 className=" text-3xl font-bold mb-5"> To Do List </h1>
        <div className="flex gap-2 ">
          <input
            type="text"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
            placeholder="what do you need to do"
            className="flex-1 rounded-lg border px-4 py-2 outline-none"
          />
          <button className="rounded-lg bg-black px-4 py-2 text-white" >
            Add
          </button>
        </div>  
            <p className="mt-5 ">
             To do : {todo}
            </p>
      </div>
    </main>
  )
}

