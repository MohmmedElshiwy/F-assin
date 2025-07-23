import "./footer.css"
export default function Footer() {
  return <>

  <section className="container-fluid bg-dark text-light py-5 position-relative">
    <div className="container py-5">
<div className="row justify-content-between text-center g-4">
    <div className="col-md-4 ">
        <div className="item">

        <h2>
            LOCATION
        </h2>
        <p>
            2215 John Daniel Drive
        </p>
        <p>
        Clark, MO 65243

        </p>


        </div>
    </div>
    <div className="col-md-4 ">
        <div className="item">

        <h2>
AROUND THE WEB
        </h2>
      <div className="icons d-flex justify-content-evenly align-items-center flex-wrap">
        <span className='icon'>
<i class="fa-brands fa-facebook"></i>        </span>
        <span className='icon'>
<i class="fa-brands fa-twitter"></i>        </span>
        <span className='icon'>
<i class="fa-brands fa-linkedin-in"></i>        </span>
        <span className='icon'>
<i class="fa-brands fa-instagram"></i>        </span>
      </div>
       
        </div>
    </div>
    <div className="col-md-4 ">
        <div className="item">

        <h2>
ABOUT FREELANCER
        </h2>
        <p>
Freelance is a free to use, licensed Bootstrap theme created by Route

        </p>


        </div>
    </div>
  </div>

    </div>
    <h6 className="py-4 text-center w-100 bg-black text-light start-0  position-absolute">Copyright © Kiro Website 2025</h6>

  </section>
  
 
  
  
  </>
}
