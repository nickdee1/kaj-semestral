import React from "react";
import "./LeftBarLinks.css"
import LinkLeftBar from "./LinkLeftBar";

class LeftBarLinks extends React.Component {
    render() {
        return (
            <div className="left-bar-links-container">
                <LinkLeftBar name={LINK_NAME.BACKLOG} img={SVG_IMAGE_NAME.BACKLOG}/>
                <LinkLeftBar name={LINK_NAME.BOARD} img={SVG_IMAGE_NAME.BOARD}/>
                <LinkLeftBar name={LINK_NAME.ADD_ITEM} img={SVG_IMAGE_NAME.ADD_ITEM}/>
                <LinkLeftBar name={LINK_NAME.SETTINGS} img={SVG_IMAGE_NAME.SETTINGS}/>
            </div>
        )
    }
}

const LINK_NAME = {
    BACKLOG: "Backlog",
    BOARD: "Board",
    ADD_ITEM: "Add Item",
    SETTINGS: "Settings",
}

const SVG_IMAGE_NAME = {
    BACKLOG: "tasks",
    BOARD: "board",
    ADD_ITEM: "add_item",
    SETTINGS: "settings"
}

export default LeftBarLinks