import React from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'
export default function Footer() {
  return (
    <>
     <div className={`container-fluid px-0  `}>
        <div className={`row  px-0  g-0  `}>
          <div className={`    col-md-8 ${style.footer_left} bg-dark  d-flex align-items-center justify-content-center px-0  `}>
            <div className={`${style.overlay} w-100 h-100`}  >

              <div className='text-center px-3  '>
                <h5 className={` ${style.pop_400} py-3  `}>READY TO DO THIS</h5>
                <h2 className={`${style.footer_left_inner} main-color`}>Appointment Booking</h2>
                <a  href="#contact" className={`${style.btn} text-decoration-none mb-3   `}> Contact us </a>
              </div>
            </div>
          </div>
          <div className={`${style.bg_right_footer} bg-dark col-md-4  text-center   `}>
            <div className={`${style.overlay_right} w-100 h-100  py-5  d-flex align-items-center justify-content-center`}  >
            <div className="contact">
              <h3 className={` ${style.pop_400}  ms-2  `}>Call Us</h3>
             <a href='mailto:wellness.clinic23@gmail.com' className=' fw-bold  mb-2 d-block text-decoration-none text-white  '>wellness.clinic23@gmail.com</a>
             <a href="tel:+020 155 535 2362" className=' fw-bold  mb-2 d-block text-decoration-none text-white  '><span className='text-white fw-bold '> <span className='main-color'> (+020) </span>155 535 2362 </span></a>
             <div className="social mt-2">
                         <a href='https://www.instagram.com/elfayroz_clinic/' target='_blank'><i className={`fa-brands text-white ms-3 fa-lg  fa-instagram ${style.social_icons}`}> </i></a>
            <a href='https://www.facebook.com/elfayrouz.clinic?mibextid=LQQJ4d' target='_blank'><i className={`fa-brands text-white ms-3 fa-lg  fa-facebook-f ${style.social_icons}`}></i></a>
             </div>
    </div >
            </div>

          </div >
        </div >
      </div >
    </>
  )
}
