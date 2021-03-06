import React from 'react';
import {motion} from 'framer-motion'

export default function LeftBarButton({children, action}) {
  return (
    <motion.div
      onClick={action}
      onMouseOver={{backgroundColor: '#E2E2E2'}}
      style={LEFT_BAR_BUTTON}>
      {children}
    </motion.div>
  )
}

const LEFT_BAR_BUTTON = {
  padding: '10px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer'
}
