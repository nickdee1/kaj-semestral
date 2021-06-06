import React from 'react';
import './LeftBarLinks.css'
import LinkLeftBar from './LinkLeftBar';
import {LINK_NAME, SVG_IMAGE_NAME} from '../../../constants/links_constants';

const LeftBarLinks = () => {

  const navigateToBoard = () => {
    window.location.replace('/board')
  }

  const navigateToSettings = () => {
    window.location.replace('/settings')
  }

  return (
    <div className="left-bar-links-container">
      <LinkLeftBar name={LINK_NAME.BOARD} img={SVG_IMAGE_NAME.BOARD} action={navigateToBoard}/>
      <LinkLeftBar name={LINK_NAME.SETTINGS} img={SVG_IMAGE_NAME.SETTINGS} action={navigateToSettings}/>
    </div>
  )
}

export default LeftBarLinks
