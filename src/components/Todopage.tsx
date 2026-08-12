import { Todo } from "@/types/TodoCardType/Todo";
// import { Card } from "./ui/card";
import {
    Card,
    CardContent,
} from "@/components/ui/card";


interface TodoCardProps {
    item: Todo;
    toggleTodo: (id: number) => void;
    handleDelete: (id: number) => void;
}

export default function TodosCard({ item, handleDelete, toggleTodo }: TodoCardProps) {
    return (
        <Card
            className="border-white/20 bg-white/10 shadow-lg backdrop-blur-xl
                transition-all duration-200 hover:bg-white/15"
        >
            <div className="flex justify-between ">
                <div className="flex gap-7 ">
                    <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => toggleTodo(item.id)}
                        className="h-6 w-6 appearance-none rounded-full border-2 border-gray-400
                     cursor-pointer checked:bg-blue-700 checked:border-blue-500"
                    />
                    <span className="text-center text-gray-200">
                        {item.title}
                    </span>
                </div>
                <button
                    className="w-20 p-2 rounded-2xl bg-red-600 hover:bg-red-800 "
                    onClick={() => handleDelete(item.id)}
                >
                    Delete
                </button>
            </div>

        </Card>
    )
}

