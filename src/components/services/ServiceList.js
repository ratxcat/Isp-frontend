import React from 'react'

function ServiceList() {
  return (
    <>
      {/* service-we-provide-area start */}
      <div className="rts-service-provide-area rts-section-gap">
        <div className="container-s-float">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="single-service-list wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <img src="assets/images/service/icons/42.svg" alt="service" />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Internet Routing</h3>
                  <p className="disc">
                    Reliable and high-speed internet routing solutions to ensure seamless data flow and optimal connectivity for your home or business.
                  </p>
                </div>
                <a href="#" className="arrow-btn">
                  <img src="assets/images/service/icons/13.svg" alt="service" />
                </a>
              </div>
              <div
                className="single-service-list wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <img src="assets/images/service/icons/43.svg" alt="service" />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Networking Solutions</h3>
                  <p className="disc">
                    Comprehensive networking services for homes and offices, including setup, maintenance, and optimization to keep you connected.
                  </p>
                </div>
                <a href="#" className="arrow-btn">
                  <img src="assets/images/service/icons/13.svg" alt="service" />
                </a>
              </div>
              <div
                className="single-service-list wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".6s"
              >
                <div className="icon">
                  <img src="assets/images/service/icons/44.svg" alt="service" />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Security & Firewall</h3>
                  <p className="disc">
                    Advanced firewall and security solutions to protect your network from cyber threats, ensuring safe and secure internet usage.
                  </p>
                </div>
                <a href="#" className="arrow-btn">
                  <img src="assets/images/service/icons/13.svg" alt="service" />
                </a>
              </div>
              <div
                className="single-service-list wow fadeInUp"
                data-wow-offset={120}
                data-wow-delay=".8s"
              >
                <div className="icon">
                  <img src="assets/images/service/icons/45.svg" alt="service" />
                </div>
                <div className="main-information-area">
                  <h3 className="title">Storage Solutions</h3>
                  <p className="disc">
                    Flexible and secure cloud or on-premise storage solutions to keep your data safe, accessible, and easy to manage.
                  </p>
                </div>
                <a href="#" className="arrow-btn">
                  <img src="assets/images/service/icons/13.svg" alt="service" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service-we-provide-area end */}
    </>
  )
}

export default ServiceList
