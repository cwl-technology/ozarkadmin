

import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <>

            <div className="footer">
                <div className="container footer-top">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <div className="footer-contact pt-3">
                                <p>info@ozarko.com</p>
                                <p className="info">Ozark is a leading provider of expert financial solutions designed to empower businesses and streamline their operations. We offer a comprehensive range of services including bookkeeping, tax compliance, payroll, financial automation, and virtual CFO solutions.</p>
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
                                        <li><Link href="/social-corporate-responsibility">Social Responsibility</Link></li>
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