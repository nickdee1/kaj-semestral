import React from 'react';
import Grid from '@material-ui/core/Grid';
import theme from '../../theme'
import {Card, CardContent, makeStyles, Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',

  }
})

export function Login() {
  const styles = useStyles()
  return (
    <Grid container direction="column" className={styles.paper}>
      <Grid item container>
        <Grid item xs={1} md={4} />
        <Grid item xs={10} md={4}>

          <Card>
            <CardContent>
              <Typography
                component="h1"
                variant="h5"
              >
                Log in
              </Typography>
              <form>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Log in
                </Button>
              </form>
            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={1} md={4} />
      </Grid>
    </Grid>
  )
}

export default Login
