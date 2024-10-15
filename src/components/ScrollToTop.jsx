import React, { useState } from 'react'





import { BsChevronUp } from "react-icons/bs";
export default function ScrollToTop() {
  const [visble,SetVisible]=useState(false);
  window.addEventListener("scroll",()=>{
    window.pageYOffset > 100 ? SetVisible(true) : SetVisible(false)
  })
  
  return (
    <div className={`scrollToTop ${visble ? "visible" : ""}`}>
      <a href="#">
        <BsChevronUp/>
      </a>
    </div>
  )
}
