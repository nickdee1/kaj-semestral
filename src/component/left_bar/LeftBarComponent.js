import React from 'react';

import './LeftBarComponent.css'
import TeamSignature from './TeamSignature/TeamSignature';
import LeftBarLinks from './LeftBarLinks/LeftBarLinks';

/**
 * Left (grey) bar with project signature and links
 * */
const LeftBarComponent = ({project, goals}) => {

  return (
    <div>
      <div className="left-bar">
        <TeamSignature goals={goals} name={project}/>
        <LeftBarLinks/>
      </div>
    </div>
  )
}

export default LeftBarComponent
