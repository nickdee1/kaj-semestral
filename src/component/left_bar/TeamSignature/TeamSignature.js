import React, {useEffect, useState} from 'react';
import './TeamSignature.css'
import {useLiveQuery} from 'dexie-react-hooks';
import db from '../../../db/TaskController';

const TeamSignature = () => {

  const [project, setProject] = useState({name: "Project name", goals: "Goals"})

  //const projects = useLiveQuery(() => db.projects.toArray(), []);

  // useEffect(() => {
  //   if (projects) {
  //     setProject({
  //       name: projects[0].project.name,
  //       goals: projects[0].project.goals
  //     })
  //   }
  // })

  return (
    <div className="team-signature-container">
      <span className="avatar-and-team">
        <div className="team-avatar"/>
        <div className="team-name-and-description">
          <b className="team-name">{project.name}</b>
          <p className="team-description">{project.goals}</p>
        </div>
      </span>
    </div>
  )

}

export default TeamSignature
