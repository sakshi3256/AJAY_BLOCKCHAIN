import React, { Component } from 'react';

export const About = () =>(
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
            <h2>About Us</h2>
        </div>
    </section>

    <section class="about-us">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-6 about-text-warp">
                    <div class="about-text">
                        <h2>Welcome to homes. The place where you can find your dream.</h2>
                        <p>This real estate agent will sit down with you and work with you to find the house that you can ... Bricks & Beams Hopes & Dreams That's what we sell here at Five Corners Real Estate! .... May your home be a place where friends meet, family gathers, and love grows ...... A realtor welcome canvas to have at every open house!.</p>
                        <a href="#" class="site-btn a-btn">View our Listings</a>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="about-img">
                        <img src={require('./static/img/about-img/1.jpg').default} alt=""/>
                        <img class="l-img" src={require('./static/img/about-img/2.jpg').default} alt=""/>
                        <img class="r-img" src={require('./static/img/about-img/3.jpg').default} alt=""/>
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
