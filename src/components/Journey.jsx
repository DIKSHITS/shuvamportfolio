import React from "react";
import "../styles/journey.css";

import {
FaCamera,
FaGlobe,
FaStar,
FaHeart
} from "react-icons/fa";

const Journey = () => {

return(

<section className="journey">

<div className="flower left-flower">
✿
</div>

<div className="flower right-flower">
✿
</div>

<h5>

OUR JOURNEY IN NUMBERS

</h5>

<div className="journey-wrapper">

<div className="item">

<FaCamera/>

<h1>350+</h1>

<p>
Weddings
<br/>
Captured
</p>

</div>

<div className="divider"></div>

<div className="item">

<FaGlobe/>

<h1>25+</h1>

<p>
Cities
<br/>
Traveled
</p>

</div>

<div className="divider"></div>

<div className="item">

<FaStar/>

<h1>5+</h1>

<p>
Years of
<br/>
Experience
</p>

</div>

<div className="divider"></div>

<div className="item">

<FaHeart/>

<h1>100%</h1>

<p>
Stories Told
<br/>
with Heart
</p>

</div>

</div>

</section>

)

}

export default Journey;