import React from "react"
import { Link } from "gatsby"
import useContent from "../hooks/useContent";
import { EmailLink } from '../common/elements';
import newsletterService from '../services/newsletter-service';

const Footer = () => {
  const { content } = useContent("general");

  let mobileNewsletterSubscriberEmail;
  let fullNewsletterSubscriberEmail;

  function subscribeToNewsletter(mobile = false) {
    const email = mobile
      ? mobileNewsletterSubscriberEmail && mobileNewsletterSubscriberEmail.value
      : fullNewsletterSubscriberEmail && fullNewsletterSubscriberEmail.value;

    newsletterService.signupForNewsletter({ email, source: 'website.footer' })
      .then(result => {
        if (result.status !== 'ok')
          return alert(result.message || 'Could not subscribe at this time, please try again laterX');
        mobileNewsletterSubscriberEmail.value = '';
        fullNewsletterSubscriberEmail.value = '';
        alert('Subscription successful');
      })
      .catch(error => {
        debugger;
        let message = (error && error.message) || 'Could not subscribe at this time, please try again later';
        if (error.type === 'ValidationException') {
          if (error.rules.email) message = error.rules.email;
        }
        alert(message);
      });
  }


  const mailToRef = () => {
    return `mailto:${content("customerServiceEmail")}`
  }
  return (
    <div>
      <footer>
        <section className="mobileFooter d-md-block d-lg-none">
          <div className="container">
            <div className="row">
              <div className="col">
                <ul>
                  <li>
                    <Link to="/the-bike">The Bike</Link>
                  </li>
                  <li>
                    <Link to="/studios">Studios</Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="text-center">
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/try-stryde">Try Stryde</Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>
                    <Link to="/our-story">Our Story</Link>
                  </li>
                  <li>
                    <Link to="/bike-warranty">Bike Warranty</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    ref={element => mobileNewsletterSubscriberEmail = element}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <button className="btn btn-primary mobileBtn" onClick={() => subscribeToNewsletter(true)}>
                    GET EXCLUSIVE PROMOS & TIPS
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center info">
                <p>Need to chat to our team?</p>
                <p>
                  <EmailLink href={mailToRef()}>{content("customerServiceEmail")}</EmailLink>
                </p>
                <ul className="d-flex pt-2">
                  <li className="pr-2">
                    <Link to="/term-of-use">Terms of Use</Link>
                  </li>
                  <li className="pl-2">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
                <p>361 Newbury St, Boston MA, 02115</p>
              </div>
            </div>
          </div>
        </section>
        <section className="desktopFooter d-md-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6 text-left info">
                    <p>Need to chat to our team?</p>
                    <p>
                      <EmailLink href={mailToRef()}>{content("customerServiceEmail")}</EmailLink>
                    </p>
                    <ul className="d-flex pt-2">
                      <li className="pr-2">
                        <Link to="/term-of-use">Terms of Use</Link>
                      </li>
                      <li className="pl-2">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                      </li>
                    </ul>
                    <p className="pt-3">
                      361 Newbury St. Boston MA, 02115
                    </p>
                  </div>
                  <div className="col-md-3">
                    <ul>
                      <li>
                        <Link to="/the-bike">The Bike</Link>
                      </li>
                      <li>
                        <Link to="/studios">Studios</Link>
                      </li>
                      <li>
                        <Link to="/our-story">Our Story</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <ul>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/try-stryde">Try Stryde</Link>
                      </li>
                      <li>
                        <Link to="/bike-warranty">Bike Warranty</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-8">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email"
                        ref={element => fullNewsletterSubscriberEmail = element}
                      />
                    </div>
                  </div>
                  <div className="col-4 pr-0 pl-0">
                    <div className="form-group">
                      <button className="btn btn-primary desktopBtn" onClick={() => subscribeToNewsletter(false)}>
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default Footer;