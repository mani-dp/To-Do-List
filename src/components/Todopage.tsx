import { Todo } from "@/types/TodoCardType/Todo";

interface TodoCardProps {
    item: Todo;
    toggleTodo: () => void;
    deleteTodo: () => void;
}

export default function TodosCard({ item, deleteTodo, toggleTodo }: TodoCardProps) {
    return (
        <div

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
                onClick={() => deleteTodo(item.id)}
            >
                Delete
            </button>
        </div>
    )
}

