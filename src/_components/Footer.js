

import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <>


            <section className="client-section bg_dark_1">
                <div className="pd_top_50"></div>
                <div className="container">
                    <div className="row">
                        <div className="client_logo_carousel type_three">
                            <div
                                className="swiper-container swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden"
                                data-swiper="{
                       &quot;autoplay&quot;: {
                         &quot;delay&quot;: 6000
                       },
                       &quot;freeMode&quot;: true,
                       &quot;loop&quot;: true,
                       &quot;speed&quot;: 1000,
                       &quot;centeredSlides&quot;: false,
                       &quot;slidesPerView&quot;: 5,
                       &quot;spaceBetween&quot;: 30,
                       &quot;pagination&quot;: {
                         &quot;el&quot;: &quot;.swiper-pagination&quot;,
                         &quot;clickable&quot;: true
                       },
                        
                       &quot;breakpoints&quot;: {
                          &quot;1200&quot;: {
                             &quot;slidesPerView&quot;: 5
                          },
                          &quot;1024&quot;: {
                           &quot;slidesPerView&quot;: 4
                          },
                         &quot;768&quot;: {
                           &quot;slidesPerView&quot;: 3
                         },
                         &quot;576&quot;: {
                           &quot;slidesPerView&quot;: 2
                         },
                         &quot;250&quot;: {
                          &quot;slidesPerView&quot;: 2
                        },
                         &quot;0&quot;: {
                           &quot;slidesPerView&quot;: 1 
                         }
                       }
                     }">
                                <div className="swiper-wrapper" id="swiper-wrapper-078f82bfc548a261" aria-live="off">
                                    <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 5"
                                        data-swiper-slide-index="0" style={{ width: "204px", marginRight: "30px" }}>
                                        <div className="image text-center">
                                            <img src="/assets/images/CLIENT-logo-w.png" alt="clients-logo" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 5"
                                        data-swiper-slide-index="1" style={{ width: "204px", marginRight: "30px" }}>
                                        <div className="image text-center">
                                            <img src="/assets/images/CLIENT-logo-3-w.png" alt="clients-logo" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide" role="group" aria-label="3 / 5" data-swiper-slide-index="2"
                                        style={{ width: "204px", marginRight: "30px" }}>
                                        <div className="image text-center">
                                            <img src="/assets/images/CLIENT-logo-2-w.png" alt="clients-logo" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide" role="group" aria-label="4 / 5" data-swiper-slide-index="3"
                                        style={{ width: "204px", marginRight: "30px" }}>
                                        <div className="image text-center">
                                            <img src="/assets/images/CLIENT-logo-1-w.png" alt="clients-logo" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide" role="group" aria-label="5 / 5" data-swiper-slide-index="4"
                                        style={{ width: "204px", marginRight: "30px" }}>
                                        <div className="image text-center">
                                            <img src="/assets/images/CLIENT-logo-3-w.png" alt="clients-logo" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pd_bottom_50"></div>
            </section>
            <div className="footer">
                <div className="container footer-top">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <div className="footer-contact pt-3">
                                <p>info@ozarko.com</p>
                                <p className="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sint fugit quibusdam dolorum, dolor dicta molestiae accusamus quia aliquid excepturi!</p>
                            </div>

                            <p className='info d-flex'>Social Share:
                                <Link href="#"><i className="bi bi-facebook"></i></Link>
                                <Link href="#"><i className="bi bi-twitter"></i></Link>
                                <Link href="#"><i className="bi bi-pinterest"></i></Link>
                                <Link href="#"><i className="bi bi-linkedin"></i></Link>
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <h4>Get a quote</h4>
                            <p className="info mb-1">Our phone number</p>
                            <p>+916398798204</p>

                            <p className="info">Our Location</p>
                            <p className='mb-0'>A108 Adam Street</p>
                            <p>New York, NY 535022</p>
                        </div>
                        <div className="col-lg-4 col-md-3 footer-links">
                            <h4>Quick Links!</h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><Link href="#">About us</Link></li>
                                        <li><Link href="#">Social Story</Link></li>
                                        <li><Link href="#">Life At Ozark</Link></li>
                                        <li><Link href="#">Costomer</Link></li>
                                        <li><Link href="#">Terms & Conditions</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><Link href="#">Our Solution</Link></li>
                                        <li><Link href="#">Meet our Experts</Link></li>
                                        <li><Link href="#">Costomer</Link></li>
                                        <li><Link href="#">About Company</Link></li>
                                        <li><Link href="#">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <h4>Our Newsletter</h4>

                        </div>


                    </div>
                </div>
                <div className="container copyright text-center mt-4">
                    <p> <span>Copyright @</span><strong className="sitename px-1">Ozark & co.</strong><span>Designed and Developed by <strong className="sitename px-1">Coder World Labs</strong></span>
                    </p>
                </div>

            </div>
        </>
    )
}

export default Footer