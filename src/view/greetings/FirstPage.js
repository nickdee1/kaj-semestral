import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles, Typography} from '@material-ui/core';
import {AnimatePresence, motion} from 'framer-motion';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {ArrowForward} from '@material-ui/icons';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles({
  mainGrid: {
    marginTop: "100px",
  },
  text: {
    marginBottom: "20px",
  },
  textField: {
    width: "70%",
    marginBottom: "20px"
  },
  inputsGrid: {
    marginTop: "50px",
    marginBottom: "50px"
  }
})

const FirstPage = () => {

  const [project, setProject] = useState({name: "", goals: ""})
  const [error, setError] = useState({open: false, errorMsg: ""})

  const handleErrorOpen = (errorMsg) => {
    setError({
      open: true,
      errorMsg: errorMsg
    })
  }

  const handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setError({
      open: false,
      errorMsg: ""
    })
  }

  const setName = (name) => {
    project.name = name.target.value
    setProject(project)
  }

  const setGoal = (goal) => {
    project.goal = goal.target.value
    setProject(project)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    if (!project.name) {
      handleErrorOpen("Name cannot be blank!")
      return
    }
    if (!project.goals) {
      handleErrorOpen("Goals cannot be empty!")
      return
    }

  }

  const styles = useStyles()

  return(
    <AnimatePresence>
      <Grid container direction="row">
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6} className={styles.mainGrid}>
          <Grid>
            <motion.div
              initial={{opacity: 0}}
              transition={{duration: 1.0}}
              animate={{opacity: 1.0}}
            >
              <Typography className={styles.text} variant="h2">
                👋 Hi, it's MyTrack
              </Typography>
            </motion.div>

            <motion.div
              initial={{opacity: 0}}
              transition={{duration: 2.0}}
              animate={{opacity: 0.7}}
            >
              <Typography className={styles.text} variant="h5">
                Your own simple kanban table for task tracking
              </Typography>
            </motion.div>
          </Grid>

          <Grid className={styles.inputsGrid}>
            <motion.div
              initial={{opacity: 0}}
              transition={{duration: 3.0}}
              animate={{opacity: 0.9}}
            >
              <TextField onChange={setName} placeholder="Give a name to your project" className={styles.textField} label="Name"/>
              <TextField onChange={setGoal} placeholder="Give a description about your goals for this project" className={styles.textField} label="Goals"/>
            </motion.div>
          </Grid>


          <motion.div
            initial={{opacity: 0}}
            transition={{duration: 3.0}}
            animate={{opacity: 1.0}}
          >
            <Fab color="primary" onClick={handleSubmit}>
              <ArrowForward/>
            </Fab>
          </motion.div>

        </Grid>
        <Grid item xs={3}/>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={error.open}
        autoHideDuration={6000}
        onClose={handleErrorClose}
      >
        <MuiAlert severity="error">
          {error.errorMsg}
        </MuiAlert>
      </Snackbar>
    </AnimatePresence>
  )
}

export default FirstPage
