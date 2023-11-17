import React, { useEffect, useState } from "react";
import Logo from "../../assets/svg-logo/Fitnesstab.svg";
import "./Header.css";
import { Link } from "react-scroll";
import Bars from "../../assets/bars.png";

const Header = () => {
  // const mobile = window.innerWidth <= 768 ? true : false;
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);
  const [menuOpened, setMenuOpened] = useState(false);
  useEffect(() => {
    if (menuOpened) {
      const timeoutId = setTimeout(() => {
        setMenuOpened(false);
        console.log("clear");
      }, 2000); // set timeout to 2 second

      return () => clearTimeout(timeoutId); // clear timeout when component unmounts
    }
  }, [menuOpened, isMobile]);

  return (
    <div className="header" id="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && isMobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="contact"
              spy={true}
              smooth={true}
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="about"
              spy={true}
              smooth={true}
            >
              About us
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
