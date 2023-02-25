


import React from 'react'
import { Link } from "react-router-dom";

export default function Home_page() {
  return (
          <div>
            
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            
            <meta name="keywords" content />
            <meta name="description" content />
            <meta name="author" content />
            <link rel="shortcut icon" href="images/favicon.png" type />
            <title> RestoHopper </title>
            
            <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
           
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css" integrity="sha512-CruCP+TD3yXzlvvijET8wV5WxxEh5H8P4cmz0RFbKK6FlZ2sYl3AEsKlLPHbniXKSrDdFewhbmBK5skbdsASbQ==" crossOrigin="anonymous" />
          
            <link href="css/font-awesome.min.css" rel="stylesheet" />
           
            <link href="css/style.css" rel="stylesheet" />
           
            <link href="css/responsive.css" rel="stylesheet" />
            <div className="hero_area">
              <div className="bg-box">
                <img src="images/hero-bg.jpg" alt="" />
              </div>
      
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
                        <li className="nav-item active">
                          <a className="nav-link" href="home(changed).html">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/resto/signup">Add Restaurant</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/user/signin">Sign In</Link>
                        </li>
                        {/*<li class="nav-item">
                    <a class="nav-link" href="book.html">Book Table</a>
                  </li>*/}
                      </ul>
                      <div className="user_option">
                        <a href className="user_link">
                          <i className="fa fa-user" aria-hidden="true" />
                        </a>
                        <a className="cart_link" href="#">
                          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style={{enableBackground: 'new 0 0 456.029 456.029'}} xmlSpace="preserve">
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
                        </a>
                        <form className="form-inline">
                          <Link to="/query">
                          <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                            <i className="fa fa-search" aria-hidden="true" />
                          </button>
                          </Link>
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
              {/* slider section */}
              <section className="slider_section ">
                <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="container ">
                        <div className="row">
                          <div className="col-md-7 col-lg-6 ">
                            <div className="detail-box">
                              <h1>
                                Fast Food Restaurant
                              </h1>
                              <p>
                                Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                              </p>
                              {/*<div class="btn-box">
                          <a href="" class="btn1">
                            Order Now
                          </a>
                        </div>*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <div className="container ">
                        <div className="row">
                          <div className="col-md-7 col-lg-6 ">
                            <div className="detail-box">
                              <h1>
                                Fast Food Restaurant
                              </h1>
                              <p>
                                Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                              </p>
                              <div className="btn-box">
                                <a href className="btn1">
                                  Order Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container ">
                        <div className="row">
                          <div className="col-md-7 col-lg-6 ">
                            <div className="detail-box">
                              <h1>
                                Fast Food Restaurant
                              </h1>
                              <p>
                                Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                              </p>
                              <div className="btn-box">
                                <a href className="btn1">
                                  Order Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <ol className="carousel-indicators">
                      <li data-target="#customCarousel1" data-slide-to={0} className="active" />
                      <li data-target="#customCarousel1" data-slide-to={1} />
                      <li data-target="#customCarousel1" data-slide-to={2} />
                    </ol>
                  </div>
                </div>
              </section>
              {/* end slider section */}
            </div>
            {/* offer section */}
            {/*<section class="offer_section layout_padding-bottom">
        <div class="offer_container">
          <div class="container ">
            <div class="row">
              <div class="col-md-6  ">
                <div class="box ">
                  <div class="img-box">
                    <img src="images/o1.jpg" alt="">
                  </div>
                  <div class="detail-box">
                    <h5>
                      Tasty Thursdays
                    </h5>
                    <h6>
                      <span>20%</span> Off
                    </h6>
                    <a href="">
                      Order Now <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style="enable-background:new 0 0 456.029 456.029;" xml:space="preserve">
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
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6  ">
                <div class="box ">
                  <div class="img-box">
                    <img src="images/o2.jpg" alt="">
                  </div>
                  <div class="detail-box">
                    <h5>
                      Pizza Days
                    </h5>
                    <h6>
                      <span>15%</span> Off
                    </h6>
                    <a href="">
                      Order Now <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style="enable-background:new 0 0 456.029 456.029;" xml:space="preserve">
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
            {/* end offer section */}
            {/* food section */}
            <section className="food_section layout_padding-bottom">
              <div className="container">
                <div className="heading_container heading_center">
                  <h2>
                    Popular Choices
                  </h2>
                </div>
                {/*<ul class="filters_menu">
            <li class="active" data-filter="*">All</li>
            <li data-filter=".burger">Burger</li>
            <li data-filter=".pizza">Pizza</li>
            <li data-filter=".pasta">Pasta</li>
            <li data-filter=".fries">Fries</li>
          </ul>*/}
                <div className="filters-content">
                  <div className="row grid">
                    <div className="col-sm-6 col-lg-4 all pizza">
                      <div className="box">
                        <div>
                          <div className="img-box">
                            <img src="images/f1.png" alt="" />
                          </div>
                          <div className="detail-box">
                            <h5>
                            <Link to="/restopage/1">Subway</Link>
                            </h5>
                            <p>
                            Subway is an American multinational fast food restaurant franchise that specializes in submarine sandwiches, wraps, salads and drinks                            </p>
                            <div className="options">
                              <h6>
                              subway@gmail.com
                              </h6>
                              <a href>
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style={{enableBackground: 'new 0 0 456.029 456.029'}} xmlSpace="preserve">
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
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 all burger">
                      <div className="box">
                        <div>
                          <div className="img-box">
                            <img src="images/f2.png" alt="" />
                          </div>
                          <div className="detail-box">
                            <h5>
                            <Link to="/restopage/2">Dominos' Pizza</Link>
                            </h5>
                            <p>
                            Domino's Pizza, Inc., trading as Domino's, is an American multinational pizza restaurant chain founded in 1960
                            </p>
                            <div className="options">
                              <h6>
                              dominospizza@gmail.com
                              </h6>
                              <a href>
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style={{enableBackground: 'new 0 0 456.029 456.029'}} xmlSpace="preserve">
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
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 all pizza">
                      <div className="box">
                        <div>
                          <div className="img-box">
                            <img src="images/f3.png" alt="" />
                          </div>
                          <div className="detail-box">
                            <h5>
                            <Link to="/restopage/3">Pizza Hut</Link>
                            </h5>
                            <p>
                            Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas
                            </p>
                            <div className="options">
                              <h6>
                              PizzaHut@gmail.com
                              </h6>
                              <a href>
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style={{enableBackground: 'new 0 0 456.029 456.029'}} xmlSpace="preserve">
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
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 all pasta">
                      <div className="box">
                        <div>
                          <div className="img-box">
                            <img src="images/f4.png" alt="" />
                          </div>
                          <div className="detail-box">
                            <h5>
                            <Link to="/restopage/4">Papa Johns</Link>
                            </h5>
                            <p>
                            It is the fourth largest pizza delivery restaurant chain in the United States, with headquarters in Louisville, Kentucky
                            </p>
                            <div className="options">
                              <h6>
                              PapaJohns@gmail.com
                              </h6>
                              <a href>
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style={{enableBackground: 'new 0 0 456.029 456.029'}} xmlSpace="preserve">
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
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 all fries">
                      <div className="box">
                        <div>
                          <div className="img-box">
                            <img src="images/f5.png" alt="" />
                          </div>
                          <div className="detail-box">
                            <h5>
                            <Link to="/restopage/5">Toscano</Link>
                            </h5>
                            <p>
                            Fusing the best of old and new world Italian cuisine, Toscano offers an eclectic menu from gourmet pizzas to multi-course dinners
                            </p>
                            <div className="options">
                              <h6>
                              Toscano@gmail.com
                              </h6>
                              <a href>
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style={{enableBackground: 'new 0 0 456.029 456.029'}} xmlSpace="preserve">
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
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 all pizza">
                      <div className="box">
                        <div>
                          <div className="img-box">
                            <img src="images/f6.png" alt="" />
                          </div>
                          <div className="detail-box">
                            <h5>
                            <Link to="/restopage/6">Pasta street</Link>
                            </h5>
                            <p>
                            Pasta Street delivers Corporate Lunch Box to your doorstep
                            </p>
                            <div className="options">
                              <h6>
                              PastaStreet@gmail.com
                              </h6>
                              <a href>
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style={{enableBackground: 'new 0 0 456.029 456.029'}} xmlSpace="preserve">
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
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {}
                    {}
                  </div>
                </div>
                <div className="btn-box">
                  <a href>
                    View More
                  </a>
                </div>
              </div>
            </section>
            {/* end food section */}
            {/* about section */}
            <section className="about_section layout_padding">
              <div className="container  ">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="img-box">
                      <img src="images/about-img.png" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="detail-box">
                      <div className="heading_container">
                        <h2>
                          We are RestoHopper
                        </h2>
                      </div>
                      <p>
                      RestoHopper is an Indian multinational restaurant aggregator. RestoHopper provides information, menus and user-reviews of  partner restaurants in select cities
                      </p>
                      <a href>
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end about section */}
            {/* book section */}
            {}
            {/* end client section */}
            {/* footer section */}
            <footer className="footer_section">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 footer-col">
                    {/*<div class="footer_contact">
                <h4>
                  Contact Us
                </h4>
                <div class="contact_link_box">
                  <a href="">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                      Location
                    </span>
                  </a>
                  <a href="">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <span>
                      Call +01 1234567890
                    </span>
                  </a>
                  <a href="">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <span>
                      RestoHopper@gmail.com
                    </span>
                  </a>
                </div>
              </div>*/}
                  </div>
                  <div className="col-md-4 footer-col">
                    <div className="footer_detail">
                      <a href className="footer-logo">
                        RestoHopper
                      </a>
                      <p>
                        
                      </p>
                      <div className="footer_social">
                        <a href>
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                        <a href>
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                        <a href>
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                        <a href>
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                        <a href>
                          <i className="fa fa-pinterest" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*<div class="col-md-4 footer-col">
              <h4>
                Opening Hours
              </h4>
              <p>
                Everyday
              </p>
              <p>
                10.00 Am -10.00 Pm
              </p>
            </div>*/}
                </div>
                <div className="footer-info">
                  {/*<p>
              &copy; <span id="displayYear"></span> All Rights Reserved By
              <a href="https://html.design/">Free Html Templates</a><br><br>
              &copy; <span id="displayYear"></span> Distributed By
              <a href="https://themewagon.com/" target="_blank">ThemeWagon</a>
            </p>*/}
                </div>
              </div>
            </footer>
        
          </div>
  )
      }