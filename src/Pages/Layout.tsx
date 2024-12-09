import { Outlet } from "react-router-dom"
import { NavBar } from "../component/NavBar"


export const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}