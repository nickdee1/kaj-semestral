import React from "react";
import ReactDom from 'react-dom'
import { motion, AnimatePresence } from "framer-motion"
import "./TaskInfo.css"
import TextareaAutosize from 'react-autosize-textarea';
import Comment from "./comment/Comment";

export default function TaskInfo({open, onClose}) {

    return ReactDom.createPortal (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 0.3}}
                        exit={{ opacity: 0,
                            transition: {
                                duration: 0.2
                            }}}
                        className="dark-background"/>
                    <motion.div
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition={{ duration: 0.3 }}
                        exit={{ scale: 0,
                            transition: {
                                duration: 0.2
                            }}}
                        className="task-info">

                        <div className="project-name-and-close">
                            <p>Project Name / Id</p>
                            <img id="close-task-info-img" onClick={onClose} src={process.env.PUBLIC_URL + "/svg/" + "close" + ".svg"}/>
                        </div>
                        <div className="task-info-content">
                            <div className="task-info-left-side">
                                <div>
                                    <input id="task-name-input"/>
                                    <form id="task-name-and-description-form">
                                        <label id="task-description-label">Description</label>
                                        <TextareaAutosize id="task-description-input"/>
                                    </form>
                                </div>
                                <div className="comments-block">
                                    <p id="comments-label">Comments</p>
                                    <Comment/>
                                </div>
                            </div>
                            <div className="task-info-right-side">
                                <div id="task-state">
                                    <b id="task-state-name">IN PROGRESS</b>
                                </div>
                                <div id="fields">
                                    <div id="field">
                                        <b>Assignee</b>
                                        <p>Name Firstname</p>
                                    </div>
                                    <div id="field">
                                        <b>Tag</b>
                                        <p>Very clever tag</p>
                                    </div>
                                    <div id="field">
                                        <b>Estimate</b>
                                        <p>2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.getElementById('portal')
    )
}
