import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/home/logo.jpg"
import headerBuy from "../images/home/header-mobile-buy.png"
import hamburgerMenu from "../images/home/hamburger-menu.png"
import closeHamburgerMenu from "../images/home/active-hamb-menu.png"
import buyMobileCart from "../images/home/mobile-buy-cart.png"
import useContent from "../hooks/useContent"

const Header = () => {
  const { content } = useContent("header", true)
  const [toggleNavigation, setToggleNavigation] = useState(true)
  return (

    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          {toggleNavigation &&
            <div className="preOrder d-lg-none">
              <ul>
                <li>
                  {content("membershipOffer")} <br /> {content("membershipText")}
                </li>
                <li>
                  <Link to="/the-bike">
                    <img src={headerBuy} />
                  </Link>
                </li>
              </ul>
            </div>
          }
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setToggleNavigation(!toggleNavigation)}
            aria-label="Toggle navigation"
          >
            {toggleNavigation ? <img src={hamburgerMenu} alt="hamburger menu " /> : <img src={closeHamburgerMenu} alt="close hamburger menu" />}
          </button>
          <div
            className={`${toggleNavigation && "collapse"} navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link mx-3" activeClassName="active" to="/">
                  {content(["navigation", "home"])}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3"
                  activeClassName="active"
                  to="/the-bike"
                >
                  {content(["navigation", "theBike"])}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3"
                  activeClassName="active"
                  to="/studios"
                >
                  {content(["navigation", "studios"])}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3"
                  activeClassName="active"
                  to="/our-story"
                >
                  {content(["navigation", "ourStory"])}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3"
                  activeClassName="active"
                  partiallyActive={true}
                  to="/faq"
                >
                  {content(["navigation", "faq"])}
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" activeClassName="active" href="https://app.strydebike.com/">
                  {content(["navigation", "app"])}
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" activeClassName="active" to="/blog">
                  {content(["navigation", "blog"])}
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item px-2">
                <p>{content("membershipOffer")}</p>
                <p>{content("membershipText")}</p>
              </li>
              <li className="nav-item px-2">
                <Link to="/the-bike" className="nav-link pt-2">
                  <div className="btn btn-primary buyButton">{content("callToAction")}</div>
                </Link>
                <div className="nav-link d-none mobileLink">
                  <ul>
                    <li className="nav-item pl-2">
                      <Link className="nav-link" to="/the-bike">
                        {content("buyNowMobile")}
                      </Link>
                    </li>
                    <li className="nav-item pl-2">
                      <Link className="nav-link" to="/the-bike">
                        <img src={buyMobileCart} alt="buy cart button" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header