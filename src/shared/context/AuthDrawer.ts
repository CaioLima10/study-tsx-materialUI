import { useContext } from "react";
import { DrawerContext } from "./DrawerContext";

export default function AuthContextDrawer(){
    const drawer = useContext(DrawerContext)

    return drawer
}