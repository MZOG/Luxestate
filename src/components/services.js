import React from "react"
import Container from "./container"

const Services = () => {
    return(
        <Container additionalClass="services">
            <h2>Services</h2>
            <p className="lead">
                In this space market-facing, yet UI work flows , or bake it in. Red flag we need a first agile at the end of the day.
            </p>
            <div className="services-container">
                <div className="image">
                    <img src="https://dummyimage.com/500x500/96bece/96bece&text=+" alt=""/>
                </div>

                <div className="services-items">
                    <div className="item">
                        <h3>Renting</h3>
                        <p>In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence</p>
                    </div>

                    <div className="item">
                        <h3>Selling</h3>
                        <p>In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence</p>
                    </div>

                    <div className="item">
                        <h3>Building</h3>
                        <p>In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Services;