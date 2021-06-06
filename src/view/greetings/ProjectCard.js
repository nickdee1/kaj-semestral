import React from 'react';
import Card from '@material-ui/core/Card';
import {CardContent, makeStyles, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    margin: "10px",
    alignItems: "flex-start",
    '&:hover': {
      cursor: "pointer",
    }
  },
  titlesGrid: {
    display: "flex",
    alignItems: "flex-start"
  },
  imageGrid: {
    display: "flex",
    flexDirection: "row",
    justify: "center",
    alignItems: "center",
  },
  projectTexts: {
    width: "85%"
  }
})

const ProjectCard = ({name, goals, id}) => {

  const styles = useStyles()

  const handleClick = (event) => {
    event.preventDefault()
    localStorage.setItem("project", name)
    localStorage.setItem("projectGoal", goals)
    localStorage.setItem("projectId", id)
    window.location.reload()
  }

  return(
    <Card variant="outlined" className={styles.card} onClick={handleClick}>
      <CardContent>
        <Grid container direction="row">
          <Grid item xs={11} className={styles.titlesGrid}>
            <Grid direction="column">
              <Typography noWrap className={styles.projectTexts} variant="h5" align="left">
                {name}
              </Typography>
              <Typography noWrap align="left">
                {goals}
              </Typography>
            </Grid>
          </Grid>
          <Grid direction="column" className={styles.imageGrid} item xs={1}>
            <ArrowForwardIosIcon color="primary"/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
