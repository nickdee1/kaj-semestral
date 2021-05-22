import React from "react";
import { motion } from "framer-motion"
import "./LinkLeftBar.css"

class LinkLeftBar extends React.Component {
    render() {
        return (
            <motion.div
                whileTap={{ scale: 0.98 }}
                className="link-left-bar">
                <span className="link-name-span">
                    <img src={process.env.PUBLIC_URL + "/svg/" + this.props.img + ".svg"}/>
                    <p>{this.props.name}</p>
                </span>
            </motion.div>
        )
    }
}

export default LinkLeftBar