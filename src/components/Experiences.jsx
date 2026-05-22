import React from "react";
import "../styles/experiences.css";
import { FaPlay } from "react-icons/fa";

const demoVideo = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const Experiences=()=>{

return(

<section className="exp">

<div className="exp-header">

<p>EXPERIENCES</p>

<div className="gold-line"></div>

<h1>

Moments Beyond
<span> Pictures</span>

</h1>

<h4>

Every experience we create is unique,
personal and unforgettable.

<br/>

We don't just capture moments,
we craft memories that last a lifetime.

</h4>

</div>

<div className="experience-grid">

{/* LEFT BIG */}

<div className="box wedding">

<img
src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1500"
alt="Wedding couple celebrating their ceremony"
/>

<div className="content">

<h5>01</h5>

<div className="small-line"></div>

<h2>Weddings</h2>

<p>

Timeless celebrations of love,
beautifully captured.

</p>

</div>

</div>


{/* TOP CENTER VIDEO */}

<div className="box video-box">

<video
autoPlay
muted
loop
playsInline
>

<source
src={demoVideo}
/>

</video>

<div className="play">

<FaPlay/>

</div>

<div className="content">

<h5>02</h5>

<div className="small-line"></div>

<h2>Pre-Weddings</h2>

<p>

The beginning of your forever story.

</p>

</div>

</div>


{/* TOP RIGHT */}

<div className="box">

<img
src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1500"
alt="Couple sharing a pre-wedding moment"
/>

<div className="content">

<h5>03</h5>

<div className="small-line"></div>

<h2>Couple Shoots</h2>

<p>

Real moments. Real connection.

</p>

</div>

</div>


{/* BOTTOM */}

<div className="box">

<img
src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200"
alt="Portrait session with natural light"
/>

<div className="content">

<h5>04</h5>

<div className="small-line"></div>

<h2>Portraits</h2>

<p>

You in your most authentic light.

</p>

</div>

</div>


<div className="box video-box">

<video
autoPlay
muted
loop
playsInline
>

<source
src={demoVideo}
/>

</video>

<div className="play">

<FaPlay/>

</div>

<div className="content">

<h5>05</h5>

<div className="small-line"></div>

<h2>Families</h2>

<p>

Because every bond deserves memories.

</p>

</div>

</div>


<div className="box">

<img
src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200"
alt="Event celebration captured in motion"
/>

<div className="content">

<h5>06</h5>

<div className="small-line"></div>

<h2>Events</h2>

<p>

Every detail perfectly documented.

</p>

</div>

</div>

</div>

</section>

)

}

export default Experiences;