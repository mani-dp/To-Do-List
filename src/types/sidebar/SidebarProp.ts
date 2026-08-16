export interface SidebarProp {
    onAddClick: () => void;
    isactive : NavItemId 
    onPageChange: ( page : NavItemId ) => void;
}
export type NavItemId =  "all" | "compeleted" 
