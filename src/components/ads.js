import React from "react";
import Container from "./container"
import {Link} from "gatsby"

const Ads = () => {
    return(
        <div className="ads">
        <Container>
            <div className="ad">
                <div className="ad-image">
                    <img src="https://dummyimage.com/550x330/8da4be/96bece&text=+" alt=""/>
                    <div className="location">
                        <div className="item-icon">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>

                        <p>Katowice, Poland</p>
                    </div>
                </div>
                <div className="ad-content">
                    <h2>Super Add</h2>
                    <p>In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence</p>
                </div>
            </div>

            <div className="ad reverse">
                <div className="ad-image">
                    <img src="https://dummyimage.com/550x330/8da4be/96bece&text=+" alt=""/>
                    <div className="location">
                        <div className="item-icon">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>

                        <p>Warszawa, Poland</p>
                    </div>
                </div>
                <div className="ad-content">
                    <h2>Super Awesome Add</h2>
                    <p>In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence</p>
                </div>
            </div>

            <div className="ad">
                <div className="ad-image">
                    <img src="https://dummyimage.com/550x330/8da4be/96bece&text=+" alt=""/>
                </div>
                <div className="ad-content">
                    <h2>Super Awesome Add</h2>
                    <p>In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence</p>
                    <div className="more">
                        <Link to="/">Show Me More</Link>
                    </div>
                </div>
            </div>
        </Container>
        </div>
    )
}

export default Ads