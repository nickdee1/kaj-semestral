import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import {makeStyles, TextareaAutosize} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import {Label} from '@material-ui/icons';
import MuiAlert from '@material-ui/lab/Alert'
import db from '../../db/TaskController';

const useStyles = makeStyles({
  text: {
    width: "100%",
    marginBottom: "20px"
  },
  smallText: {
    marginBottom: "20px",
    marginRight: "20px"
  }
})

const AddItemDialog = ({open, handleClose}) => {
  const styles = useStyles()

  const [item, setItem] = useState({})
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
    item.name = name.target.value
    setItem(item)
  }

  const setDescription = (descr) => {
    item.description = descr.target.value
    setItem(item)
  }

  const setTag = (tag) => {
    item.tag = tag.target.value
    setItem(item)
  }

  const setEstimate = (estimate) => {
    item.points = estimate.target.value
    setItem(item)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    if (!item.name) {
      handleErrorOpen("Name cannot be empty!")
      return
    }

    item.state = "TO DO"
    setItem(item)
    await db.tasks.add({item})
    handleClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
    >
      <DialogTitle>Add task</DialogTitle>
      <DialogContent>
        <TextField onChange={setName} label="Task name" className={styles.text}/>
        <TextField onChange={setTag} label="Task tag" className={styles.smallText}/>
        <TextField type="number" onChange={setEstimate} label="Estimation (points)" className={styles.smallText}/>
        <TextareaAutosize onChange={setDescription} rowsMin={3} placeholder="Task description" className={styles.text}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
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
    </Dialog>
  )
}

export default AddItemDialog
