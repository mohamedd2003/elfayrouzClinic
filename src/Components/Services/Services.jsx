import React from 'react'
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from 'swiper/react';
//****************************** */
import womenDoc from '../../assets/Images/womenDoc.jpg'
import cupping1 from '../../assets/Images/cupping1.jpg'
import cupping2 from '../../assets/Images/cupping2.jpg'
import cupping3 from '../../assets/Images/cupping3.jpg'
import cupping4 from '../../assets/Images/cupping4.jpg'
import Recovery1 from '../../assets/Images/Recovery1.jpg'
import Recovery2 from '../../assets/Images/Recovery2.jpg'
import Recovery3 from '../../assets/Images/Recovery3.jpg'
import Recovery4 from '../../assets/Images/Recovery4.jpg'
import session1 from '../../assets/Images/session1.jpg'
import session2 from '../../assets/Images/session2.jpg'
import session3 from '../../assets/Images/session3.jpg'
import session4 from '../../assets/Images/session4.jpg'
import slider7 from '../../assets/Images/el-fayroz-clinic6.jpg'
import slider8 from '../../assets/Images/el-fayroz-clinic7.jpg'
import hand from '../../assets/Images/hand.png'



import { EffectCreative } from 'swiper/modules';
export default function Services() {
  return (
    <>
    <section id="services" className='my-5 contact-color py-5 '>
        <section className='my-5 contact-color py-5 '>
          <div class="heading position-relative pt-lg-5">
            <h2 class="text-muted text-center headTitle ">RECOVERY</h2>
            <h3 class="position-absolute start-50 top-50 translate-middle pt-lg-5">RECOVERY</h3>
          </div>
          <div className="  col-md-6 col-10 m-auto text-start  mt-5 ">
            <div className="clinc-details">
              <p className='lead'><span className='main-color'>RECOVERY</span>  refers to the process of allowing the body and mind to rest and repair after physical or mental exertion, promoting optimal
                performance and reducing the risk of injury.
              </p>
            </div>
          </div>
          <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper laptop">
            <SwiperSlide>
              <img src={Recovery1} className='w-100 h-100' alt="sliderPhoto" />
              <div className={`overlay-slider start-0 bottom-0 end-0 top-0 position-absolute  `}>
                <img src={hand} className=' text-end fa-beat-fade w-25 ' />

              </div>

            </SwiperSlide>
            <SwiperSlide><img src={Recovery2} className='w-100 h-100 ' alt="sliderPhoto" /></SwiperSlide>
            <SwiperSlide><img src={Recovery4} className='w-100 h-100' alt="sliderPhoto" /></SwiperSlide>
            <SwiperSlide><img loading='lazy' src={Recovery3} className='w-100 h-100' alt="sliderPhoto" /></SwiperSlide>
            <SwiperSlide><img loading='lazy' src={slider7} className='w-100 h-100' alt="sliderPhoto" /></SwiperSlide>
            <SwiperSlide><img loading='lazy' src={slider8} className='w-100 h-100' alt="sliderPhoto" /></SwiperSlide>
          </Swiper>


          <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ['-125%', 0, -800],
                rotate: [0, 0, -90],
              },
              next: {
                shadow: true,
                translate: ['125%', 0, -800],
                rotate: [0, 0, 90],
              },
            }}
            modules={[EffectCreative]}
            className="mySwiper5 mobile rounded-4"
          >
            <SwiperSlide>
              <img src={Recovery1} className='w-100 h-100' alt="sliderPhoto" />
              <div className={`overlay-slider start-0 bottom-0 end-0 top-0 position-absolute  `}>
                <img src={hand} className=' text-end fa-beat-fade w-25 ' />

              </div>

            </SwiperSlide>
            <SwiperSlide><img  src={Recovery2} className='w-100 h-100 ' alt="sliderPhoto" /></SwiperSlide>
            <SwiperSlide><img loading='lazy' src={Recovery4} className='w-100 h-100' alt="sliderPhoto" /></SwiperSlide>
            <SwiperSlide><img   loading='lazy'   src={Recovery3} className='w-100 h-100' alt="sliderPhoto" /></SwiperSlide>
            <SwiperSlide><img   loading='lazy'  src={slider7} className='w-100 h-100' alt="sliderPhoto" /></SwiperSlide>
            <SwiperSlide><img   loading='lazy'  src={slider8} className='w-100 h-100' alt="sliderPhoto" /></SwiperSlide>
          </Swiper>
        </section>
        <div class="heading position-relative pt-lg-5">
          <h2 class="text-muted text-center headTitle ">CUPPING</h2>
          <h3 class="position-absolute start-50 top-50 translate-middle pt-lg-5">CUPPING</h3>
        </div>
        
        <div className="  col-md-6 col-10 m-auto text-start  mt-5 ">
          <div className="clinc-details">
            <p className='lead'><span className='main-color'>CUPPING</span> is a traditional therapy where cups are placed on the skin to create suction, promoting circulation and relieving muscle tension. Its benefits include pain relief, improved blood flow, and relaxation.

            </p>
          </div>
        </div>
        <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper laptop">
          <SwiperSlide>
            <img src={cupping1} className='w-100 h-100' alt="sliderPhoto" />
            <div className={`overlay-slider start-0 bottom-0 end-0 top-0 position-absolute  `}>
              <img src={hand} className=' text-end fa-beat-fade w-25 ' />

            </div>

          </SwiperSlide>
          <SwiperSlide><img src={cupping2} className='w-100 h-100 ' alt="sliderPhoto" /></SwiperSlide>
          <SwiperSlide><img src={womenDoc} className='w-100 h-100 ' alt="sliderPhoto" /></SwiperSlide>
          <SwiperSlide><img loading='lazy' src={cupping3} className='w-100 h-100' alt="sliderPhoto" /></SwiperSlide>
          <SwiperSlide><img loading='lazy' src={cupping4} className='w-100 h-100' alt="sliderPhoto" /></SwiperSlide>
        </Swiper>


        <Swiper
          grabCursor={true}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -800],
              rotate: [180, 0, 0],
            },
            next: {
              shadow: true,
              translate: [0, 0, -800],
              rotate: [-180, 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper4 mobile rounded-4"
        >
          <SwiperSlide>
            <img src={cupping1} className='w-100 h-100' alt="sliderPhoto" />
            <div className={`overlay-slider start-0 bottom-0 end-0 top-0 position-absolute  `}>
              <img src={hand} className=' text-end fa-beat-fade w-25 ' />

            </div>

          </SwiperSlide>
          <SwiperSlide><img src={cupping2} className='w-100 h-100 ' alt="sliderPhoto" /></SwiperSlide>
          <SwiperSlide><img loading='lazy' src={womenDoc} className='w-100 h-100 ' alt="sliderPhoto" /></SwiperSlide>
          <SwiperSlide><img loading='lazy' src={cupping3} className='w-100 h-100' alt="sliderPhoto" /></SwiperSlide>
          <SwiperSlide><img loading='lazy' src={cupping4} className='w-100 h-100' alt="sliderPhoto" /></SwiperSlide>
        </Swiper>

        <section className='my-5 contact-color py-5 '>
          <div class="heading position-relative pt-lg-5">
            <h2 class="text-muted text-center headTitle ">HOME SESSIONS</h2>
            <h3 class="position-absolute start-50 top-50 translate-middle pt-lg-5">HOME SESSIONS</h3>
          </div>
          <div className="  col-md-6 col-10 m-auto text-start  mt-5 ">
            <div className="clinc-details">
              <p className='lead'><span className='main-color'>HOME SESSIONS</span>  offer personalized exercises and rehabilitation techniques tailored to individuals' needs, facilitating recovery and improving mobility from the comfort of their own home
              </p>
            </div>
          </div>
          <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper laptop">
            <SwiperSlide>
              <img src={session1} className='w-100 h-100' alt="sliderPhoto" />
              <div className={`overlay-slider start-0 bottom-0 end-0 top-0 position-absolute  `}>
                <img src={hand} className=' text-end fa-beat-fade w-25 ' />

              </div>

            </SwiperSlide>
            <SwiperSlide><img src={womenDoc} className='w-100 h-100 ' alt="sliderPhoto" /></SwiperSlide>
            <SwiperSlide><img src={session3} className='w-100 h-100' alt="sliderPhoto" /></SwiperSlide>
            <SwiperSlide><img loading='lazy' src={session2} className='w-100 h-100 ' alt="sliderPhoto" /></SwiperSlide>
            <SwiperSlide><img loading='lazy' src={session4} className='w-100 h-100' alt="sliderPhoto" /></SwiperSlide>
          </Swiper>


          <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
              prev: {
                shadow: true,
                origin: 'left center',
                translate: ['-5%', 0, -200],
                rotate: [0, 100, 0],
              },
              next: {
                origin: 'right center',
                translate: ['5%', 0, -200],
                rotate: [0, -100, 0],
              },
            }}
            modules={[EffectCreative]}
            className="mySwiper6 rounded-4 mobile"
          >
           <SwiperSlide>
              <img src={session1} className='w-100 h-100' alt="sliderPhoto" />
              <div className={`overlay-slider start-0 bottom-0 end-0 top-0 position-absolute  `}>
                <img src={hand} className=' text-end fa-beat-fade w-25 ' />

              </div>

            </SwiperSlide>
            <SwiperSlide><img  src={womenDoc} className='w-100 h-100 ' alt="sliderPhoto" /></SwiperSlide>
            <SwiperSlide><img loading='lazy' src={session3} className='w-100 h-100' alt="sliderPhoto" /></SwiperSlide>
            <SwiperSlide><img loading='lazy' src={session2} className='w-100 h-100 ' alt="sliderPhoto" /></SwiperSlide>
            <SwiperSlide><img loading='lazy' src={session4} className='w-100 h-100' alt="sliderPhoto" /></SwiperSlide> 
          </Swiper>
        </section>  
      </section>
    </>
  )
}
