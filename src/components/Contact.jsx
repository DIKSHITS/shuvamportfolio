import React from "react";
import "../styles/contact.css";

import {
FaPhoneAlt,
FaEnvelope,
FaMapMarkerAlt,
FaClock,
FaPaperPlane
} from "react-icons/fa";

const Contact=()=>{

const coupleImg=
"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600";

return(

<section className="contact">

<div className="contact-top">

<p>CONTACT</p>

<div className="gold-line"></div>

<h1>

Let's Create

<span>Something Beautiful</span>

</h1>

<h4>

We would love to hear from you.
<br/>
Tell us about your story and let's create memories together.

</h4>

</div>

<div className="contact-image">

<img src={coupleImg} alt="" />

</div>

<div className="touch">

<p>GET IN TOUCH</p>

<div className="gold-line"></div>

<h4>

Whether it's a wedding,
a celebration,
or a special moment,

<br/>

we're here to turn it into timeless memories.

</h4>

</div>

<div className="contact-cards">

<div className="info">

<FaPhoneAlt/>

<h3>PHONE</h3>

<p>+91 9876543210</p>

</div>

<div className="info">

<FaEnvelope/>

<h3>EMAIL</h3>

<p>hello@studio.com</p>

</div>

<div className="info">

<FaMapMarkerAlt/>

<h3>LOCATION</h3>

<p>Mumbai, India</p>

</div>

<div className="info">

<FaClock/>

<h3>HOURS</h3>

<p>Mon - Sun: 9AM - 8PM</p>

</div>

</div>

<div className="form-title">

<p>SEND US A MESSAGE</p>

<div className="gold-line"></div>

</div>

<form className="contact-form">

<input placeholder="Your Name"/>

<input placeholder="Your Email"/>

<input placeholder="Phone Number"/>

<input placeholder="Event Type"/>

<textarea
placeholder="Tell us about your story..."
></textarea>

<button>

SEND MESSAGE

<FaPaperPlane/>

</button>

</form>

</section>

)

}

export default Contact;