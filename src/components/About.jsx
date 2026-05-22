import React from "react";
import "../styles/about.css";

const About = () => {

const demoImages = [

"https://images.unsplash.com/photo-1500648767791-00dcc994a43?q=80&w=1200&auto=format&fit=crop",

"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",

"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",

"https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1200&auto=format&fit=crop",

"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"

];

const profileImg =
demoImages[
Math.floor(
Math.random()*demoImages.length
)
];

return (

<section className="about">

<div className="about-top">

<div className="about-image">

<img
src={profileImg}
alt="Photographer"
/>

</div>

<div className="about-content">

<p className="small-title">

FOUNDER & PHOTOGRAPHER

</p>

<h1>

Hi, I'm <span>Suvam</span>

</h1>

<div className="gold-line"></div>

<p>

Photography, for me, is not just about taking pictures.
It's about feeling the moment, connecting with people,
and preserving emotions that last forever.

</p>

<p>

What started as a passion has become my life's purpose.
With over five years behind the lens, I've had the honor
of capturing love stories across India and beyond.

</p>

<p>

Every wedding, every smile, every tear —
it inspires me to tell your story beautifully.

</p>

<h3 className="signature">

Suvam

</h3>

</div>

</div>

<div className="values">

<p className="values-small">

WHAT WE BELIEVE IN

</p>

<h2>

Our <span>Values</span>

</h2>

<div className="cards">

<div className="card">
<h3>♡</h3>
<h4>Authenticity</h4>
<p>We capture real emotions and genuine moments.</p>
</div>

<div className="card">
<h3>◇</h3>
<h4>Creativity</h4>
<p>We see beauty in little things.</p>
</div>

<div className="card">
<h3>👥</h3>
<h4>Connection</h4>
<p>We build a connection with your story.</p>
</div>

<div className="card">
<h3>🛡</h3>
<h4>Commitment</h4>
<p>We preserve memories with care.</p>
</div>

</div>

</div>

</section>

)

}

export default About;