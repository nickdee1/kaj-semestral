import React from "react";
import "./LeftButtonBar.css"

class LeftButtonBar extends React.Component {
    render() {
        return (
            <div>
                <div className="left-button-bar">
                    <div className="upper-images">
                        <img id="logo" src={process.env.PUBLIC_URL + "/svg/" + "logo" + ".svg"}/>
                        <img id="add" src={process.env.PUBLIC_URL + "/svg/" + "plus_add" + ".svg"}/>
                    </div>
                    <div className="bottom-images">
                        <div className="help-and-avatar">
                            <img id="help" src={process.env.PUBLIC_URL + "/svg/" + "help" + ".svg"}/>
                            <div className="img-and-menu">
                                <img id="user-avatar"/>
                                <div className="user-popover-menu">
                                    <div className="popover-menu-user-item">
                                        Profile
                                    </div>
                                    <div className="popover-menu-user-item">
                                        Profile Settings
                                    </div>
                                    <div className="line"/>
                                    <div className="popover-menu-user-item">
                                        Log out
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftButtonBar