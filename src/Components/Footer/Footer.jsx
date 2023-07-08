import React from "react";
import "./Footer.css";
import wp from "../../assets/whatsapp-logo.jpg"

const Footer = () => {
  return (
    <>
    <div className="Footer-container" id="about">
    <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Address</h3>
            <a href="googlemaplink">Satara Parisar, Aurangabad</a>
            {/* change  ===> address and google map */}
            <a href="wa.me"><img alt="whatsapp" src={wp} height="80" width="240" className="btn"/></a>
          </div>
        <div className="box">
            <h3>Contact Us </h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                
            <a href="tel:+91 9370220603"><i className="fa fa-phone"></i> +91 93702 20603 </a>  
                {/* change ==> */}
                <br></br>
               
                <a href="mailto:tabish7766@gmail.com"> <i className="fa fa-envelope"></i> tabish7766@gmail.com</a>
            </div>
        <div className="box">
            <h3>Follow us</h3>
            <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                     />
                <div className="hero1">
                <h1>Reach us at</h1>
                 <div className="home__social-icon">
                 <a href="Facebook"><i className="fab fa-facebook-f"> Facebook</i></a>
                 <a href="Instagram"><i className="fab fa-instagram"> Instagram</i></a>
                 <a href="Whatsapp link"><i className="fab fa-whatsapp">Whatsapp</i></a>
                 {/* change ==> add whatsapp, insta  ,facebook  link */}
                 <a href="https://www.google.com/maps/">
                <i className="fab fa-google">Google Maps</i></a>
               </div>
            </div>
        </div> 
      </div>
    </section>
    <div className="credits">
        <p>© 2023 Tabish. All Rights Reserved.</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
