import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Features from '../Components/features'
import "./home.css"
import ProperList from '../Components/ProperList/ProperList'
import FeaturdProperty from '../Components/FeaturdProperty/FeaturdProperty'
import MailList from '../Components/mailList/mailList'
import Footer from '../Components/Footer/footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Features />
        <h1 className="homeTitle">Browse by property type </h1>
        <ProperList />
        <h1 className="homeTitle">Browse by property type </h1>
        <FeaturdProperty />

        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home