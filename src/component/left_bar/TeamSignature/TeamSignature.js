import React, {useEffect, useState} from 'react';
import './TeamSignature.css'
import {useLiveQuery} from 'dexie-react-hooks';
import db from '../../../db/TaskController';

const TeamSignature = ({name, goals}) => {

  return (
    <div className="team-signature-container">
      <span className="avatar-and-team">
        <div className="team-avatar"/>
        <div className="team-name-and-description">
          <b className="team-name">{name}</b>
          <p className="team-description">{goals}</p>
        </div>
      </span>
    </div>
  )

}

export default TeamSignature
