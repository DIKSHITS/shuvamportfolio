import React from "react";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import OurCraft from "./components/OurCraft";
import Philosophy from "./components/Philosophy";
import Journey from "./components/Journey";
import Approach from "./components/Approach";
import Portfolio from "./components/Portfolio";
import Experiences from "./components/Experiences";
import Stories from "./components/Stories";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {
Routes,
Route
} from "react-router-dom";


/* HOME PAGE */

const Home=()=>{

return(

<>

<Hero/>

<About/>

<Philosophy/>

<Journey/>

<Approach/>

</>

)

}


/* ABOUT PAGE */

const AboutPage=()=>{

return(

<>

<About/>

</>

)

}


/* OUR CRAFT PAGE */

const CraftPage=()=>{

return(

<>

<OurCraft/>

</>

)

}


/* PORTFOLIO PAGE */

const PortfolioPage=()=>{

return(

<>

<Portfolio/>

</>

)

}


/* EXPERIENCES PAGE */

const ExperiencePage=()=>{

return(

<>

<Experiences/>

</>

)

}


/* STORIES PAGE */

const StoriesPage=()=>{

return(

<>

<Stories/>

</>

)

}


/* CONTACT PAGE */

const ContactPage=()=>{

return(

<>

<Contact/>

</>

)

}


function App(){

return(

<>

<Navbar/>

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
path="/about"
element={<AboutPage/>}
/>

<Route
path="/our-craft"
element={<CraftPage/>}
/>

<Route
path="/portfolio"
element={<PortfolioPage/>}
/>

<Route
path="/experiences"
element={<ExperiencePage/>}
/>

<Route
path="/stories"
element={<StoriesPage/>}
/>

<Route
path="/contact"
element={<ContactPage/>}
/>

</Routes>

<Footer />

</>

)

}

export default App;