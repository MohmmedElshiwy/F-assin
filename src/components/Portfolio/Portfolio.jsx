import React, {  useEffect, useState } from 'react'
import img1 from "../../assets/profile/1.jpg"
import img2 from "../../assets/profile/2.jpg"
import img3 from "../../assets/profile/3.jpg"
import img4 from "../../assets/profile/4.jpg"
import img5 from "../../assets/profile/5.jpg"
import img6 from "../../assets/profile/6.jpg"
import Items from './Items'
import Text from '../Text'

export default function Portfolio() {
  const [items] = useState([
    { img: img1, bg: "bg-danger" },
    { img: img3, bg: "bg-success" },
    { img: img2, bg: "bg-dark" },
    { img: img4, bg: "bg-danger" },
    { img: img5, bg: "bg-success" },
    { img: img6, bg: "bg-dark" },
  ]);

  const [selectedImg, setSelectedImg] = useState(null);

 
  

  const handleClick = (img) => {
    setSelectedImg(img);
  };

  const handleClose = () => {
    setSelectedImg(null);
  };

useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  // console.log("hhhhhh");
  

  // ✅ إزالة الحدث عند إلغاء التركيب (cleanup)
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, []);

 
  return (
    <>
    
     <div className="container py-5">
      <div className="row">

        <Text text="portfolio section" style="text-dark text-center " />
        {items.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4 g-4">
            <Items item={item} onClick={() => handleClick(item.img)} />
          </div>
        ))}
      </div>
    </div> 
    
   {selectedImg && (

 <div className="box-container" onClick={handleClose} >
      <div onClick={(e) => e.stopPropagation()}>

      <img src={selectedImg} alt="" />
      </div>
    </div>

   )}

  
    </>
   
  );
}
