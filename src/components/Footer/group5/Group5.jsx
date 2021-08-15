import React from "react";
import Visa from "../../Visa/Visa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTelegramPlane,
  faInstagram,
  faFacebookF,
  faVk,
} from "@fortawesome/free-brands-svg-icons";

function Group5() {
  return (
    <div className="group5">
      <Visa />
      <div className="footerContacts">
        <p>8 (000) 777-0016</p>
        <div className="footIcons">
          <div className="footIcon">
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
          <div className="footIcon">
            <FontAwesomeIcon icon={faTelegramPlane} />
          </div>
          <div className="footIcon">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="footIcon">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="footIcon">
            <FontAwesomeIcon icon={faVk} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group5;
