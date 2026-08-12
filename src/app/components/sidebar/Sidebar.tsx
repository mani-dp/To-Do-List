import { SidebarProp } from "@/types/sidebar/SidebarProp";

export default function Sidebar({ onAddClick }: SidebarProp) {

    return (
        <nav className="flex flex-col items-center gap-5 left-0 min-h-screen w-90 p-3 bg-[#222222] ">
            <div className="w-full mt-4">
                <span className="mb-2 text-3xl font-bold text-white">
                    To Do List
                </span>

            </div>
            <button
                onClick={onAddClick}
                className="w-full rounded-lg bg-black px-4 py-3 text-white"
            >
                + Add Todo
            </button>
        </nav>
    )
}