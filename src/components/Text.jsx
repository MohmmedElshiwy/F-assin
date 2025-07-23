
export default function Text({text,style}) {
  return <>
   <div className={style ? style : "text-center pt-5 text-light "}>
    <h1 className={`mt-3 fw-bolder text-uppercase ${style}`}>{text}</h1>
  <div className="center mt-4">
    <span  className={style?"bg-dark border":"bg-light border" }></span>

      <i className="fa-solid fa-star mx-3"></i>

    <span className={style?"bg-dark border":"bg-light border" } ></span>
    </div>

   </div>
  
  </>
}
