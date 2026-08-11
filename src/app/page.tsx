"use client";
import { useState } from "react";
import { Todo } from "@/types/TodoCardType/Todo";


export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([])

  const Addtodo = () => {
    if (!todo.trim()) return;
    const newtodo: Todo = {
      id: Date.now(),
      title: todo,
      completed: false
    }
    setTodos((prevTodos) => [...prevTodos, newtodo])
    setTodo("");
    // console.log("succuess!!!!!")
  }

  // completing
  const toggleTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ))
  }

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((fill) => fill.id !== id));
  }

  return (
    <main className="min-h-screen bg-[#121212] flex flex-col gap-5 p-10">
      <div>
        <div className="mx-auto max-w-xl p-6 bg-gray-800 rounded-xl shadow-2xl">
          <h1 className=" text-3xl font-bold mb-5"> To Do List </h1>
          <div className="flex gap-2 ">
            <input
              type="text"
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
              // onKeyDown={(event) => { if (event.key === "Enter") { Addtodo()}}}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  Addtodo()
                }
              }}
              placeholder="what do you need to do"
              className="flex-1 rounded-lg border px-4 py-2 outline-none"
            />
            <button
              onClick={Addtodo}
              className="rounded-lg bg-black px-4 py-2 text-white"
            >
              Add
            </button>
          </div>
        </div>
      </div>
      {/* Todos List */}
      <div className="mt-6 space-y-2">
        {todos.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTodo(item.id)}
            />
            <span> {item.title} </span>
            <button
              className="p-2 rounded-2xl bg-red-600 hover:bg-red-800 "
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>

        ))}
      </div>
    </main >
  )
}

