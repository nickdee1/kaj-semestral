import React from 'react';
import {motion} from 'framer-motion'
import './LinkLeftBar.css'

const LinkLeftBar = ({img, name, action}) => {
  return (
    <motion.div
      whileTap={{scale: 0.98}}
      className="link-left-bar"
      onClick={action}>
      <span className="link-name-span">
        <img src={process.env.PUBLIC_URL + '/svg/' + img + '.svg'}/>
        <p>{name}</p>
      </span>
    </motion.div>
  )
}

export default LinkLeftBar
