import Image from 'next/image';
export default function PortfolioSection() {
    return (
      <div id="portfolio" className="our-portfolio section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                <h6>Our Portfolio</h6>
                <h4>See Our Recent <em>Projects</em></h4>
                <div className="line-dec"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
          <div className="row">
            <div className="col-lg-12">
              <div className="loop owl-carousel">
                <div className="item">
                  <div className="portfolio-item">
                    <div className="thumb">
                      <Image
                        src="/assets/images/portfolio-01.jpg"
                        alt="Website Builder"
                        width={300}
                        height={200}
                        layout="responsive"
                      />
                    </div>
                    <div className="down-content">
                      <h4>Website Builder</h4>
                      <span>Marketing</span>
                    </div>
                  </div>
                </div>
                {/* Repeat for other portfolio items */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }