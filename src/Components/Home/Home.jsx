import React from 'react'
import Form from "../Form/Form"
import { motion } from 'framer-motion'
//************************************ */
import Services from '../Services/Services'
//************************************************* */
import video from '../../assets/videos/body.mp4'
//************************************************* */
import about from '../../assets/Images/banner.jpg'
import Maps from '../Maps/Maps'
import Footer from '../Footer/Footer'


export default function Home() {
  return (
    <>
      <section id="home" >
        <video src={video} loop muted autoplay typeof='video/mp4' playsInline></video>
        <div className='position-absolute start-0 bottom-0 end-0 top-0 overlay '>
          <div className="caption  ">
            <motion.h1
              initial={{ x: -1200 }}
              animate={{ x: 0 }}
              transition={{ duration: 3 }}
              className='  title' >Elfayroz Clinic</motion.h1>


            <motion.h4
              initial={{ x: 800 }}
              animate={{ x: 0 }}
              transition={{ duration: 3 }} className='specialized'>Specializing in physical therapy</motion.h4>
          </div>
        </div>
      </section>

      <section id="about">
        <div class=" text-center py-5">
          <div class="heading position-relative py-5">
            <h2 class="text-muted ">About Us</h2>
            <h3 class="position-absolute start-50 top-50 translate-middle">About Us</h3>
          </div>
          <div className="container">
            <div className="row">
              <div className=" col-md-6 col-10 m-auto">
                <div className="pic">
                  <img src={about} className='w-100 rounded-4' alt="physical therapy" />
                </div>
              </div>
              <div className="  col-md-6 col-10 m-auto text-start  mt-5 ">
                <div className="clinc-details">
                  <p className='lead'>Welcome to <span className='main-color'>Elfayroz Clinc</span> where we are dedicated to enhancing your well-being through personalized and compassionate physical therapy care.
                    Our clinic is a trusted destination for individuals seeking expert rehabilitation and recovery services.</p>
                  <p className='lead'>We specialize in creating tailored treatment plans that address a wide range of musculoskeletal conditions, injuries, and rehabilitation needs.  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services/>

      <section id="contact" className='my-5 py-5'>
        <div class="heading position-relative  ">
          <h2 class="text-muted text-center appointmentTitle ">APPOINTMENT</h2>
          <h3 class="position-absolute start-50 top-50 translate-middle">APPOINTMENT</h3>
        </div>
        <div >
          <p className='lead main-color fs-3 mb-5 text-center '>we will call you to ensure the reservation</p>
          <Form />
        </div>
      </section>
      <section className='contact-color' >
        <div className={` bg-transparent  container  `}>
          <div className="row py-5 gy-5  ">
            <div className={`card col-12  col-sm-12 col-md-6 col-lg-3 text-center  position-relative`}>
              <div className={`icon rounded-circle d-flex align-items-center justify-content-center position-absolute  start-50  border  `}>

                <a target='_blank' href="tel:+020 155 535 2362" className='main-color'>  <i class="fa-solid fa-phone fa-xl"></i>  </a>
              </div>
              <div className="number bg-white px-3 py-5   rounded-4 border border-white  ">
                <h4 className={`info_title`}>Contact With Phone Number</h4>
                <a target='_blank' href="tel:+020 155 535 2362" className={`info d-block text-decoration-none mb-2 pb-lg-4`}>(+020) 155 535 2362</a>
              </div>
            </div>
            <div className={`card col-12   col-sm-12 col-md-6 col-lg-3 text-center  position-relative`}>
              <div className={`icon email rounded-circle d-flex align-items-center justify-content-center position-absolute  start-50  border  `}>

                <a target='_blank' href='mailto:wellness.clinic23@gmail.com' className='main-color' ><i class="fa-solid fa-envelope fa-xl"></i> </a>
              </div>
              <div className="Email bg-white px-3 py-5   rounded-4 border border-white  ">
                <h4 className={`info_title`}>Email</h4>
                <a target='_blank' href='mailto:wellness.clinic23@gmail.com' className={`info d-block text-decoration-none mb-2 pb-lg-4`}>wellness.clinic23@gmail.com</a>
              </div>
            </div>
            <div className={`card col-12 col-sm-12 col-md-6 col-lg-3 text-center  position-relative`}>
              <div className={`icon location rounded-circle d-flex align-items-center justify-content-center position-absolute  start-50  border  `}>

                <a target='_blank' className='main-color' href="https://www.google.com/maps/dir//%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9+%D8%A7%D9%84%D9%81%D9%8A%D8%B1%D9%88%D8%B2+%D9%84%D9%84%D8%B9%D9%84%D8%A7%D8%AC+%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A,+%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1+%D9%85%D9%86+%D8%B1%D9%85%D8%B6%D8%A7%D9%86%D8%8C,+10th+of+Ramadan+City+1,+Al-Sharqia+Governorate+7063123%E2%80%AD/@30.2925202,31.7441267,16.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x1457fdd413dbf4b9:0x8853d4763897eb42!2m2!1d31.7478348!2d30.2920399!3e0?entry=ttu" >

                  <i class="fa-solid fa-location-dot fa-xl"></i>
                </a>
              </div>
              <div className="number bg-white px-3 py-5   rounded-4 border border-white  ">
                <h4 className={`info_title`}>Location</h4>
                <a target='_blank' href="https://www.google.com/maps/dir//%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9+%D8%A7%D9%84%D9%81%D9%8A%D8%B1%D9%88%D8%B2+%D9%84%D9%84%D8%B9%D9%84%D8%A7%D8%AC+%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A,+%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1+%D9%85%D9%86+%D8%B1%D9%85%D8%B6%D8%A7%D9%86%D8%8C,+10th+of+Ramadan+City+1,+Al-Sharqia+Governorate+7063123%E2%80%AD/@30.2925202,31.7441267,16.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x1457fdd413dbf4b9:0x8853d4763897eb42!2m2!1d31.7478348!2d30.2920399!3e0?entry=ttu" className={`info d-block text-decoration-none mb-2 `}>
                  10 th of Ramadan City 1, Al-Sharqia Elfayroz Mall
                </a>

              </div>
            </div>
            <div className={`card col-12 col-sm-12 col-md-6 col-lg-3 text-center  position-relative`}>
              <div className={`icon location rounded-circle d-flex align-items-center justify-content-center position-absolute  start-50  border  `}>
                <a className='main-color'  >
                  <i class="fa-solid fa-clock fa-xl"></i>
                </a>
              </div>
              <div className="number bg-white px-3 py-5   rounded-4 border border-white  ">
                <h4 className={`info_title`}>Work Times</h4>
                <a className={`info d-block text-decoration-none  d-block  `}>
                  Every Day Except Friday
                </a>
                <a className={`info d-block text-decoration-none mb-2 `}>
                  From 3 PM TO 10 PM
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='Maps'>
          <Maps/>
      </section>


      <footer>

<Footer/>
      </footer>

    </>
  )
}

