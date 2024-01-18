import { Navbar } from "./Components/Navbar"
import { Outlet } from "react-router-dom"
import './App.css'
export function Layout(){
    return(
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}