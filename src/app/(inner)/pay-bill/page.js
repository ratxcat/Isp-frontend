
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import CtaOne from "@/components/cta/CtaOne";

export default function Home() {
    return (
        <div className='#'>
            {/* <HeaderTwo /> */}

            <>
                {/* Payment Banner Area */}
                <div className="rts-career-banner-area rts-section-gap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="career-banner-wrapper">
                                    <h1 className="title">Easy & Secure Internet Bill Payments</h1>
                                    <p className="disc">
                                        Manage your Internet subscription with ease. We offer a variety of secure payment options, transparent billing, and dedicated support to ensure you stay connected without hassle.
                                    </p>
                                    <a href="#" className="rts-btn btn-primary btn-bold">
                                        Pay Your Bill
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 pl--30 pl_md--15 pl_sm--10 pt_md--30 pt_sm--30">
                                <div
                                    className="thumbnail-top jarallax thumbnail-consultancy"
                                    data-speed=".85"
                                >
                                    <img
                                        className="jarallax-img"
                                        src="assets/images/industry/11.webp"
                                        alt="payment"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Methods & Benefits */}
                <div className="bg-gradient-one-industry">
                    <div className="consultancy-bottom rts-section-gap career-two-section">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 pr--40 pr_md--10 pr_sm--10 mb_md--30 mb_sm--25">
                                    <div className="thumbnail-consultancy jarallax">
                                        <img
                                            className="jarallax-img"
                                            src="assets/images/industry/02.webp"
                                            alt="consultancy"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="career-right-two-wrapper">
                                        <h2 className="title">
                                            Flexible Payment Options
                                        </h2>
                                        <p>
                                            Choose from multiple payment methods to suit your convenience. Our platform is designed for security, speed, and simplicity.
                                        </p>
                                        <div className="check-wrapper-main">
                                            <div className="single-wrapper">
                                                <div className="check-wrapper">
                                                    <div className="single-check">
                                                        <img src="assets/images/service/01.svg" alt="service" />
                                                        <p>Credit/Debit Card Payments</p>
                                                    </div>
                                                    <div className="single-check">
                                                        <img src="assets/images/service/01.svg" alt="service" />
                                                        <p>Online Banking & UPI</p>
                                                    </div>
                                                    <div className="single-check">
                                                        <img src="assets/images/service/01.svg" alt="service" />
                                                        <p>Wallets & Mobile Payments</p>
                                                    </div>
                                                    <div className="single-check">
                                                        <img src="assets/images/service/01.svg" alt="service" />
                                                        <p>Auto-Pay Setup</p>
                                                    </div>
                                                    <div className="single-check">
                                                        <img src="assets/images/service/01.svg" alt="service" />
                                                        <p>In-Store Payments</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Support & Assistance */}
                    <div className="consultancy-bottom rts-section-gapBottom career-two-section">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="career-right-two-wrapper">
                                        <h2 className="title">
                                            Dedicated Payment Support
                                        </h2>
                                        <p>
                                            Our support team is available to help you with payment queries, billing issues, and refunds. We are committed to making your payment experience smooth and secure.
                                        </p>
                                        <div className="check-wrapper-main">
                                            <div className="single-wrapper">
                                                <div className="check-wrapper">
                                                    <div className="single-check">
                                                       <img src="assets/images/service/01.svg" alt="service" />
                                                        <p>24/7 Payment Assistance</p>
                                                    </div>
                                                    <div className="single-check">
                                                         <img src="assets/images/service/01.svg" alt="service" />
                                                        <p>Instant Payment Confirmation</p>
                                                    </div>
                                                    <div className="single-check">
                                                      <img src="assets/images/service/01.svg" alt="service" />
                                                        <p>Secure Transactions</p>
                                                    </div>
                                                    <div className="single-check">
                                                        <img src="assets/images/service/01.svg" alt="service" />
                                                        <p>Easy Refunds & Dispute Resolution</p>
                                                    </div>
                                                    <div className="single-check">
                                                       <img src="assets/images/service/01.svg" alt="service" />
                                                        <p>Detailed Billing History</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 pl--40 pl_md--15 pl_sm--10 mt_md--30 mt_sm--30">
                                    <div className="thumbnail-consultancy jarallax">
                                        <img
                                            className="jarallax-img"
                                            src="assets/images/industry/03.webp"
                                            alt="consultancy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Benefits Area */}
                <div className="industry-serviuce-area rts-section-gap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="career-right-two-wrapper industry">
                                    <h2 className="title">
                                        Why Pay With Us?
                                    </h2>
                                    <p className="more">
                                        Experience hassle-free payments and uninterrupted internet services with our advanced billing platform.
                                    </p>
                                    <div className="check-wrapper-main">
                                        <div className="single-wrapper">
                                            <div className="check-wrapper">
                                                <div className="single-check">
                                                     <img src="assets/images/service/01.svg" alt="service" />
                                                    <p>Real-Time Payment Updates</p>
                                                </div>
                                                <div className="single-check">
                                                     <img src="assets/images/service/01.svg" alt="service" />
                                                    <p>Transparent Billing</p>
                                                </div>
                                                <div className="single-check">
                                                     <img src="assets/images/service/01.svg" alt="service" />
                                                    <p>No Hidden Charges</p>
                                                </div>
                                                <div className="single-check">
                                                    <img src="assets/images/service/01.svg" alt="service" />
                                                    <p>Renewal Reminders</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="thumbnail-industry-thumbnail">
                                    <div className="thumbnail-left left-small ">
                                        <img src="assets/images/industry/06.webp" alt="industry" />
                                    </div>
                                    <div className="thumbnail-left top">
                                        <img src="assets/images/industry/07.webp" alt="industry" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

            {/* <CtaOne />
            <FooterOne />
            <BackToTop /> */}
        </div>
    );
}
