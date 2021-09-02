import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faWhatsapp,
    faTelegramPlane,
    faInstagram,
    faFacebookF,
    faVk,
} from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
    return (
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
    )
}

export default SocialIcons
