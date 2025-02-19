import Link from 'next/link';

export default function PreHeader() {
  return (
    <div className="pre-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-8 col-7">
            <ul className="info">
              <li>
                <Link href="mailto:digimedia@company.com">
                  <div>
                    <i className="fa fa-envelope"></i>digimedia@company.com
                  </div>
                </Link>
              </li>
              <li>
                <Link href="tel:010-020-0340">
                  <div>
                    <i className="fa fa-phone"></i>010-020-0340
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-4 col-5">
            <ul className="social-media">
              <li>
                <Link href="#">
                  <div>
                    <i className="fa fa-facebook"></i>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div>
                    <i className="fa fa-behance"></i>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div>
                    <i className="fa fa-twitter"></i>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div>
                    <i className="fa fa-dribbble"></i>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Add inline styles for the PreHeader component */}
      <style jsx>{`
        .pre-header {
          background-color: #f7f7f7;
          padding: 10px 0;
        }
        .pre-header .info,
        .pre-header .social-media {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
        }
        .pre-header .info li,
        .pre-header .social-media li {
          margin-right: 15px;
        }
        .pre-header .info li:last-child,
        .pre-header .social-media li:last-child {
          margin-right: 0;
        }
        .pre-header .info a,
        .pre-header .social-media a {
          color: #333;
          text-decoration: none;
          font-size: 14px;
        }
        .pre-header .info a:hover,
        .pre-header .social-media a:hover {
          color: #007bff;
        }
        .pre-header .social-media a {
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}