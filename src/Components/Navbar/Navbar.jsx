import React from 'react'


export default function Navbar() {
  return (
   <>
   <nav className="navbar navbar-expand-lg  bg-black fixed-top   ">
  <div className="container-fluid">
    <button className="m-auto navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className=" main-color fa-solid fa-stethoscope   fa-2x fa-beat pt-2"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 py-2">
        <li className="nav-item">
          <a className="nav-link  main-color main_link  active pe-2" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_color  main-color " href="#about">About</a>
        </li>
        <li>
        <i className=" main-color fa-solid fa-stethoscope small_logo  fa-beat-fade pt-4 fa-2xl mx-2"></i>

        </li>
        <li className="nav-item">
          <a className="nav-link link_color  main-color " href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_color  main-color  ps-lg-2" href="#contact">Contact</a>
        </li>
     
       
      </ul>
     
    </div>
  </div>
</nav>
   </>
  )
}
