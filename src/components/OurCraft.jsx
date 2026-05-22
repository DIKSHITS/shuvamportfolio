import React from "react";
import "../styles/craft.css";

import {
FaRing,
FaCamera,
FaHeart,
FaUser,
FaUsers,
FaRegCalendarAlt,
FaEye,
FaGem,
FaBolt,
FaShieldAlt
} from "react-icons/fa";

const OurCraft = () => {

const stories = [

{
img:"https://picsum.photos/seed/ourcraft-1/1200/900",
icon:<FaRing/>,
title:"WEDDINGS",
desc:"Celebrating love in its truest form."
},

{
img:"https://picsum.photos/seed/ourcraft-2/1200/900",
icon:<FaCamera/>,
title:"PRE-WEDDINGS",
desc:"Beautiful beginnings of your forever."
},

{
img:"https://picsum.photos/seed/ourcraft-3/1200/900",
icon:<FaHeart/>,
title:"COUPLE SHOOTS",
desc:"Real moments, real connection."
},

{
img:"https://picsum.photos/seed/ourcraft-4/1200/900",
icon:<FaUser/>,
title:"PORTRAITS",
desc:"You in your most beautiful light."
},

{
img:"https://picsum.photos/seed/ourcraft-5/1200/900",
icon:<FaUsers/>,
title:"FAMILIES",
desc:"Every bond deserves memories."
},

{
img:"https://picsum.photos/seed/ourcraft-6/1200/900",
icon:<FaRegCalendarAlt/>,
title:"EVENTS",
desc:"Perfectly captured celebrations."
}

]

return(

<section className="craft">

<div className="craft-top">

<div className="craft-left">

<p>OUR CRAFT</p>

<h1>

Crafting Moments,

<span>Creating Timeless Art</span>

</h1>

<div className="line"></div>

<h4>

Every photograph we create is a blend of
passion, creativity and precision.

</h4>

<button>

VIEW PORTFOLIO →

</button>

</div>

<div className="craft-right">

<img
src="https://picsum.photos/seed/ourcraft-hero/1400/900"
alt="Couple at sunset"
/>

</div>

</div>

<div className="title">

<p>WHAT WE SPECIALIZE IN</p>

<h2>

Stories
<span> We Love to Tell</span>

</h2>

</div>

<div className="story-grid">

{stories.map((item,index)=>(

<div className="story-card" key={index}>

<img src={item.img} alt={item.title} />

<div className="content">

<span>{item.icon}</span>

<h3>{item.title}</h3>

<p>{item.desc}</p>

</div>

</div>

))}

</div>

<div className="bottom-box">

<div className="quote">

<img
src="https://picsum.photos/seed/ourcraft-quote/1000/800"
alt="Couple embracing"
/>

<div>

<h2>

We don't take pictures,
<span>we preserve emotions.</span>

</h2>

<h4>Suvam</h4>

</div>

</div>

<div className="features">

<div>
<FaEye/>
<h3>ARTISTIC VISION</h3>
</div>

<div>
<FaGem/>
<h3>DETAILS</h3>
</div>

<div>
<FaBolt/>
<h3>CREATIVE</h3>
</div>

<div>
<FaShieldAlt/>
<h3>QUALITY</h3>
</div>

</div>

</div>

</section>

)

}

export default OurCraft;