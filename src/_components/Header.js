


import Link from 'next/link'
import React from 'react'

function Header() {


    return (
        <>
            
            <div className="header_area" id="header_contents">
                <section className="header header_default style_five get_sticky_header">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
                                <div className="header_logo_box">
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
                                                        <li><Link href="/solution/bookkeepping">Bookkeeping</Link></li>
                                                        <li><Link href="">Year-End Accounts </Link></li>
                                                        <li><Link href="">Tax Compliance </Link></li>
                                                        <li><Link href="#">Payroll Services</Link></li>
                                                        <li><Link href="#">Virtual CFO</Link></li>
                                                        <li><Link href="#">Financial Automation</Link></li>
                                                        <li><Link href="#">AP/AR Processes </Link></li>
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
                                                            <li><Link href="#">Mission </Link></li>
                                                            <li><Link href="/about/vision">Vision & Values</Link></li>
                                                            <li><Link href="#">Partners</Link></li>
                                                            <li><Link href="#">CSR </Link></li>
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
                                                            <li><Link href="/success_story/client_testimonial">Client Testimonials</Link></li>
                                                            <li><Link href="/success_story/case_study">Case Studies</Link></li>
                                                            <li><Link href="#">Industry-Specific Results </Link></li>
                                                        </ul>
                                                    </ul>
                                                </li>

                                                <li
                                                    className="menu-item menu-item-has-children  mega_menu nav-item">
                                                    <a href="#" className="dropdown-toggle nav-link"><span>Contact Us</span>
                                                        <span className="fa fa-angle-down"></span>
                                                    </a>
                                                    <ul className="dropdown-menu width_60_percentage">
                                                        <ul>
                                                            <li><Link href="/contact/contact_form">Contact Form </Link></li>
                                                            <li><Link href="#">Office Locations (UK, India)</Link></li>
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
                                                            <li><Link href="#">Our Expertise </Link></li>
                                                            <li><Link href="#">Certifications </Link></li>
                                                            <li><Link href="#">Global Reach </Link></li>
                                                            <li><Link href="#">Client Satisfaction </Link></li>
                                                            <li><Link href="#">Team Approach</Link></li>
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
                                                            <li><Link href="/resources/blog">Blogs/Insights</Link></li>
                                                            <li><Link href="#">Whitepapers</Link></li>
                                                            <li><Link href="#">Guides </Link></li>
                                                            <li><Link href="#">Tax Season Checklist</Link></li>
                                                        </ul>
                                                    </ul>
                                                </li>

                                                <li className="menu-item  nav-item"><a className="dropdown-toggle nav-link" href="#">Life At
                                                    Ozark</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="header_right_content">
                                        <ul>

                                            <li>
                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn gradient-btn"> Get A
                                                    Quote </a>
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