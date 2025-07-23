import React from 'react'
import Text from '../Text'

export default function Contact() {
  return <>


  <div className="container ">


<div className="row">
  <Text text="conatct section" style="text-dark text-center "/>



    <div className="col-md-6 vh-100 mx-auto g-4 my-5 ">


    <form onSubmit={e=>e.preventDefault()} className='p-5  my-5'>


    <label htmlFor="name" className="form-label text-success  mt-4 ms-3">Name</label>

    <input type="text" className="form-control " id="name" placeholder="UserName" required />
    <label htmlFor="age" className="form-label text-success  mt-4 ms-3">Age</label>

    <input type="number" className="form-control " id="age" placeholder="UserAge" required />



    <label htmlFor="email" className="form-label text-success  mt-4 ms-3">userEmail</label>

    <input type="email" className="form-control " id="email" placeholder="UserEmail" required />



    <label htmlFor="passwrod" className="form-label text-success  mt-4 ms-3">userPassword :</label>

    <input type="password" className="form-control " id="passwrod" placeholder="UserPassword" required />

    <button className='btn  mt-4 bg-success bg-opacity-75 text-light'>Send Message</button>


    </form>





      </div>
 
  </div>

  </div>

  
  
  </>
}
