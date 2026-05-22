import React from "react";
import "../styles/hero.css";

import {
FaInstagram,
FaYoutube,
FaFacebookF,
FaWhatsapp
} from "react-icons/fa";

import { motion } from "framer-motion";

const Hero = () => {

const heroImg =
"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop";

return (

<section className="hero">

<div className="hero-bg">

<motion.img
src={heroImg}
alt=""
initial={{scale:1}}
animate={{
scale:1.15,
rotate:1
}}
transition={{
duration:12,
repeat:Infinity,
repeatType:"reverse"
}}
/>

<div className="overlay"></div>

</div>

<div className="particles"></div>

<motion.div
className="hero-content"

initial={{
opacity:0,
x:-100
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:1.3
}}
>



<motion.h1

animate={{
y:[0,-10,0]
}}

transition={{
duration:4,
repeat:Infinity
}}

>

The Story

<span>
Behind Luminosity
</span>

</motion.h1>

<p className="desc">

We are storytellers, capturing the raw,
the real and beautifully in-between
moments that make your story unique.

</p>

<div className="signature">

Suvam

<div className="line"></div>

</div>

<div className="experience">

⭐ 5+ YEARS OF CAPTURING MEMORIES

</div>

</motion.div>

<motion.div
className="socials"

initial={{
opacity:0,
x:100
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:1.5
}}
>

<FaInstagram/>
<FaYoutube/>
<FaFacebookF/>
<FaWhatsapp/>

<div className="social-line"></div>

<div className="scroll">

SCROLL
<br/>
TO EXPLORE

</div>

</motion.div>

</section>

)

}

export default Hero;