import React, {useState} from 'react';
import LeftButtonBar from '../../component/left_button_bar/LeftButtonBar';
import LeftBarComponent from '../../component/left_bar/LeftBarComponent';
import Grid from '@material-ui/core/Grid';
import {Button, FormControl, makeStyles, Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import db from '../../db/TaskController';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';

const useStyle = makeStyles({
  paper: {
    marginLeft: "430px",
    marginTop: "60px"
  },
  form: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 20
  }
})

const Settings = () => {
  const styles = useStyle()

  const [nameChanged, setNameChanged] = useState("")
  const [goalsChanged, setGoalsChanged] = useState("")
  const [updated, setUpdated] = useState(false)

  let name = localStorage.getItem('project')
  let goals = localStorage.getItem('projectGoal')
  let id = localStorage.getItem('projectId')

  const updateInDb = (obj, key, what) => {
    db.projects.update(parseInt(id), obj).then(updated => {
      if (updated) {
        console.log("updated")
        localStorage.setItem(key, what)
        setUpdated(true)
      } else {
        console.log("Not updated")
      }
    })
  }

  const updateItem = (event) => {
    event.preventDefault()
    if (nameChanged) {
      updateInDb({"project.name": nameChanged}, "project", nameChanged)
    }
    if (goalsChanged) {
      updateInDb({"project.goals": goalsChanged}, "projectGoal", goalsChanged)
    }
  }

  const changeName = (event) => {
    setNameChanged(event.target.value)
  }

  const changeGoals = (event) => {
    setGoalsChanged(event.target.value)
  }

  return(
    <Grid container>
      <Grid container>
        <LeftButtonBar/>
        <LeftBarComponent goals={goals} project={name}/>
      </Grid>
      <Grid container className={styles.paper}>
        <Grid container>
          <Paper className={styles.form} elevation={2}>
            <h1>Project settings</h1>
            <form>
              <TextField id="standard-basic" label="Name" placeholder={name} margin="normal" onChange={changeName} fullWidth/>
              <TextField id="standard-basic" label="Goals" placeholder={goals} margin="normal" onChange={changeGoals} fullWidth/>
              <Button
                type="submit"
                fullWidth
                margin="normal"
                variant="contained"
                color="primary"
                onClick={updateItem}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={updated}
        autoHideDuration={6000}
        onClose={() => setUpdated(false)}
      >
        <MuiAlert severity="success">
          Project was successfully updated
        </MuiAlert>
      </Snackbar>
    </Grid>
  )
}

export default Settings
