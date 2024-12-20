import React from 'react'
import Navbar from '../Components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faCircleArrowLeft,
  faWalking,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot} from '@fortawesome/free-solid-svg-icons'
import Header from '../Components/Header'
import Footer from '../Components/Footer/footer.jsx'
import MailList from '../Components/mailList/mailList'
import { useState } from 'react'
import './hotel.css'

function Hotel() {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  const handleOpen = (index) => {
    setSliderNumber(index);
    setOpen(true);

  }
  
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    } else {
      newSlideNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }

    setSliderNumber(newSlideNumber)
  };
  return (

    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (<div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove('l')} />
         <div className="slideWrapper">
         <img src={photos[sliderNumber].src} alt="" className="slideImg" />
         </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove('r')} />
        </div>)}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className=" "> Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            <FontAwesomeIcon icon={faWalking} />
            <span>1.5 km from city center</span>
          </span>
          <span className='hotelPriceHighlight'>
            Book now and get 20% off
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImageWrapper" key={i}>
                <img onClick={ () => handleOpen(i)} src={photo.src} alt="hotel" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>

      </div>
      <MailList />

      <div className="container-fluid">
        <Footer />

      </div>
    </div>
  )
}

export default Hotel