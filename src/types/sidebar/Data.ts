import { CheckCircle, ListTodo, LucideIcon } from "lucide-react";
import { NavItemId } from "./SidebarProp";

interface Iprops { 
    id : NavItemId ,
    label : string,
    icon : LucideIcon,
}


export const NavItems : Iprops[] = [
    {
        id: "all",
        label: "All Projects",
        icon : ListTodo
    },
    {
        id: "compeleted",
        label: "Completed",
        icon :  CheckCircle
    },
]