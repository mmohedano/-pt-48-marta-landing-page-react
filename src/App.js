import React from 'react';
import './style.css';


const Header = () =>{
  return (<>
  <div className="header__container">
<span>🟣 </span>
<span className="header__container-options"> 
   <span className="header__container-options-about">About </span>
   <span className="header__container-options-catalog">Catalog </span>
   <span className="header__container-options-contact">Contact </span>
   <span className="header__container-options-faq">FAQ </span>       
  </span>
<span>🍎 ▶️ </span>
  </div>
  </>)
}

const Body = () =>{
  return (<>
  <div className="body__container">
    <div className="body__container-left">
      <span className="body__container-left-text">
        <h4 className="body__container-left-text-heading">Each purchase will be made with pleasure!</h4>
        <p className="body__container-left-text-paragraph">We work with global brands and have created an application for you to do your shopping </p>
        <span> 
        <button className="body__container-left-button"> Start now </button>
      </span>
      </span>
      
      <span className="body__container-left-icons"> 
       ➡️ 
    </span>
    </div>
    <div className="body__container-right">
      <img className="body__container-right-image" src="woman_shopping.png" alt="women shopping"/>
   </div>
 </div>
  </>)
}

export default function App() {
  return (<>
    <div className="app__container">
      <Header />
      <Body />

    </div>
    </> );
}
