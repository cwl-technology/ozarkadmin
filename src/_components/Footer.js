"use client"

import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import api from '@/_config/config';


function Footer() {
    const [solutionList, setSolutionList] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const res = await api.get("/solution/get_solution_list");
            setSolutionList(res.data.data);
        } catch (err) {
            console.log(err);
        }
    }

    console.log(solutionList);

    return (
        <>

            <div className="footer">
                <div className="container footer-top">
                    <div className="row g-5">
                        <div className="col-12 col-md-7 col-lg-5 footer-about">
                            <div className="footer-contact pt-3 text-start d-flex flex-column">
                                <div className='d-flex align-items-center'>
                                <img src="/assets/images/logo1.png" alt="Ozark Logo" className="logo_default" width={"70px"} /><img src="/assets/images/logo2.png" alt="Ozark Logo" className="logo_default" width={"200px"} />
                                </div>
                                <p className="info" style={{marginLeft:"0.5rem"}}>Ozark provides expert financial services to help businesses thrive. Our offerings include bookkeeping, tax compliance, payroll, financial automation, and virtual CFO solutions.</p>
                            </div>

                            {/* <p className='info d-flex'>Social Share:
                                <Link href="#"><i className="bi bi-facebook"></i></Link>
                                <Link href="#"><i className="bi bi-twitter"></i></Link>
                                <Link href="#"><i className="bi bi-pinterest"></i></Link>
                                <Link href="#"><i className="bi bi-linkedin"></i></Link>
                            </p> */}
                        </div>
                        <div className="col-12 col-md-5 col-lg-2">
                            <h4>Get a quote</h4>
                            <p className="info mb-0">Our phone number</p>
                            <p>+91 6398798204</p>

                            <p className="info mb-0">Our Location</p>
                            <p className='mb-0'>A108 Adam Street</p>
                            <p>New York, NY 535022</p>
                        </div>
                        <div className="col-12 col-lg-5 footer-links">
                            <div className="row">
                                <div className="col-12 col-md-6 mb-3">
                                    <h4>Our Solutions</h4>
                                    <ul>
                                        {
                                            solutionList?.map((ele,ind) =>
                                                <li key={ind} className='pb-0'><Link href={`/solution/${ele.solution_slug}`}>{ele.solution_name}</Link></li>)
                                        }
                                    </ul>
                                </div>

                                <div className="col-12 col-md-6">
                                    <h4>Quick Links!</h4>
                                    <ul>
                                        <li className='pb-0'><Link href="/contact/contact-us">Contact</Link></li>
                                        <li className='pb-0'><Link href="/social-corporate-responsibility">Social Responsibility</Link></li>
                                        <li className='pb-0'><Link href="/life-at-ozark">Life At Ozark</Link></li>
                                        <li className='pb-0'><Link href="/about/our-story">Our Story</Link></li>
                                        <li className='pb-0'><Link href="/about/vision-and-value">Vision and Values</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container copyright text-center mt-4">
                    <p> <span>Copyright @2025</span><strong className="sitename px-1">Ozark & co.</strong><span>| All right reserved.</span>
                    </p>
                </div>

            </div>
        </>
    )
}

export default Footer