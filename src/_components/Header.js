"use client"

import api from '@/_config/config';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Header() {

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
    return (
        <>

            <div className="header_area" id="header_contents">

                <section className="header header_default style_five get_sticky_header">
                    <div className="navbar d-xl-none d-md-none" id="myTopnav">
                        <div className="mob-logo-box"> <a href="index.html" className="logo navbar-brand"> <img src="/assets/images/logo.png" alt="Ozark Logo" className="logo_default"/> </a> </div>
                        <label htmlFor="togglericon" className="toggler" checked></label>
                        <input type="checkbox" id="togglericon" className="toggler" />
                        <div className="nav at-right"> <a href="#top">Home</a> <a href="#about">About</a>
                            <div className="dropdown">
                                <label htmlFor="toggle-1">Services</label>
                                <input type="checkbox" id="toggle-1" />
                                <ul>
                                    <li><a href="#">Internet Of Things</a></li>
                                    <li><a href="#">Game Development</a></li>
                                    <li><a href="#">Game Design</a></li>
                                    <li><a href="#">History Telling</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <label htmlFor="toggle-2">Social</label>
                                <input type="checkbox" id="toggle-2" />
                                <ul>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Tiktok</a></li>
                                    <li><a href="#">Medium</a></li>
                                </ul>
                            </div>
                            <a href="#">Contact</a> </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
                                <div className="header_logo_box d-xl-block d-none">
                                    <Link href="/" className="logo navbar-brand">
                                        <img src="/assets/images/logo.png" alt="Ozark Logo" className="logo_default" />
                                        {/* <img src="/assets/images/logo.png" alt="Ozark Logo" className="logo__sticky" /> */}
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-3 col-sm-3 col-xs-3 menu_column">
                                <div className="navbar_togglers hamburger_menu"

                                >
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </div>
                                <div className="header_content_collapse">
                                    <div className="header_menu_box">
                                        <div className="navigation_menu">
                                            <ul id="myNavbar" className="navbar_nav">
                                                <li
                                                    className="menu-item menu-item-has-children dropdown mega_menu nav-item">
                                                    <a href="#" className="dropdown-toggle nav-link"><span>Solutions</span>
                                                        <span className="fa fa-angle-down"></span>
                                                    </a>
                                                    <ul className="dropdown-menu width_60_percentage">

                                                        {
                                                            solutionList?.map((ele, ind) => <li key={ind}><Link href={`/solution/${ele.solution_slug}`} >{ele.solution_name}</Link></li>)
                                                        }
                                                    </ul>
                                                </li>

                                                <li
                                                    className="menu-item menu-item-has-children  mega_menu nav-item">
                                                    <a href="#" className="dropdown-toggle nav-link"><span>About Us</span>
                                                        <span className="fa fa-angle-down"></span>
                                                    </a>
                                                    <ul className="dropdown-menu width_60_percentage">


                                                        <ul>
                                                            <li><Link href="/about/our_story">Our Story </Link></li>
                                                            <li><Link href="/about/our_team">Leadership Team </Link></li>
                                                            {/* <li><Link href="#">Mission </Link></li> */}
                                                            <li><Link href="/about/vision">Vision & Values</Link></li>
                                                            {/* <li><Link href="#">Partners</Link></li>
                                                            <li><Link href="#">CSR </Link></li> */}
                                                        </ul>


                                                    </ul>
                                                </li>

                                                <li
                                                    className="menu-item menu-item-has-children mega_menu nav-item">
                                                    <a href="#" className="dropdown-toggle nav-link"><span>Success Stories</span>
                                                        <span className="fa fa-angle-down"></span>
                                                    </a>
                                                    <ul className="dropdown-menu width_60_percentage">
                                                        <ul>
                                                            <li><Link href="/success-story/client-testimonial">Client Testimonials</Link></li>
                                                            <li><Link href="/success-story/case-study">Case Studies</Link></li>
                                                            {/* <li><Link href="#">Industry-Specific Results </Link></li> */}
                                                        </ul>
                                                    </ul>
                                                </li>

                                                <li
                                                    className="menu-item menu-item-has-children  mega_menu nav-item">
                                                    <a href="#" className="dropdown-toggle nav-link"><span>Contact</span>
                                                        <span className="fa fa-angle-down"></span>
                                                    </a>
                                                    <ul className="dropdown-menu width_60_percentage">
                                                        <ul>
                                                            <li><Link href="/contact/contact-us">Contact us </Link></li>
                                                            {/* <li><Link href="#">Office Locations (UK, India)</Link></li> */}
                                                            <li><Link href="/contact/faqs">FAQs </Link></li>
                                                        </ul>
                                                    </ul>
                                                </li>

                                                <li
                                                    className="menu-item menu-item-has-children  mega_menu nav-item">
                                                    <a href="#" className="dropdown-toggle nav-link"><span>Why Choose Us</span>
                                                        <span className="fa fa-angle-down"></span>
                                                    </a>
                                                    <ul className="dropdown-menu width_60_percentage">
                                                        <ul>
                                                            <li><Link href="/why-choose-us/our-expertise">Our Expertise </Link></li>
                                                            {/* <li><Link href="#">Certifications </Link></li>
                                                            <li><Link href="#">Global Reach </Link></li>
                                                            <li><Link href="#">Client Satisfaction </Link></li>
                                                            <li><Link href="#">Team Approach</Link></li> */}
                                                        </ul>
                                                    </ul>
                                                </li>
                                                <li className="menu-item  nav-item"><Link className="dropdown-toggle nav-link"
                                                    href="/career">Careers</Link></li>
                                                <li
                                                    className="menu-item menu-item-has-children  mega_menu nav-item">
                                                    <a href="#" className="dropdown-toggle nav-link"><span>Resources</span>
                                                        <span className="fa fa-angle-down"></span></a>
                                                    <ul className="dropdown-menu width_60_percentage">
                                                        <ul>
                                                            <li><Link href="/blogs">Blogs</Link></li>
                                                            {/* <li><Link href="#">Whitepapers</Link></li>
                                                            <li><Link href="#">Guides </Link></li>
                                                            <li><Link href="#">Tax Season Checklist</Link></li> */}
                                                        </ul>
                                                    </ul>
                                                </li>

                                                <li className="menu-item  nav-item"><Link className="dropdown-toggle nav-link" href="/life-at-ozark">Life@ozark</Link></li>

                                            </ul>
                                        </div>
                                    </div>

                                    <div className="header_right_content">
                                        <ul>
                                            <li>
                                                <Link href="/contact/contact-us" rel="nofollow" className="theme-btn gradient-btn"> Get A
                                                    Quote </Link>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Header