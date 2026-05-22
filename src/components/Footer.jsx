import React from "react";
import "../styles/footer.css";

import {
FaInstagram,
FaYoutube,
FaFacebookF,
FaWhatsapp,
FaPhoneAlt,
FaEnvelope,
FaLink,
FaMapMarkerAlt
} from "react-icons/fa";

const Footer=()=>{

const images=[

"https://picsum.photos/seed/footer-1/800/600",

"https://picsum.photos/seed/footer-2/800/600",

"https://picsum.photos/seed/footer-3/800/600",

"https://picsum.photos/seed/footer-4/800/600"

]

return(

<footer className="footer">

<div className="footer-logo">

<h1>LUMINOSITY</h1>

<span>BY SUVAM</span>

<p>Capturing Stories That Live Forever</p>

</div>

<div className="gold-divider"></div>

<div className="gallery">

{
images.map((img,index)=>(

<img
key={index}
src={img}
alt={`Footer gallery ${index+1}`}
/>

))
}

</div>

<div className="footer-content">

<div className="footer-box">

<h3>

<FaLink/>

QUICK LINKS

</h3>

<ul>

<li>Home</li>
<li>About</li>
<li>Our Craft</li>
<li>Portfolio</li>
<li>Experiences</li>
<li>Stories</li>
<li>Contact</li>

</ul>

</div>


<div className="footer-box">

<h3>

<FaPhoneAlt/>

CONTACT

</h3>

<p>+91 6289568123</p>

<p>dikshith507@gmail.com</p>

<p>

<FaMapMarkerAlt/>

Kolkata, India

</p>

<button>

BOOK CONSULTATION →

</button>

</div>


<div className="footer-box">

<h3>

<FaEnvelope/>

NEWSLETTER

</h3>

<p>

Get inspiration and updates directly.

</p>

<input
placeholder="Enter your email"
/>

<button>

SUBSCRIBE

</button>

</div>


<div className="footer-box">

<h3>

<FaInstagram/>

FOLLOW US

</h3>

<div className="socials">

<FaInstagram/>

<FaYoutube/>

<FaFacebookF/>

<FaWhatsapp/>

</div>

<h2>

Let's Connect

</h2>

</div>

</div>


<div className="bottom-line"></div>

<div className="copyright">

© 2026 Luminosity By Suvam. All Rights Reserved.

</div>

</footer>

)

}

export default Footer;