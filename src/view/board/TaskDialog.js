import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import {DialogContentText, makeStyles} from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles({
  grid: {
    paddingRight: "10px"
  }
})

const TaskDialog = ({data, open, handleClose}) => {
  const styles = useStyles()

  return(
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
    >
      <DialogTitle>{data.name}</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={9} className={styles.grid}>
            <h5>Description</h5>
            <DialogContentText contentEditable>
              {data.description}
            </DialogContentText>
          </Grid>
          <Grid item xs={3}>
            <h5>State</h5>
            <DialogContentText>
              {data.state}
            </DialogContentText>
            <h5>Tag</h5>
            <DialogContentText>
              {data.tag}
            </DialogContentText>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="secondary">
          Delete
        </Button>
        <Button onClick={handleClose} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default TaskDialog
