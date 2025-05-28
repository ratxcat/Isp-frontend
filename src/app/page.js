
import BannerOne from "@/components/banner/BannerOne";
import BlogOne from "@/components/blog/BlogOne";
import CaseStudies from "@/components/casestudies/CaseStudies";
import BackToTop from "@/components/common/BackToTop";
import ContactOne from "@/components/contact/ContactOne";
import CounterUp from "@/components/counterup/CounterUp";
import CtaOne from "@/components/cta/CtaOne";
import FaqOne from "@/components/faq/FaqOne";
import FooterFour from "@/components/footer/FooterFour";
import FooterOne from "@/components/footer/FooterOne";
import FooterThree from "@/components/footer/FooterThree";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderOne from "@/components/header/HeaderOne";
import LargeVideo from "@/components/large-video/LargeVideo";
import Pricing from "@/components/pricing/Pricing";
import PricingFour from "@/components/pricing/PricingFour";
import PricingThree from "@/components/pricing/PricingThree";
import ServiceOne from "@/components/services/ServiceOne";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <div className="#">
    
      <BannerOne />
      <LargeVideo />
      <ServiceOne />
      <CounterUp />
      {/* <CaseStudies /> */}
      {/* <Pricing /> */}
      <PricingThree />
      <FaqOne />
      <Testimonials />
      {/* <BlogOne /> */}
      {/* <CtaOne /> */}
      <ContactOne />
    
      
    </div>
  );
}
