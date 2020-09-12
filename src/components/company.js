import React from "react"
import Container from "./container"

const Company = () => (
    <Container additionalClass="our-company">
        <div className="our-company_left">
            <h2>
                Our’s Company <span>Statistics</span>
            </h2>

            <p>
                In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence.
            </p>

            <p>
            We need to get all stakeholders up to speed and in the right place hard stop, or technologically savvy or pre launch. Pro-sumer software commitment to the cause offline this discussion and wiggle room blue sky. Beef up teams were able to drive adoption and awareness. Screw the pooch killing it.
            </p>
        </div>

        <div className="our-company_right">
            <div className="stats">
                <div className="stats-item">
                    <p className="number">
                        748
                    </p>
                    <p>Appartments</p>
                </div>

                <div className="stats-item">
                    <p className="number">
                        3854
                    </p>
                    <p>Clients</p>
                </div>

                <div className="stats-item">
                    <p className="number">
                        24
                    </p>
                    <p>Employees</p>
                </div>

                <div className="stats-item">
                    <p className="number">
                        14
                    </p>
                    <p>Awards</p>
                </div>
            </div>
        </div>
    </Container>
)

export default Company;