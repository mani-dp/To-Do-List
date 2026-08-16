import { NavItems } from "@/types/sidebar/Data";
import {  NavItemId, SidebarProp } from "@/types/sidebar/SidebarProp";

export default function Sidebar({ onAddClick, onPageChange, isactive }: SidebarProp) {

    const getNavItemsClass = (page : NavItemId) => {
        return `
              w-full rounded-lg px-4 py-3 text-left transition-color 
              ${isactive === page
                ? "bg-white/10 text-white"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }
        `
    }

    return (
        <nav className="flex flex-col items-center gap-5 left-0 min-h-screen w-90 p-3 bg-[#222222] ">
            <div className="w-full mt-4">
                <span className="mb-2 text-3xl font-bold text-white">
                    To Do List
                </span>
            </div>
            <button
                onClick={onAddClick}
                className="w-full rounded-lg bg-black px-4 py-3 text-white transition-colors"
            >
                + Add Todo
            </button>
            {NavItems.map((item) => (
                <button
                    key={item.id} 
                    onClick={() => onPageChange(item.id)}
                    className={getNavItemsClass(item.id)}
                >
                    {item.label}
                </button>
            ))}


        </nav>
    )
}