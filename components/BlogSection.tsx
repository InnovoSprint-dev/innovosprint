import Image from 'next/image';
export default function BlogSection() {
    return (
      <div id="blog" className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.3s">
              <div className="section-heading">
                <h6>Recent News</h6>
                <h4>Check Our Blog <em>Posts</em></h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div className="col-lg-6 show-up wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              <div className="blog-post">
                <div className="thumb">
                  <Image
                    src="/assets/images/blog-post-01.jpg"
                    alt="SEO Analysis"
                    width={400}
                    height={300}
                    layout="responsive"
                  />
                </div>
                <div className="down-content">
                  <span className="category">SEO Analysis</span>
                  <span className="date">03 August 2021</span>
                  <h4>Lorem Ipsum Dolor Sit Amet, Consectetur Adelore Eiusmod Tempor Incididunt</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="border-first-button">
                    <div>Discover More</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat for other blog posts */}
          </div>
        </div>
      </div>
    );
  }