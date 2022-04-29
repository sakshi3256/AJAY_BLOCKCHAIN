import React, { Component } from 'react';


const one = require('./static/img/rooms/1.jpg').default;
const two = require('./static/img/rooms/2.jpg').default;
const three = require('./static/img/rooms/3.jpg').default;
const four = require('./static/img/rooms/4.jpg').default;
const five = require('./static/img/rooms/5.jpg').default;
const six = require('./static/img/rooms/6.jpg').default;


export const Search = () =>(
    <div>
    <header class="header-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="logo">
                        <a href="/">
                            <h3 style={{color : 'white'}}>BROKERAGE</h3>
                        </a>
                    </div>
                    <ul class="main-menu">
                        
                        <li><a href="/">Home</a></li>
                        <li><a href="/search">Search Results</a></li>
                        <li><a href="/about">Categories</a></li>
                        
                        <li><a href="/contact">Contact</a></li>

                        <li class="top-social">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                        </li>
                    </ul>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </div>
        </div>
    </header>

    <section class="hero-section set-bg search-result" data-setbg={require('./static/img/bg.jpg').default} style={{backgroundImage: 'url('+ require('./static/img/bg.jpg').default +') '}}>
        <div class="container hero-text text-white">
            <h2>Search Results</h2>
        </div>
    </section>


    <div class="filter-search search-opt">
        <div class="container ">
            <div class="row">
                <div class="col-lg-12">
                    <form class="filter-form">
                        <div class="location">
                            <p>Location</p>
                            <select class="filter-location">
                                <option value="">Mumbai</option>
                                <option value="">Navi Mumbai</option>
                                <option value="">Goa</option>
                            </select>
                        </div>
                        <div class="search-type">
                            <p>Property Type</p>
                            <select class="filter-property">
                                <option value="">House</option>
                                <option value="">Plot</option>
                                <option value="">Rooms</option>
                            </select>
                        </div>
                        <div class="price-range">
                            <p>Price</p>
                            <div class="range-slider">
                                <div id="slider-range">
                                    <span tabindex="0"
                                        class="ui-slider-handle ui-corner-all ui-state-default slider-left">50k</span>
                                    <span tabindex="0"
                                        class="ui-slider-handle ui-corner-all ui-state-default slider-right">300k</span>
                                </div>
                            </div>
                        </div>
                        <div class="bedrooms">
                            <p>Bedrooms</p>
                            <div class="room-filter-pagi">
                                <div class="bf-item">
                                    <input type="radio" name="room" id="room-1"/>
                                    <label for="room-1">1</label>
                                </div>
                                <div class="bf-item">
                                    <input type="radio" name="room" id="room-2"/>
                                    <label for="room-2">2</label>
                                </div>
                                <div class="bf-item">
                                    <input type="radio" name="room" id="room-3"/>
                                    <label for="room-3">3</label>
                                </div>
                                <div class="bf-item">
                                    <input type="radio" name="room" id="room-4"/>
                                    <label for="room-4">4+</label>
                                </div>
                            </div>
                        </div>
                        <div class="bathrooms">
                            <p>Bathrooms</p>
                            <div class="room-filter-pagi">
                                <div class="bf-item">
                                    <input type="radio" name="bathroom" id="bathroom-1"/>
                                    <label for="bathroom-1">1</label>
                                </div>
                                <div class="bf-item">
                                    <input type="radio" name="bathroom" id="bathroom-2"/>
                                    <label for="bathroom-2">2</label>
                                </div>
                                <div class="bf-item">
                                    <input type="radio" name="bathroom" id="bathroom-3"/>
                                    <label for="bathroom-3">3</label>
                                </div>
                                <div class="bf-item">
                                    <input type="radio" name="bathroom" id="bathroom-4"/>
                                    <label for="bathroom-4">4+</label>
                                </div>
                            </div>
                        </div>
                        <div class="search-btn">
                            <button type="submit"><i class="flaticon-search"></i>Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="map-section">
        <div class="container-fluid">
            <div class="row">
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15083.016125678292!2d72.88198944413556!3d19.074593667346953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1565552209408!5m2!1sen!2sin" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>


    <section class="hotel-rooms spad-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 p-45">
                    <div class="found-items">
                        <h4>We found <span>6</span> properties</h4>
                        <select class="date-select">
                            <option value="0">Date New to Old</option>
                            <option value="1">Old</option>
                            <option value="2">New</option>
                        </select>
                    </div>
                </div>
            </div>
           <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="room-items">
                        <div class="room-img set-bg" data-setbg="img/rooms/1.jpg" style={{backgroundImage: 'url(' + one + ')',}}>
                            <a href="#" class="room-content">
                                <i class="flaticon-heart"></i>
                            </a>
                        </div>
                        <div class="room-text">
                            <div class="room-details">
                                <div class="room-title">
                                    <h5> House with beautiful garden and terrace</h5>
                                    <a href="#"><i class="flaticon-placeholder"></i> <span>Location</span></a>
                                    <a href="#" class="large-width"><i class="flaticon-cursor"></i> <span>Show on
                                            Map</span></a>
                                </div>
                            </div>
                            <div class="room-features">
                          <div class="room-info">
                              <div class="size">
                                  <p>Lot Size</p>
                                  <img src={require('./static/img/rooms/size.png').default} alt="" />
                                  <i class="flaticon-bath"></i>
                                  <span>2061 sqft</span>
                              </div>
                              <div class="beds">
                                  <p>Beds</p>
                                  <img src={require('./static/img/rooms/bed.png').default} alt=""/>
                                  <span>6</span>
                              </div>
                              <div class="baths">
                                  <p>Baths</p>
                                  <img src={require('./static/img/rooms/bath.png').default} alt=""/>
                                  <span>2</span>
                              </div>
                              <div class="garage">
                                  <p>Garage</p>
                                  <img src={require('./static/img/rooms/garage.png').default} alt="" />
                                  <span>1</span>
                              </div>
                          </div>
                            </div>
                            <div class="room-price">
                                <p>For Sale</p>
                                <span>$325,000</span>
                            </div>
                            <a href="#" class="site-btn btn-line">View Property</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="room-items">
                        <div class="room-img set-bg" data-setbg="img/rooms/2.jpg" style={{backgroundImage: 'url(' + two + ')',}}>
                            <a href="#" class="room-content">
                                <i class="flaticon-heart"></i>
                            </a>
                        </div>
                        <div class="room-text">
                            <div class="room-details">
                                <div class="room-title">
                                    <h5> Stylish House with swimming pool and garden</h5>
                                    <a href="#"><i class="flaticon-placeholder"></i> <span>Location</span></a>
                                    <a href="#" class="large-width"><i class="flaticon-cursor"></i> <span>Show on
                                            Map</span></a>
                                </div>
                            </div>
                            <div class="room-features">
                          <div class="room-info">
                              <div class="size">
                                  <p>Lot Size</p>
                                  <img src={require('./static/img/rooms/size.png').default} alt="" />
                                  <i class="flaticon-bath"></i>
                                  <span>1561 sqft</span>
                              </div>
                              <div class="beds">
                                  <p>Beds</p>
                                  <img src={require('./static/img/rooms/bed.png').default} alt="" />
                                  <span>8</span>
                              </div>
                              <div class="baths">
                                  <p>Baths</p>
                                  <img src={require('./static/img/rooms/bath.png').default} alt="" />
                                  <span>2</span>
                              </div>
                              <div class="garage">
                                  <p>Garage</p>
                                  <img src={require('./static/img/rooms/garage.png').default} alt="" />
                                  <span>1</span>
                              </div>
                          </div>
                            </div>
                            <div class="room-price">
                                <p>For Sale</p>
                                <span>$235,000</span>
                            </div>
                            <a href="#" class="site-btn btn-line">View Property</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="room-items">
                        <div class="room-img set-bg" data-setbg="img/rooms/3.jpg" style={{backgroundImage: 'url(' + three + ')',}}>
                            <a href="#" class="room-content">
                                <i class="flaticon-heart"></i>
                            </a>
                        </div>
                        <div class="room-text">
                            <div class="room-details">
                                <div class="room-title">
                                    <h5>Country Style House with beautiful garden and swimming pool</h5>
                                    <a href="#"><i class="flaticon-placeholder"></i> <span>Location</span></a>
                                    <a href="#" class="large-width"><i class="flaticon-cursor"></i> <span>Show on
                                            Map</span></a>
                                </div>
                            </div>
                            <div class="room-features">
                          <div class="room-info">
                              <div class="size">
                                  <p>Lot Size</p>
                                  <img src={require('./static/img/rooms/size.png').default} alt=""/>
                                  <i class="flaticon-bath"></i>
                                  <span>2561 sqft</span>
                              </div>
                              <div class="beds">
                                  <p>Beds</p>
                                  <img src={require('./static/img/rooms/bed.png').default} alt="" />
                                  <span>9</span>
                              </div>
                              <div class="baths">
                                  <p>Baths</p>
                                  <img src={require('./static/img/rooms/bath.png').default} alt=""/>
                                  <span>2</span>
                              </div>
                              <div class="garage">
                                  <p>Garage</p>
                                  <img src={require('./static/img/rooms/garage.png').default} alt=""/>
                                  <span>1</span>
                              </div>
                          </div>
                            </div>
                            <div class="room-price">
                                <p>For Sale</p>
                                <span>$445,000</span>
                            </div>
                            <a href="#" class="site-btn btn-line">View Property</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="room-items">
                        <div class="room-img set-bg" data-setbg="img/rooms/4.jpg" style={{backgroundImage: 'url(' + four + ')',}}>
                            <a href="#" class="room-content">
                                <i class="flaticon-heart"></i>
                            </a>
                        </div>
                        <div class="room-text">
                            <div class="room-details">
                                <div class="room-title">
                                    <h5>Country  House with beautiful garden and terrace</h5>
                                    <a href="#"><i class="flaticon-placeholder"></i> <span>Location</span></a>
                                    <a href="#" class="large-width"><i class="flaticon-cursor"></i> <span>Show on
                                            Map</span></a>
                                </div>
                            </div>
                            <div class="room-features">
                          <div class="room-info">
                              <div class="size">
                                  <p>Lot Size</p>
                                  <img src={require('./static/img/rooms/size.png').default} alt="" />
                                  <i class="flaticon-bath"></i>
                                  <span>2691 sqft</span>
                              </div>
                              <div class="beds">
                                  <p>Beds</p>
                                  <img src={require('./static/img/rooms/bed.png').default} alt="" />
                                  <span>10</span>
                              </div>
                              <div class="baths">
                                  <p>Baths</p>
                                  <img src={require('./static/img/rooms/bath.png').default} alt=""/>
                                  <span>2</span>
                              </div>
                              <div class="garage">
                                  <p>Garage</p>
                                  <img src={require('./static/img/rooms/garage.png').default} alt=""/>
                                  <span>1</span>
                              </div>
                          </div>
                            </div>
                            <div class="room-price">
                                <p>For Sale</p>
                                <span>$500,000</span>
                            </div>
                            <a href="#" class="site-btn btn-line">View Property</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="room-items">
                        <div class="room-img set-bg" data-setbg="img/rooms/5.jpg" style={{backgroundImage: 'url(' + five + ')',}}>
                            <a href="#" class="room-content">
                                <i class="flaticon-heart"></i>
                            </a>
                        </div>
                        <div class="room-text">
                            <div class="room-details">
                                <div class="room-title">
                                    <h5>Country Style House with beautiful garden and terrace</h5>
                                    <a href="#"><i class="flaticon-placeholder"></i> <span>Location</span></a>
                                    <a href="#" class="large-width"><i class="flaticon-cursor"></i> <span>Show on
                                            Map</span></a>
                                </div>
                            </div>
                            <div class="room-features">
                          <div class="room-info">
                              <div class="size">
                                  <p>Lot Size</p>
                                  <img src={require('./static/img/rooms/size.png').default} alt=""/>
                                  <i class="flaticon-bath"></i>
                                  <span>3561 sqft</span>
                              </div>
                              <div class="beds">
                                  <p>Beds</p>
                                  <img src={require('./static/img/rooms/bed.png').default} alt="" />
                                  <span>7</span>
                              </div>
                              <div class="baths">
                                  <p>Baths</p>
                                  <img src={require('./static/img/rooms/bath.png').default} alt="" />
                                  <span>2</span>
                              </div>
                              <div class="garage">
                                  <p>Garage</p>
                                  <img src={require('./static/img/rooms/garage.png').default} alt="" />
                                  <span>1</span>
                              </div>
                          </div>
                            </div>
                            <div class="room-price">
                                <p>For Sale</p>
                                <span>$645,000</span>
                            </div>
                            <a href="#" class="site-btn btn-line">View Property</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="room-items">
                        <div class="room-img set-bg" data-setbg="img/rooms/6.jpg" style={{backgroundImage: 'url(' + six + ')',}} >
                            <a href="#" class="room-content">
                                <i class="flaticon-heart"></i>
                            </a>
                        </div>
                        <div class="room-text">
                            <div class="room-details">
                                <div class="room-title">
                                    <h5> House with beautiful garden and terrace</h5>
                                    <a href="#"><i class="flaticon-placeholder"></i> <span>Location</span></a>
                                    <a href="#" class="large-width"><i class="flaticon-cursor"></i> <span>Show on
                                            Map</span></a>
                                </div>
                            </div>
                            <div class="room-features">
                          <div class="room-info">
                              <div class="size">
                                  <p>Lot Size</p>
                                  <img src={require('./static/img/rooms/size.png').default} alt="" />
                                  <i class="flaticon-bath"></i>
                                  <span>2561 sqft</span>
                              </div>
                              <div class="beds">
                                  <p>Beds</p>
                                  <img src={require('./static/img/rooms/bed.png').default} alt="" />
                                  <span>9</span>
                              </div>
                              <div class="baths">
                                  <p>Baths</p>
                                  <img src={require('./static/img/rooms/bath.png').default} alt="" />
                                  <span>2</span>
                              </div>
                              <div class="garage">
                                  <p>Garage</p>
                                  <img src={require('./static/img/rooms/garage.png').default} alt=""/>
                                  <span>1</span>
                              </div>
                          </div>
                      </div>
                            <div class="room-price">
                                <p>For Sale</p>
                                <span>$345,000</span>
                            </div>
                            <a href="#" class="site-btn btn-line">View Property</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </section>

    
    <footer class="footer-section p-40">
        <div class="container">
           <div class="row p-20">
                <div class="col-lg-12 text-center">
                    <div class="copyright" >Copyright &copy;<script>document.write(new Date().getFullYear());
                        </script> <span style={{color: 'white'}}> All rights reserved | This Project is made  
                        <i class="fa fa-heart-o" aria-hidden="true"></i> by Team under guidance   
                        </span>

                    </div>
                </div>
            </div>
        </div>
    </footer>

    </div>

)
