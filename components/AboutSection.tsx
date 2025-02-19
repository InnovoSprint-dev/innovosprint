import Image from 'next/image';

export default function AboutSection() {
  return (
    <div id="about" className="about section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-left-image wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                  <Image
                    src="/assets/images/about-dec.png"
                    alt="About Us"
                    width={500}
                    height={400}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="col-lg-6 align-self-center wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <div className="about-right-content">
                  <div className="section-heading">
                    <h6>About Us</h6>
                    <h4>Who is DigiMedia <em>Agency</em></h4>
                    <div className="line-dec"></div>
                  </div>
                  <p>
                    We hope this DigiMedia template is useful for your work. You can use this template for any purpose. You may contribute a little amount via PayPal to support TemplateMo in creating new templates regularly.
                  </p>
                  <div className="row">
                    <div className="col-lg-4 col-sm-4">
                      <div className="skill-item first-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                        <div className="progress" data-percentage="90">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                          <div className="progress-value">
                            <div>
                              90%<br />
                              <span>Coding</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Repeat for other skill items */}
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