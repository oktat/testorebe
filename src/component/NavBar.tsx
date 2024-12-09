import { NavLink } from "react-router-dom"
import './NavBar.css'
import Cookies from 'js-cookie'

export const NavBar = () => {
  const isLoggedIn = Cookies.get('token') !== undefined
  const handleLogout = () => {
    Cookies.remove('token')
    window.location.reload()
  }
  return (
    <nav className="nav justify-content-center bg-light">
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Főoldal</NavLink>
        </li>
        {!isLoggedIn && (
        <li className="nav-item">        
          <NavLink className="nav-link" to="/login">Belépés</NavLink>
        </li>
        )}

        {isLoggedIn && (<>
        <li className="nav-item">        
          <button onClick={handleLogout}
          className="btn btn-primary">Kilépés</button>
        </li>
        

        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Termékek</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">Névjegy</NavLink>
        </li>
        </>
        )}
      </ul>
    </nav>
  )
}
