import { NavItemId } from "./SidebarProp";

interface Iprops { 
    id : NavItemId ,
    label : string,
}


export const NavItems : Iprops[] = [
    {
        id: "all",
        label: "All Projects",
    },
    {
        id: "compeleted",
        label: "Completed",
    },
]