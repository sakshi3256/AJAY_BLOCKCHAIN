import React, { Component } from 'react';



export const Contact = () =>(
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
            <h2>Contact Us</h2>
        </div>
    </section>

    <div class="map-section">
        <div class="container-fluid">
            <div class="row">
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15083.016125678292!2d72.88198944413556!3d19.074593667346953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1565552209408!5m2!1sen!2sin" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>

    <section class="contact-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="contact-form">
                        <h4>Get in Touch</h4>
                        <form>
                            <div class="row">
                                <div class="col-lg-6">
                                    <input type="text" class="name" placeholder="Name" required />
                                </div>
                                <div class="col-lg-6">
                                    <input type="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <input type="text" placeholder="Subject" required />
                                    <textarea placeholder="Message" required></textarea>
                                    <button class="site-btn c-btn">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="contact-info">
                        <h4>Contact Details</h4>
                        <ul class="contact-addr">
                            <li><i class="flaticon-placeholder"></i><span>132 Liberty Streetelit </span>
                            </li>
                            <li><i class="flaticon-envelope"></i><span>sakshikulabkar22@gmail.com</span></li>
                            <li><i class="flaticon-smartphone"></i><span>8879551810</span></li>
                        </ul>
                        <p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Monday – Friday: 9 am – 5 pm</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Saturday: 9 am – 1pm</p>
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
