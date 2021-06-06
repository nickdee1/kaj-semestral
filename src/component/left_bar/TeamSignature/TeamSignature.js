import React from 'react';
import './TeamSignature.css'
import {makeStyles, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  teamName: {
    maxWidth: "200px",
    fontWeight: "bold"
  },
  goals: {
    maxWidth: "200px",
    fontSize: "14px",
  }
})

const TeamSignature = ({name, goals}) => {
  const styles = useStyles()

  return (

    <Grid container direction="row">
      <Grid item xs={3}>
        <div className="team-avatar"/>
      </Grid>
      <Grid item xs={9}>
        <Typography noWrap align="left" className={styles.teamName}>{name}</Typography>
        <Typography noWrap display="block" align="left" className={styles.goals}>{goals}</Typography>
      </Grid>

    </Grid>
  )

}

export default TeamSignature
