"use clinet";

import { NavItems } from "@/types/sidebar/Data";
import { NavItemId, SidebarProp } from "@/types/sidebar/SidebarProp";
import { Menu, Plus, SidebarClose, SidebarOpen } from "lucide-react";
import { MotionConfig } from "motion/react";
import { useState } from "react";

export default function Sidebar({ onAddClick, onPageChange, isactive }: SidebarProp) {
    const [IsOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen((prev) => !prev)
    }

    const getNavItemsClass = (page: NavItemId) => {
        return `
              w-full rounded-lg px-4 py-3 text-left transition-color flex gap-3 justify-center
              ${isactive === page
                ? "bg-white/10 text-white"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }
        `
    }
    return (
        <motion.nav
            animate={{
                width: IsOpen ? 360 : 80,
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
            className="relative flex min-h-screen flex-col items-center gap-5 bg-[#222222] p-3"
        >

            <button
                onClick={handleOpen}
                className=" absolute top-5 right-2.5 text-gray-500 cursor-pointer">

                {IsOpen ? (<SidebarClose />) : (<SidebarOpen />)}

            </button>

            <div className="w-full mt-10">
                <span className="mb-2 text-3xl font-bold text-white">
                    To Do List
                </span>
            </div>


            <button
                onClick={onAddClick}
                className="w-full rounded-lg bg-black flex 
                    justify-center gap-3 px-4 py-3 
                    text-white transition-colors"
            >
                <Plus />
                {IsOpen && (
                    <span> add Todo </span>
                )}

            </button>

            {NavItems.map((item) => {
                const Icon = item.icon
                return (
                    <button
                        key={item.id}
                        onClick={() => onPageChange(item.id)}
                        className={getNavItemsClass(item.id)}
                    >
                        <Icon />
                        {IsOpen && (
                            <span> {item.label} </span>
                        )}

                    </button>
                )

            })}
        </nav>
    )
}