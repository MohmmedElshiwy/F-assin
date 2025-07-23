import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

export default function Layouts() {
  return <>
  <Navbar/>
  <div className="container-fluid">
    <div className="row">
    <Outlet/>
    </div>
  </div>
  <Footer/>
  
  </>
}
