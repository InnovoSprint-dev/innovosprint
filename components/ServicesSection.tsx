import Image from 'next/image';
export default function ServicesSection() {
    return (
      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h6>Our Services</h6>
                <h4>What Our Agency <em>Provides</em></h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu">
                        <div className="first-thumb active">
                          <div className="thumb">
                            <span className="icon">
                              <Image src="/assets/images/service-icon-01.png" alt="Apartments" width={50} height={50} />
                            </span>
                            Apartments
                          </div>
                        </div>
                        {/* Repeat for other service items */}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <ul className="nacc">
                        <li className="active">
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>SEO Analysis &amp; Daily Reports</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                  </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                  <div className="right-image">
                                    <Image
                                      src="/assets/images/services-image.jpg"
                                      alt="SEO Analysis"
                                      width={500}
                                      height={300}
                                      layout="responsive"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* Repeat for other service details */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }