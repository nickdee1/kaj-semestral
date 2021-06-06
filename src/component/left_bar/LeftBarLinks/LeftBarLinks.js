import React from "react";
import "./LeftBarLinks.css"
import LinkLeftBar from "./LinkLeftBar";
import {LINK_NAME, SVG_IMAGE_NAME} from "../../../constants/links_constants";

class LeftBarLinks extends React.Component {
    render() {
        return (
            <div className="left-bar-links-container">
                <LinkLeftBar name={LINK_NAME.BOARD} img={SVG_IMAGE_NAME.BOARD}/>
                <LinkLeftBar name={LINK_NAME.SETTINGS} img={SVG_IMAGE_NAME.SETTINGS}/>
            </div>
        )
    }
}

export default LeftBarLinks
