import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    const[isScrollY, setIsScrollY] = useState(false);

useEffect(() => {


  const handleScroll=() => {

    scrollY>0 ? setIsScrollY(true) : setIsScrollY(false);
  }
 window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
},[])

  return <>
  
 <nav className={`sticky-top navbar navbar-expand-sm navbar-dark transtion bg-dark ${isScrollY ? "":"p-4"}`} >
  <div className="container ">

    <Link className="navbar-brand fs-1 fw-bolder" to="/">Start</Link>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav ms-auto mt-2  mt-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

  
  
  </>
}
