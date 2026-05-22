import React from "react";
import "../styles/portfolio.css";

const Portfolio = () => {

const gallery = [

{
src:"https://picsum.photos/seed/portfolio-1/1200/900",
alt:"Demo portfolio image 1"
},
{
src:"https://picsum.photos/seed/portfolio-2/1200/900",
alt:"Demo portfolio image 2"
},
{
src:"https://picsum.photos/seed/portfolio-3/1200/900",
alt:"Demo portfolio image 3"
},
{
src:"https://picsum.photos/seed/portfolio-4/1200/900",
alt:"Demo portfolio image 4"
},
{
src:"https://picsum.photos/seed/portfolio-5/1200/900",
alt:"Demo portfolio image 5"
},
{
src:"https://picsum.photos/seed/portfolio-6/1200/900",
alt:"Demo portfolio image 6"
},
{
src:"https://picsum.photos/seed/portfolio-7/1200/900",
alt:"Demo portfolio image 7"
},
{
src:"https://picsum.photos/seed/portfolio-8/1200/900",
alt:"Demo portfolio image 8"
},
{
src:"https://picsum.photos/seed/portfolio-9/1200/900",
alt:"Demo portfolio image 9"
}

]

return(

<section className="portfolio">

<div className="portfolio-hero">

<p>
PORTFOLIO
</p>

<h1>

Stories We
<span>Captured Forever</span>

</h1>

</div>

<div className="portfolio-grid">

{gallery.map((item,index)=>(

<div className="portfolio-card" key={index}>

<img src={item.src} alt={item.alt} />

<div className="overlay">

<h3>

Luxury Wedding

</h3>

<p>

Timeless Photography

</p>

</div>

</div>

))}

</div>

</section>

)

}

export default Portfolio;