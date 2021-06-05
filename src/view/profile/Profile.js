import React from 'react';
import {Button, makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import LeftButtonBar from '../../component/left_button_bar/LeftButtonBar';
import LeftBarComponent from '../../component/left_bar/LeftBarComponent';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

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

const Profile = () => {

  const styles = useStyle()

  return (
    <Grid container>
      <Grid container>
        <LeftButtonBar/>
        <LeftBarComponent/>
      </Grid>
      <Grid container className={styles.paper}>
        <Grid container>
          <Paper className={styles.form} elevation={2}>
            <h1>Profile</h1>
            <form>
              <TextField id="standard-basic" label="Name" margin="normal" fullWidth/>
              <TextField id="standard-basic" label="Description" margin="normal" fullWidth/>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Profile
