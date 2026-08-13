"use client";
import { useState } from "react";
import { Todo } from "@/types/TodoCardType/Todo";
import TodosCard from "@/components/Todopage";
import toast from "react-hot-toast";
import Sidebar from "./components/sidebar/Sidebar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import { NavItemId } from "@/types/sidebar/SidebarProp";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isactive, setisactive] = useState<NavItemId>("all")

  const Addtodo = () => {
    if (!todo.trim()) return;
    const newtodo: Todo = {
      id: Date.now(),
      title: todo,
      compeleted: false
    }
    setTodos((prevTodos) => [...prevTodos, newtodo])
    setTodo("");
    toast.success('your project is add!')
  }

  // compeleted
  const toggleTodo = (Id: Number) => {
    setTodos((prev) => prev.map((item) => item.id === Id
      ? { ...item, compeleted: !item.compeleted } : item
    ))
  }

  const dispalyedTodos =
    isactive === "compeleted"
      ? todos.filter((fill) => fill.compeleted) : todos;

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((fill) => fill.id !== id));
    toast.error("کارت شما حذف شد")
  }

  // handleOpenModal
  const handleClick = () => {
    setIsModalOpen(true)
  }

  return (
    <main className="flex">
      <Sidebar
        onAddClick={handleClick}
        onPageChange={setisactive}
        isactive={isactive}
      />
      <div className="w-full p-5 ">
        {/* Todos List */}
        <div className="w-full flex flex-col mt-6 space-y-2">
          <div className=" h-17">
            <span className="text-gray-500 text-[25px]"> All project</span>
          </div>
          {dispalyedTodos.map((item) => (
            <TodosCard
              key={item.id}
              item={item}
              toggleTodo={toggleTodo}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      <Dialog
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      >
        <DialogContent className="max-w-2xl bg-gray-500 ">
          <DialogHeader>
            <DialogTitle>
              Add New Todo
            </DialogTitle>
          </DialogHeader>

          <div className="flex gap-2">
            <input
              type="text"
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  Addtodo();
                  setIsModalOpen(false);
                }
              }}
              placeholder="What do you need to do?"
              className="flex-1 rounded-lg border px-4 py-2 outline-none"


            />

            <button
              onClick={() => {
                Addtodo();
                setIsModalOpen(false);
              }}
              className="rounded-lg bg-black px-4 py-2 text-white"
            >
              Add
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </main >
  )
}

