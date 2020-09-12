import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Company from "../components/company"
import ForRent from "../components/forRent"
import HowItWorks from "../components/howItWorks"
import Services from "../components/services"
import Agents from "../components/agents"
import Ads from "../components/ads"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Company />
    <ForRent />
    <HowItWorks />
    <Services />
    <Agents />
    <Ads />
    <Footer />
  </Layout>
)

export default IndexPage
