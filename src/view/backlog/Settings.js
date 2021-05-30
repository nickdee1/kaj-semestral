import React from 'react';
import LeftButtonBar from '../../component/left_button_bar/LeftButtonBar';
import LeftBarComponent from '../../component/left_bar/LeftBarComponent';
import Grid from '@material-ui/core/Grid';
import {makeStyles, Typography} from '@material-ui/core';
import theme from '../../theme';
import TextField from '@material-ui/core/TextField';

const useStyle = makeStyles({
  paper: {
    marginLeft: "430px",
    marginTop: "60px"
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
      <Grid container direction={'column'} className={styles.paper} alignItems={'flex-start'}>
        <Grid item>
          <h1>Settings</h1>
        </Grid>
        <Grid container>

        </Grid>
      </Grid>
    </Grid>
  )
}

export default Settings
