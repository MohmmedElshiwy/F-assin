import React from 'react'
import "./home.css";
import Text from "../Text.jsx";
import img from"../../assets/profile/1.jpg";  

export default function Home() {
  return <>
  <div className="text-center d-flex flex-column justify-content-center align-items-center pt-5 text-light bg vh-100">

  <img src={img} className='w-25 rounded-circle' alt="" />

 <Text text="start Framework"/>
    <p className='mt-4'>
      Graphic Artist - Web Designer - Illustrator
    </p>

  </div>
  
  </>
}
