import React,{useState,useEffect} from "react";
import "../styles/stories.css";
import {
FaChevronLeft,
FaChevronRight
} from "react-icons/fa";

const Stories=()=>{

const stories=[

{
img:"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600",
category:"WEDDING STORY",
title:"The Beginning of Forever"
},

{
img:"https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600",
category:"PRE-WEDDING",
title:"Sunset Love Story"
},

{
img:"https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1600",
category:"COUPLE STORY",
title:"Timeless Moments"
},

{
img:"https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1600",
category:"EVENT STORY",
title:"Beautiful Celebration"
},

{
img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600",
category:"PORTRAIT STORY",
title:"Captured Emotions"
}

];

const [current,setCurrent]=useState(0);


/* AUTO CHANGE EVERY 3 SEC */

useEffect(()=>{

const slider=setInterval(()=>{

setCurrent((prev)=>

prev===stories.length-1
?0
:prev+1
)

},3000);

return()=>clearInterval(slider);

},[stories.length]);


/* MANUAL NEXT */

const nextSlide=()=>{

setCurrent(

current===stories.length-1
?0
:current+1

)

}


/* MANUAL PREV */

const prevSlide=()=>{

setCurrent(

current===0
?stories.length-1
:current-1

)

}


return(

<section className="stories">

<div className="story-top">

<p>STORIES</p>

<div className="line"></div>

<h1>

Stories That

<span>Live Forever</span>

</h1>

<h4>

Every frame holds a story.
<br/>
Here are some favorite chapters.

</h4>

</div>


<div className="story-card">

<img
src={stories[current].img}
alt=""
/>

<div className="story-overlay">

<p className="category">

{stories[current].category}

</p>

<h2>

{stories[current].title}

</h2>

<div className="smallLine"></div>

<h3>

0{current+1}/0{stories.length}

</h3>


<div className="controls">

<button onClick={prevSlide}>

<FaChevronLeft/>

</button>

<div className="dots">

{stories.map((_,index)=>(

<span

key={index}

className={
index===current
?
"active"
:
""
}

/>

))}

</div>

<button onClick={nextSlide}>

<FaChevronRight/>

</button>

</div>

</div>

</div>

</section>

)

}

export default Stories;