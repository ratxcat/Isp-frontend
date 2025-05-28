"use client"
import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import { ReactSVG } from 'react-svg';
import "aos/dist/aos.css";
import Link from 'next/link';
function BlogTwo() {
    useEffect(() => {
        AOS.init({
            disableMutationObserver: true,
            once: true,
        });
    }, []);
    return (
        <div>
            <div className="rts-blog-area rts-section-gap position-relative">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12 mb--25">
                            <div className="blog-title-two-center text-center">
                                <h2 className="title">From the Blog</h2>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up"
                        >
                            <div className="single-blog-area-start border-none ">
                                <Link href="/blog-grid/protecting-your-business" className="thumbnail">
                                    <img src="assets/images/blog/01.webp" alt="blog_iamge" />
                                </Link>
                                <div className="inner-content-area">
                                    <div className="top-area">
                                        <span>Cloud Migration</span>
                                        <Link href="/blog-grid/protecting-your-business">
                                            <h3 className="title animated fadeIn">
                                                Future of cloud computing
                                            </h3>
                                        </Link>
                                        <p className="disc">
                                            How do you create compelling presentations that wow your
                                            colleagues and impress your managers?
                                        </p>
                                        <div className="bottom-author-area">
                                            <img src="assets/images/testimonials/01.png" alt="author" />
                                            <div className="author-area-info">
                                                <h6 className="title">Marcus Freeman</h6>
                                                <span>24 Sept 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="300"
                        >
                            <div className="single-blog-area-start border-none">
                                <Link href="/blog-grid/protecting-your-business" className="thumbnail">
                                    <img src="assets/images/blog/02.webp" alt="blog_iamge" />
                                </Link>
                                <div className="inner-content-area">
                                    <div className="top-area">
                                        <span>UX Design</span>
                                        <Link href="/blog-grid/protecting-your-business">
                                            <h3 className="title animated fadeIn">
                                                UX review presentations
                                            </h3>
                                        </Link>
                                        <p className="disc">
                                            How do you create compelling presentations that wow your
                                            colleagues and impress your managers?
                                        </p>
                                        <div className="bottom-author-area">
                                            <img src="assets/images/testimonials/02.png" alt="author" />
                                            <div className="author-area-info">
                                                <h6 className="title">Mular Freeman</h6>
                                                <span>24 Sept 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="500"
                        >
                            <div className="single-blog-area-start border-none">
                                <Link href="/blog-grid/protecting-your-business" className="thumbnail">
                                    <img src="assets/images/blog/03.webp" alt="blog_iamge" />
                                </Link>
                                <div className="inner-content-area">
                                    <div className="top-area">
                                        <span>Cyber Security</span>
                                        <Link href="/blog-grid/protecting-your-business">
                                            <h3 className="title animated fadeIn">
                                                Protecting your business
                                            </h3>
                                        </Link>
                                        <p className="disc">
                                            How do you create compelling presentations that wow your
                                            colleagues and impress your managers?
                                        </p>
                                        <div className="bottom-author-area">
                                            <img src="assets/images/testimonials/07.png" alt="author" />
                                            <div className="author-area-info">
                                                <h6 className="title">Kamis Freeman</h6>
                                                <span>24 Sept 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Link href="#" className="rts-btn btn-border">
                                View More Blog
                                <ReactSVG
                                    src="assets/images/service/icons/13.svg"
                                    alt="arrow"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogTwo