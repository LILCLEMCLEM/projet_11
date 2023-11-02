import "../styles/Footer.css";
import WLogo from "../assets/LOGO(1).png";

function FootContent() {
  return (
    <div className="footer_container">
      <img src={WLogo} alt="footer logo"></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default FootContent;
