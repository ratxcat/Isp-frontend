"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, Autoplay } from "swiper/react";
function Testimonials() {
    return (
        <div>
            {/* testimonials area start */}
            <div className="testimonials-area-start rts-section-gapTop bg-primary position-relative">
                <div className="shape-top-right wow slideInLeft" data-wow-offset={160}>
                    <img
                        loading="lazy"
                        rel="preload"
                        src="assets/images/testimonials/03.png"
                        alt="testimopnials"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-between-wrapper">
                                <h2 className="title">Our Clients</h2>
                                <p className="disc">
                                    Some of our happy clients who have experienced the transformative power of our Internet solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--80">
                        <div className="col-lg-12 ">
                            <div className="swiper mySwiper-Testimonials" dir="ltr">

                                <Swiper
                                    slidesPerView={2}
                                    spaceBetween={0}
                                    loop={true}
                                    autoplay={{
                                        delay: 500,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        // When the viewport is >= 640px
                                        240: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                        // When the viewport is >= 768px
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                        // When the viewport is >= 1024px
                                        1024: {
                                            slidesPerView: 2,
                                            spaceBetween: 0,
                                        },
                                    }}
                                    speed={1000}
                                >
                                    <SwiperSlide>
                                        <div className="single-testimonials-area-one">
                                            <p className="disc">
                                                “Luminous transformed our agricultural business with their
                                                custom software solution. Their team developed an intuitive
                                                crop management system that has increased our yield by 30%
                                                and significantly reduced water waste. Their ongoing support
                                                has been invaluable.”
                                            </p>
                                            <div className="author-wrapper">
                                                <div className="avatar">
                                                    <img

                                                        src="assets/images/testimonials/01.webp"
                                                        alt="testimonails-avatar"
                                                    />
                                                </div>
                                                <div className="information">
                                                    <h6 className="title">Michael Chen</h6>
                                                    <span className="desig">CTO of SwiftPay Financial</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-testimonials-area-one">
                                            <p className="disc">
                                                “Luminous transformed our agricultural business with their
                                                custom software solution. Their team developed an intuitive
                                                crop management system that has increased our yield by 30%
                                                and significantly reduced water waste. Their ongoing support
                                                has been invaluable.”
                                            </p>
                                            <div className="author-wrapper">
                                                <div className="avatar">
                                                    <img

                                                        src="assets/images/testimonials/02.webp"
                                                        alt="testimonails-avatar"
                                                    />
                                                </div>
                                                <div className="information">
                                                    <h6 className="title">Mr.Jakul</h6>
                                                    <span className="desig">CTO of SwiftPay Financial</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-testimonials-area-one">
                                            <p className="disc">
                                                “Luminous transformed our agricultural business with their
                                                custom software solution. Their team developed an intuitive
                                                crop management system that has increased our yield by 30%
                                                and significantly reduced water waste. Their ongoing support
                                                has been invaluable.”
                                            </p>
                                            <div className="author-wrapper">
                                                <div className="avatar">
                                                    <img

                                                        src="assets/images/testimonials/01.webp"
                                                        alt="testimonails-avatar"
                                                    />
                                                </div>
                                                <div className="information">
                                                    <h6 className="title">Leard Joe</h6>
                                                    <span className="desig">CTO of SwiftPay Financial</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-testimonials-area-one">
                                            <p className="disc">
                                                “Luminous transformed our agricultural business with their
                                                custom software solution. Their team developed an intuitive
                                                crop management system that has increased our yield by 30%
                                                and significantly reduced water waste. Their ongoing support
                                                has been invaluable.”
                                            </p>
                                            <div className="author-wrapper">
                                                <div className="avatar">
                                                    <img

                                                        src="assets/images/testimonials/02.webp"
                                                        alt="testimonails-avatar"
                                                    />
                                                </div>
                                                <div className="information">
                                                    <h6 className="title">Chen Joe</h6>
                                                    <span className="desig">CTO of SwiftPay Financial</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonials area end */}
        </div>
    )
}

export default Testimonials