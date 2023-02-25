// import React from 'react'
// import { useParams } from "react-router-dom"
// import axios from "axios"
// import './css/bootstrap.css'
// // import './css/font-awesome.min.css'
// import './css/style.css'
// import './css/responsive.css'
// import './images/hero-bg.jpg'


// export default function Resto_page(props) {

//   const { id } = useParams()
//   var store = JSON.parse(localStorage.getItem("resto"));
//   let r_name = ''
//   let r_add = ''
//   let r_ph = ''
//   let r_desc = ''
//   let r_email = ''
//   let r_open = ''
//   let r_close = ''

//   if(id == 'query'){
//     r_name = store.rname
//     r_add = store.radd
//     r_ph = store.rph
//     r_desc = store.desc
//     r_email = store.remail
//     r_open = store.open
//     r_close = store.close
//   }
//   else{
//     for(var i in props.restos){
//       console.log(props.restos[i])
//       if(props.restos[i].sno == id){
//         r_name = props.restos[i].rname
//         r_add = props.restos[i].radd
//         r_ph = props.restos[i].rph
//         r_desc = props.restos[i].desc
//         r_email = props.restos[i].remail
//         r_open = props.restos[i].open
//         r_close = props.restos[i].close
//       }
//     }
//   }







//   return (
    
//     <div>
//       <style dangerouslySetInnerHTML={{__html: "\n        .menu_img{\n            display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n        }\n    " }} />
//       {/* Basic */}
//       <meta charSet="utf-8" />
//       <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//       {/* Mobile Metas */}
//       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
//       {/* Site Metas */}
//       <meta name="keywords" content />
//       <meta name="description" content />
//       <meta name="author" content />
//       <link rel="shortcut icon" href="images/favicon.png" type />
//       <title> Feane </title>
//       {/* bootstrap core css */}
//       <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
//       {/*owl slider stylesheet */}
//       <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
//       {/* nice select  */}
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css" integrity="sha512-CruCP+TD3yXzlvvijET8wV5WxxEh5H8P4cmz0RFbKK6FlZ2sYl3AEsKlLPHbniXKSrDdFewhbmBK5skbdsASbQ==" crossOrigin="anonymous" />
//       {/* font awesome style */}
//       <link href="css/font-awesome.min.css" rel="stylesheet" />
//       {/* Custom styles for this template */}
//       <link href="css/style.css" rel="stylesheet" />
//       {/* responsive style */}
//       <link href="css/responsive.css" rel="stylesheet" />
//       <div className="hero_area">
//         <div className="bg-box">
//           <img src="https://drive.google.com/uc?export=view&id=107BduI7CLDvCrVWo_ZsJ06vdT0CnG13q" alt="" />
//         </div>
//         {/* header section strats */}
//         <header className="header_section">
//           <div className="container">
//             <nav className="navbar navbar-expand-lg custom_nav-container ">
//               <a className="navbar-brand" href="index.html">
//                 <span>
//                   RestoHopper
//                 </span>
//               </a>
//               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className> </span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav  mx-auto ">
//                   <li className="nav-item">
//                     <a className="nav-link" href="index(changed).html">Home </a>
//                   </li>
//                   <li className="nav-item active">
//                     <a className="nav-link" href="menu(changed).html">Menu <span className="sr-only">(current)</span> </a>
//                   </li>
//                 </ul>
//                 <div className="user_option">
//                   <a href className="user_link">
//                     <i className="fa fa-user" aria-hidden="true" />
//                   </a>
//                   {/*<a class="cart_link" href="#">
//               <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style="enable-background:new 0 0 456.029 456.029;" xml:space="preserve">
//                 <g>
//                   <g>
//                     <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
//                  c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
//                   </g>
//                 </g>
//                 <g>
//                   <g>
//                     <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
//                  C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
//                  c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
//                  C457.728,97.71,450.56,86.958,439.296,84.91z" />
//                   </g>
//                 </g>
//                 <g>
//                   <g>
//                     <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
//                  c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
//                   </g>
//                 </g>
//                 <g>
//                 </g>
//                 <g>
//                 </g>
//                 <g>
//                 </g>
//                 <g>
//                 </g>
//                 <g>
//                 </g>
//                 <g>
//                 </g>
//                 <g>
//                 </g>
//                 <g>
//                 </g>
//                 <g>
//                 </g>
//                 <g>
//                 </g>
//                 <g>
//                 </g>
//                 <g>
//                 </g>
//                 <g>
//                 </g>
//                 <g>
//                 </g>
//                 <g>
//                 </g>
//               </svg>
//             </a>*/}
//                   <form className="form-inline">
//                     <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
//                       <i className="fa fa-search" aria-hidden="true" />
//                     </button>
//                   </form>
//                   {/*<a href="" class="order_online">
//               Order Online
//             </a>*/}
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </header>
//         {/* end header section */}
//       </div>
//       {/* food section */}
//       <section className="food_section layout_padding">
//         <div className="container">
//           <div className="heading_container heading_center">
//             <h1>{r_name}</h1>
//             <p>{r_desc}</p>
//             <h2>
//               Our Menu
//             </h2>
//           </div>
//           <div className="filters-content">
//             <div className="row grid">
//               <div className="menu_img">
//                 <img src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt33736603_quantized.png" /></div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* end food section */}
//       {/* footer section */}
//       <footer className="footer_section">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4 footer-col">
//               <div className="footer_contact">
//                 <h4>
//                   Contact Us
//                 </h4>
//                 <div className="contact_link_box">
//                   <a href>
//                     <i className="fa fa-map-marker" aria-hidden="true" />
//                     <span>
//                       {r_add}
//                     </span>
//                   </a>
//                   <a href>
//                     <i className="fa fa-phone" aria-hidden="true" />
//                     <span>
//                       Call +91 {r_ph}
//                     </span>
//                   </a>
//                   <a href>
//                     <i className="fa fa-envelope" aria-hidden="true" />
//                     <span>
//                       {r_email}
//                     </span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4 footer-col">
//               <div className="footer_detail">
//                 <a href className="footer-logo">
//                   Feane
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-4 footer-col">
//               <h4>
//                 Opening Hours
//               </h4>
//               <p>
//                 Everyday
//               </p>
//               <p>
//                 {r_open} - {r_close}
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>
//       {/* footer section */}
//       {/* jQery */}
//       {/* popper js */}
//       {/* bootstrap js */}
//       {/* owl slider */}
//       {/* isotope js */}
//       {/* nice select */}
//       {/* custom js */}
//       {/* Google Map */}
//       {/* End Google Map */}
//     </div>

// )
// }


import React from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom";

import './css/bootstrap.css'
// import './css/font-awesome.min.css'
import './css/style.css'
import './css/responsive.css'
import './images/hero-bg.jpg'


export default function Resto_page(props) {

  const { id } = useParams()
  var store = JSON.parse(localStorage.getItem("resto"));
  let r_name = ''
  let r_add = ''
  let r_ph = ''
  let r_desc = ''
  let r_email = ''
  let r_open = ''
  let r_close = ''
  let r_img = ''
  let r_menu = ''

  if(id == 'query'){
    r_name = store.rname
    r_add = store.radd
    r_ph = store.rph
    r_desc = store.desc
    r_email = store.remail
    r_open = store.open
    r_close = store.close
    r_img = store.rimg
    r_menu = store.menu
  }
  else{
    for(var i in props.restos){
      console.log(props.restos[i])
      if(props.restos[i].sno == id){
        r_name = props.restos[i].rname
        r_add = props.restos[i].radd
        r_ph = props.restos[i].rph
        r_desc = props.restos[i].desc
        r_email = props.restos[i].remail
        r_open = props.restos[i].open
        r_close = props.restos[i].close
        r_img = props.restos[i].rimg
        r_menu = props.restos[i].menu
      }
    }
  }







  return (
    
    <div>
      <style dangerouslySetInnerHTML={{__html: "\n        .menu_img{\n            display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n        }\n    " }} />
      {/* Basic */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {/* Mobile Metas */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      {/* Site Metas */}
      <meta name="keywords" content />
      <meta name="description" content />
      <meta name="author" content />
      <link rel="shortcut icon" href="images/favicon.png" type />
      <title> RestoHopper </title>
      {/* bootstrap core css */}
      <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
      {/*owl slider stylesheet */}
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
      {/* nice select  */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css" integrity="sha512-CruCP+TD3yXzlvvijET8wV5WxxEh5H8P4cmz0RFbKK6FlZ2sYl3AEsKlLPHbniXKSrDdFewhbmBK5skbdsASbQ==" crossOrigin="anonymous" />
      {/* font awesome style */}
      <link href="css/font-awesome.min.css" rel="stylesheet" />
      {/* Custom styles for this template */}
      <link href="css/style.css" rel="stylesheet" />
      {/* responsive style */}
      <link href="css/responsive.css" rel="stylesheet" />
      <div className="hero_area">
        <div className="bg-box">
          <img src={r_img} alt="" />
        </div>
        {/* header section strats */}
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <span>
                  RestoHopper
                </span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className> </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  mx-auto ">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home </Link>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="menu(changed).html">Menu <span className="sr-only">(current)</span> </a>
                  </li>
                </ul>
                <div className="user_option">
                  <a href className="user_link">
                    <i className="fa fa-user" aria-hidden="true" />
                  </a>
                  {/*<a class="cart_link" href="#">
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style="enable-background:new 0 0 456.029 456.029;" xml:space="preserve">
                <g>
                  <g>
                    <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                 c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                 C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                 c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                 C457.728,97.71,450.56,86.958,439.296,84.91z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                 c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                  </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </svg>
            </a>*/}
                  <form className="form-inline">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </form>
                  {/*<a href="" class="order_online">
              Order Online
            </a>*/}
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* end header section */}
      </div>
      {/* food section */}
      <section className="food_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h1>{r_name}</h1>
            <p>{r_desc}</p>
            <h2>
              Our Menu
            </h2>
          </div>
          <div className="filters-content">
            <div className="row grid">
              <div className="menu_img">
                <img src={r_menu} /></div>
            </div>
          </div>
        </div>
      </section>
      {/* end food section */}
      {/* footer section */}
      <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-col">
              <div className="footer_contact">
                <h4>
                  Contact Us
                </h4>
                <div className="contact_link_box">
                  <a href>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>
                      {r_add}
                    </span>
                  </a>
                  <a href>
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span>
                      Call +91 {r_ph}
                    </span>
                  </a>
                  <a href>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <span>
                      {r_email}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <div className="footer_detail">
                <a href className="footer-logo">
                  RestoHopper
                </a>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <h4>
                Opening Hours
              </h4>
              <p>
                Everyday
              </p>
              <p>
                {r_open} - {r_close}
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* footer section */}
      {/* jQery */}
      {/* popper js */}
      {/* bootstrap js */}
      {/* owl slider */}
      {/* isotope js */}
      {/* nice select */}
      {/* custom js */}
      {/* Google Map */}
      {/* End Google Map */}
    </div>

)
}