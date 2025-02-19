import Image from 'next/image';
import Link from 'next/link';

export default function MainBanner() {
  return (
    <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                  <div className="row">
                    <div className="col-lg-12">
                      <h6>Digital Media Agency</h6>
                      <h2>We Boost Your Website Traffic</h2>
                      <p>
                        This template is brought to you by TemplateMo website. Feel free to use this for a commercial purpose. You are not allowed to redistribute the template ZIP file on any other template website. Thank you.
                      </p>
                    </div>
                    <div className="col-lg-12">
                      <div className="border-first-button scroll-to-section">
                        <Link href="#contact">
                          <div>Free Quote</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                  <Image
                    src="/assets/images/slider-dec.png"
                    alt="Banner Image"
                    width={600}
                    height={500}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add inline styles for the MainBanner component */}
      <style jsx>{`
        .main-banner {
          padding: 100px 0;
          background-color: #f7f7f7;
        }
        .main-banner h6 {
          font-size: 18px;
          color: #007bff;
          font-weight: 600;
          margin-bottom: 15px;
        }
        .main-banner h2 {
          font-size: 36px;
          font-weight: 700;
          color: #333;
          margin-bottom: 20px;
        }
        .main-banner p {
          font-size: 16px;
          color: #666;
          margin-bottom: 30px;
        }
        .border-first-button {
          display: inline-block;
          padding: 10px 20px;
          border: 2px solid #007bff;
          border-radius: 5px;
          transition: all 0.3s ease;
        }
        .border-first-button a {
          color: #007bff;
          text-decoration: none;
          font-weight: 600;
        }
        .border-first-button:hover {
          background-color: #007bff;
        }
        .border-first-button:hover a {
          color: #fff;
        }
        .right-image img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}