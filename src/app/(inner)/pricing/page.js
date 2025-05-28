import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import FeatureTwo from "@/components/feature/FeatureTwo";
import TestimonialsFive from "@/components/testimonials/TestimonialsFive";
import MoreSolutions from "@/components/service-component/MoreSolution";
import PricingThree from "@/components/pricing/PricingThree";

export default function Home() {
  return (
    <div className="#">
      <div>
        <div className="container-large">
          {/* service area start */}
          <div className="service-single-area-banner ai-learning-service bg_image jarallax"></div>
          {/* service area end */}
        </div>
      </div>
      <div>
        <div className="service-area-details-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content">
                  <div className="top">
                    <h1 className="title">Internet Pricing</h1>
                    <p className="disc">
                      Our Internet Service delivers fast, reliable, and
                      affordable connectivity for homes and businesses, ensuring
                      you stay connected at all times.
                    </p>
                  </div>
                  <div className="mid-content">
                    <p className="disc">
                      Choose from a variety of internet plans designed to fit
                      your needs and budget. Whether you’re streaming, gaming,
                      working from home, or running a business, we offer
                      flexible options with no hidden fees.
                    </p>
                    <p className="disc">
                      All plans include 24/7 customer support, free
                      installation, and a 30-day money-back guarantee. Enjoy
                      seamless connectivity with unlimited data and no
                      throttling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-image-mid-iamge-jarallax-area">
          <div className="container-large">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="thumbnail-area-large-service-detaile-mid jarallax jara-mask-1">
                  <img
                    className="jarallax-img"
                    src="assets/images/service/07.webp"
                    alt="service"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="thumbnail-area-large-service-detaile-mid jarallax jara-mask-1">
                  <img
                    className="jarallax-img"
                    src="assets/images/service/08.webp"
                    alt="service"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-area-details-wrapper border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content">
                  <div className="mid-content">
                    <p className="disc">
                      We are committed to delivering high-speed internet with
                      transparent pricing. Upgrade, downgrade, or cancel
                      anytime—no contracts required.
                    </p>
                    <p className="disc">
                      Our services are available for both residential and
                      commercial customers. Contact us today to find the best
                      plan for your needs!
                    </p>
                    <p className="disc">
                      Experience the difference with our advanced fiber-optic
                      network and dedicated support team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PricingThree />

      <FeatureTwo />

      <>
        {/* rts call to action area start */}
        <div className="rts-call-to-action-area-about rts-section-gapTop mb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="title">Book a Free Consultation</h2>
                <p className="disc">
                  Schedule a no-obligation consultation to discuss your unique
                  needs and how Cherry enterprise can elevate your business
                  technology.
                </p>
                <a
                  href="#"
                  className="rts-btn btn-primary wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  View Solutions
                  <img
                    className="injectable"
                    src="assets/images/service/icons/13.svg"
                    alt="arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
