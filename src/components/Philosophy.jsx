import React from "react";
import "../styles/philosophy.css";
import { motion } from "framer-motion";

const Philosophy = () => {

const img =
"https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1600&auto=format&fit=crop";

return (

<section className="philosophy">

<motion.div
className="philosophy-image"

initial={{
opacity:0,
x:-100
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:1
}}

whileHover={{
rotateY:10,
rotateX:-5,
scale:1.03
}}

>

<motion.img

src={img}

alt=""

animate={{
y:[0,-15,0]
}}

transition={{
duration:6,
repeat:Infinity
}}

/>

</motion.div>

<motion.div

className="philosophy-content"

initial={{
opacity:0,
x:100
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:1.2
}}

>

<p className="small-title">

OUR PHILOSOPHY

</p>

<motion.h1

animate={{
y:[0,-8,0]
}}

transition={{
duration:4,
repeat:Infinity
}}

>

It's More Than
<br/>

Just <span>Photography</span>

</motion.h1>

<div className="gold-line"></div>

<p>

We don't just click pictures —
we capture feelings, connections,
and moments that words can't describe.

</p>

<p>

Our goal is to create images
that take you back in time
and make you relive every emotion.

</p>

<motion.button

whileHover={{
scale:1.1,
boxShadow:"0 0 30px rgba(212,175,55,.5)"
}}

whileTap={{
scale:.9
}}

>

VIEW OUR WORK →

</motion.button>

</motion.div>

</section>

)

}

export default Philosophy;