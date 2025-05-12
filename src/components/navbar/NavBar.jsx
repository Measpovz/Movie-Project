import { useState } from "react";
import logo from "../../assets/logo.png"
import '../../components/navbar/Navbar.css';
import { Menu, UserRound, X } from 'lucide-react'; 
import { Link } from 'react-router-dom';    



const NavBar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-header">
      <nav className="navbar">

          <button onClick={() => setOpen(!open)} className="toggle">
              {/* <Menu /> */}
              {open ? <X/> : <Menu/>}
          </button>

          <img src={logo} alt="logo" className="logo-img" />

          
          <ul className={open ? "nav-lists active" : "nav-lists"}>
              <li onClick={() => setOpen(!open)}><Link to = "/">Home</Link></li>
              <li onClick={() => setOpen(!open)}><Link to = "/series">Series</Link></li>
              <li onClick={() => setOpen(!open)}><Link to = "/movies">Movies</Link></li>
              <li onClick={() => setOpen(!open)}><Link to = "/price">Price</Link></li>
              <li onClick={() => setOpen(!open)}  ><Link to = "/contact">Contact</Link></li>

              <li className="mobile-only">
                  <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <button className="btn-search">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>

                  <div onClick={() => setOpen(!open)} className="account-bar">
                        <UserRound />
                        <Link to="/login">
                          <button className="btn-bar">Login Now</button>
                        </Link>
                  </div>  
              </li>

          </ul>


      </nav>
    </div>
  )
}

export default NavBar;