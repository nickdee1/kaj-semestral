import React from 'react';
import LeftButtonBar from '../../component/left_button_bar/LeftButtonBar';
import LeftBarComponent from '../../component/left_bar/LeftBarComponent';
import Grid from '@material-ui/core/Grid';
import {Button, FormControl, makeStyles, Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

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

  return(
    <Grid container>
      <Grid container>
        <LeftButtonBar/>
        <LeftBarComponent/>
      </Grid>
      <Grid container className={styles.paper}>
        <Grid container>
          <Paper className={styles.form} elevation={2}>
            <h1>Project settings</h1>
            <form>
              <TextField id="standard-basic" label="Name" margin="normal" fullWidth/>
              <TextField id="standard-basic" label="Description" margin="normal" fullWidth/>
              <Button
                type="submit"
                fullWidth
                margin="normal"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Settings
