import React from "react"
import Container from "./container"
import {Link} from "gatsby"

const HowItWorks = () => {
    return (
       <Container additionalClass="how-it-works">
           <h2>How it works?</h2>
           <p className="lead">In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. </p>

           <div className="numbers">
               <div className="numbers-item">
                   <h3>01 Find Your Location</h3>
                   <p>
                    In this space market-facing, yet UI work flows , or bake it in. Red flag we neef the day.
                   </p>
                    <Link to="/">Find Location</Link>
               </div>

               <div className="numbers-item">
                   <h3>02 Find Appartment</h3>
                   <p>
                   In this space market-facing, yet UI work flows , or bake it in. Red flag we neef the day.
                   </p>
                    <Link to="/">Find Appartment</Link>
               </div>

               <div className="numbers-item">
                   <h3>03 Make Contact</h3>
                   <p>
                    In this space market-facing, yet UI work flows , or bake it in. Red flag we neef the day.
                   </p>
                    <Link to="/">Make Contact</Link>
               </div>
           </div>
       </Container>
    )
}

export default HowItWorks