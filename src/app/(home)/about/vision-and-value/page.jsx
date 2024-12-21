
import api from '@/_config/config';
import React from 'react'


export const dynamic = 'force-dynamic'

const getData = async () => {
    try {
        const res = await api.get("/vision_and_value/get_vision_value");
        return res.data.data;
    } catch (err) {
        console.log(err);
    }
}

export const generateMetadata = async () => {
    try {
        const data = await getData();
        return {
            title: data?.title,
            keywords: data?.keyword,
            description: data?.meta_description
        }
    } catch (err) {
        console.log(err);
    }
}

export default async function page() {
    const data = await getData();
    
    return (
        <>
            <div id="content" className="site-content ">
                <div className="page_header_default style_one ">
                    <div className="parallax_cover">
                        <div className="simpleParallax">
                            <img src="/assets/images/page-header-default.jpg" alt="bg_image" className="cover-parallax" />
                        </div>
                    </div>
                    <div className="page_header_content">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="banner_title_inner">
                                        <div className="title_page">
                                            Our Vision & Values
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="breadcrumbs creote">
                                        <ul className="breadcrumb m-auto">
                                            <li><a href="index-2.html">Home</a></li>
                                            <li className="active">Our Vision & Values</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="service-icon-section bg_light_1">
                    <div className="pd_top_90"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title_all_box style_one text-center dark_color">
                                    <div className="title_sections">
                                        <h2 className="title">Our Mission & Vision</h2>
                                    </div>
                                    <div className="pd_bottom_20"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="simple_image_boxes parallax_cover height_264px">
                                    <img src="/assets/images/icon-img-ab-1.jpg" className="simp_img cover-parallax" alt="image" />
                                </div>
                                <div className="pd_bottom_20"></div>
                                <div className="icon_box_all style_three">
                                    <div className="icon_content ">
                                        <div className="icon">
                                            <span className=" icon-bow-and-arrow"></span>
                                        </div>
                                        <div className="txt_content">
                                            <h3><a href="#" target="_blank" rel="nofollow">{data?.subheading1}</a></h3>
                                            <p>{data?.content1}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-0 mt-xl-0">
                                <div className="icon_box_all style_three">
                                    <div className="icon_content ">
                                        <div className="icon">
                                            <span className=" icon-growth"></span>
                                        </div>
                                        <div className="txt_content">
                                            <h3><a href="#" target="_blank" rel="nofollow">{data?.subheading3}</a></h3>
                                            <div dangerouslySetInnerHTML={{__html:data?.description1 || ''}}></div>
                                            <div className="btn_left">
                                                <a href="#" target="_blank" rel="nofollow" className="theme-btn one">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-4 mt-xl-0">
                                <div className="icon_box_all style_three">
                                    <div className="icon_content ">
                                        <div className="icon">
                                            <span className=" icon-binoculars"></span>
                                        </div>
                                        <div className="txt_content">
                                            <h3><a href="#" target="_blank" rel="nofollow">{data?.subheading2}</a></h3>
                                            <p>{data?.content2}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pd_bottom_20"></div>
                                <div className="simple_image_boxes  height_264px">
                                    <img src="/assets/images/icon-img-ab-2.jpg" className="simp_img img-fluid" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pd_top_90"></div>
                </section>

                <section className="service-section-one">
                    <div className="pd_top_90"></div>
                    <div className="default-container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <div className="title_all_box style_one text-center dark_color">
                                    <div className="title_sections">
                                        <div className="title">{data?.main_heading}</div>
                                        <p>{data?.main_content}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="pd_top_10"></div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="icon_box_all  style_eight">
                                    <div className="icon_content">
                                        <div className="icon">
                                            <span className=" icon-support"></span>
                                        </div>
                                        <div className="text_box">
                                            <h2>
                                                <a href="#">
                                                    24/7 Customer support
                                                </a>
                                            </h2>
                                            <p>
                                                The less water you use, the less runoff and water that end up in the
                                                ocean.
                                            </p>
                                        </div>
                                    </div>


                                </div>
                                <div className="pd_bottom_20"></div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="icon_box_all  style_eight">
                                    <div className="icon_content">
                                        <div className="icon">
                                            <span className=" icon-united"></span>
                                        </div>
                                        <div className="text_box">
                                            <h2>
                                                <a href="#">
                                                    Experience Team
                                                </a>
                                            </h2>
                                            <p>
                                                The less water you use, the less runoff and water that end up in the
                                                ocean.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pd_bottom_20"></div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="icon_box_all  style_eight">
                                    <div className="icon_content">
                                        <div className="icon">
                                            <span className=" icon-solution"></span>
                                        </div>
                                        <div className="text_box">
                                            <h2>
                                                <a href="#">
                                                    Smart solutions
                                                </a>
                                            </h2>
                                            <p> The less water you use, the less runoff and water that end up in the
                                                ocean.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pd_bottom_60"></div>
                            </div>
                        </div>
                        <div className="row gutter_30px">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-4 mb-lg-0 mb-xl-0">
                                <div className="simple_image_boxes">
                                    <img src={data?.image1} className="simp_img cover-parallax"
                                        alt="image" />
                                </div>

                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="simple_image_boxes">
                                    <img src={data?.image2} className="simp_img cover-parallax"
                                        alt="image" />
                                </div>

                            </div>
                        </div>
                        <div className="pd_bottom_25"></div>
                        <div dangerouslySetInnerHTML={{__html:data?.main_description || ''}}></div>
                    </div>
                    <div className="pd_bottom_70"></div>
                </section>

                <section className="call-to-action-section">
                    <div className="auto-container">
                        <div className="call_to_action style_two">
                            <div className="image">

                                <img src="/assets/images/sliders/slider-1-2.jpg" className="img-fluid" alt="image" />

                            </div>
                            <div className="auto-container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="left_content">
                                            <div className="main_content">
                                                <h1>Get in Touch!</h1>
                                                <div className="bottom_content">
                                                    <div className="call_content">
                                                        <span className="icon-phone-call1 icon"></span>
                                                        <div className="content_bx">
                                                            <h4>Reach Us At</h4>
                                                            <p><a className="text-white fw-bold" href="tel:+91-8743877462">+91-8743877462</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="image_right">
                                            <img decoding="async" src="/assets/images/cal-img.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="pd_bottom_70"></div>

            </div>
        </>
    )
}