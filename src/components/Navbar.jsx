import React,{useState} from "react";
import "../styles/navbar.css";

import {HiOutlineMenuAlt3} from "react-icons/hi";

import {
FaWhatsapp,
FaVideo
} from "react-icons/fa";

import {Link} from "react-router-dom";

const Navbar=()=>{

const [showPopup,setShowPopup]=useState(false)

return(

<>

<nav className="navbar">

<div className="menu-btn">
<HiOutlineMenuAlt3/>
</div>

<div className="nav-center">

<ul className="nav-links left">

<li><Link to="/">HOME</Link></li>

<li><Link to="/about">ABOUT</Link></li>

<li><Link to="/our-craft">OUR CRAFT</Link></li>

</ul>


<div className="logo">

<Link
to="/"
className="logo-link"
>

<h1>LUMINOSITY</h1>

<span>BY SUVAM</span>

</Link>

</div>

<ul className="nav-links right">

<li><Link to="/portfolio">PORTFOLIO</Link></li>

<li><Link to="/experiences">EXPERIENCES</Link></li>

<li><Link to="/stories">STORIES</Link></li>

<li><Link to="/contact">CONTACT</Link></li>

</ul>

</div>

<button
className="book-btn"
onClick={()=>setShowPopup(true)}
>

BOOK CONSULTATION

<span>+</span>

</button>

</nav>


{/* POPUP */}

{
showPopup && (

<div
className="consult-overlay"
onClick={()=>setShowPopup(false)}
>

<div
className="consult-box"
onClick={(e)=>e.stopPropagation()}
>

<h2>

Book Your Consultation

</h2>

<p>

Choose your preferred option

</p>

<a
href="https://meet.google.com/"
target="_blank"
rel="noreferrer"
className="consult-item"
>

<FaVideo/>

Google Meeting

</a>


<a
href="https://wa.me/916289568123"
target="_blank"
rel="noreferrer"
className="consult-item"
>

<FaWhatsapp/>

WhatsApp Chat

</a>


<button
className="close-btn"
onClick={()=>setShowPopup(false)}
>

Close

</button>

</div>

</div>

)

}

</>

)

}

export default Navbar;