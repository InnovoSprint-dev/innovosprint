import Image from 'next/image';
export default function ContactSection() {
    return (
      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                <h6>Contact Us</h6>
                <h4>Get In Touch With Us <em>Now</em></h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
              <form id="contact" action="#" method="post">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="contact-dec">
                      <Image
                        src="/assets/images/contact-dec.png"
                        alt="Contact Decoration"
                        width={500}
                        height={300}
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div id="map">
                      <iframe
                        src="https://maps.google.com/maps?q=Av.+Lúcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="636px"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="fill-form">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="info-post">
                            <div className="icon">
                              <Image src="/assets/images/phone-icon.png" alt="Phone" width={30} height={30} />
                              <div>010-020-0340</div>
                            </div>
                          </div>
                        </div>
                        {/* Repeat for email and location */}
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="name" name="name" id="name" placeholder="Name" required />
                          </fieldset>
                        </div>
                        {/* Repeat for other form fields */}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }