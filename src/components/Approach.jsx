import React from "react";
import "../styles/approach.css";

import {
FaCamera,
FaHeart,
FaSun,
FaClock
} from "react-icons/fa";

const Approach=()=>{

const cards=[

{
img:"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200",
icon:<FaCamera/>,
title:"We Observe",
desc:"We blend into your moments and observe the real, raw, beautiful."
},

{
img:"https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200",
icon:<FaHeart/>,
title:"We Connect",
desc:"We connect with you to understand your story and vibe."
},

{
img:"https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200",
icon:<FaSun/>,
title:"We Create",
desc:"We turn real moments into timeless works of art."
},

{
img:"https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
icon:<FaClock/>,
title:"We Preserve",
desc:"We preserve emotions so you can relive them forever."
}

]

return(

<section className="approach">

<h5>
OUR APPROACH
</h5>

<h1>
How We Tell Your Story
</h1>

<div className="card-grid">

{cards.map((card,index)=>(

<div className="story-card" key={index}>

<div className="img-box">

<img
src={card.img}
alt=""
/>

</div>

<div className="card-content">

<span>
{card.icon}
</span>

<h3>
{card.title}
</h3>

<p>
{card.desc}
</p>

</div>

</div>

))}

</div>

<div className="cta">

<div className="left">

<h2>

Ready to Create Your
<span>
Timeless Story?
</span>

</h2>

</div>

<div className="middle">

<p>

Let's capture moments
you'll cherish forever.

</p>

<button>

BOOK CONSULTATION →

</button>

</div>

<div className="right">

<img
src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000"
alt=""
/>

</div>

</div>

</section>

)

}

export default Approach;