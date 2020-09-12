import React from "react"
import Container from "./container"
import {Link} from "gatsby"

const Footer = () => {
    return(
        <footer>
            <Container>
                <div className="newsletter">
                    <h2>luxestate <span>Explore Real Estate</span></h2>
                    <div className="form">
                        <input type="text" placeholder="Subscribe to our newsletter" />
                        <button>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>

                <div className="links">
                    <div className="links-box">
                        <p className="siteTitle">luxestate</p>

                        <p className="copy">&copy; 2020 - luxestate, <span>All rights reserved.</span></p>
                    </div>

                    <div className="links-box">
                        <div className="title">
                            LUXESTATE
                        </div>

                        <ul>
                            <li><Link to="/">Agents</Link></li>
                            <li><Link to="/">Hunters</Link></li>
                        </ul>
                    </div>

                    <div className="links-box">
                        <div className="title">
                            COMPANY
                        </div>

                        <ul>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">FAQ</Link></li>
                            <li><Link to="/">Contact</Link></li>
                            <li><Link to="/">Social</Link></li>
                        </ul>
                    </div>

                    <div className="links-box">
                        <div className="title">
                            PRODUCT
                        </div>

                        <ul>
                            <li><Link to="/">Appartments</Link></li>
                            <li><Link to="/">How It Works</Link></li>
                        </ul>
                    </div>

                    <div className="links-box">
                        <div className="title">
                            LUXESTATE
                        </div>

                        <ul>
                            <li><Link to="/">Renting</Link></li>
                            <li><Link to="/">Selling</Link></li>
                            <li><Link to="/">Building</Link></li>
                        </ul>
                    </div>
                </div>

            </Container>
        </footer>

    )
}

export default Footer