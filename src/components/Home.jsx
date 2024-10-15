import React from "react";
import home from "../assets/home.png"
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="contect">
          <p className="sub-title">
            launching Sooon
          </p>
        <h1 className="title">An NFT like no other</h1>
        <p className="description">Dont mess out on the release of our new NFT.
          sign up below to recieve updates when we go live 
        </p>
        <button>Sign Up</button>
        </div>
        <div className="image-container">
          <img src={home} alt="" />
          <div className="ellipse-container">
          <div className="ellipse pink">
          </div>
          <div className="allipse orange">
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
