import React, {useState} from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import {DialogContentText, makeStyles, TextareaAutosize} from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import db from '../../db/TaskController';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  grid: {
    paddingRight: "10px"
  },
  textArea: {
    width: "100%",
    border: "none"
  },
  textField: {
    marginBottom: "20px"
  }
})
const TaskDialog = ({data, id, open, handleClose}) => {
  const styles = useStyles()

  const [nameChanged, setNameChanged] = useState("")
  const [descriptionChanged, setDescriptionChanged] = useState("")
  const [tagChanged, setTagChanged] = useState("")
  const [estimateChanged, setEstimateChanged] = useState("")

  const updateInDb = (obj) => {
    db.tasks.update(parseInt(id), obj).then(updated => {
      if (updated) {
        console.log("updated")
      } else {
        console.log("Not updated")
      }
    })
  }

  const deleteTask = () => {
    db.tasks.delete(id).then(result => {
      console.log(result)
    })
  }

  const handleUpdate = (obj) => {
    updateInDb(obj)
  }

  const updateItem = (event) => {
    event.preventDefault()
    if (nameChanged) {
      handleUpdate({"item.name": nameChanged})
    }
    if (descriptionChanged) {
      handleUpdate({"item.description": descriptionChanged})
    }
    if (tagChanged) {
      handleUpdate({"item.tag": tagChanged})
    }
    if (estimateChanged) {
      handleUpdate({"item.points": estimateChanged})
    }
    handleClose()
  }

  const deleteItem = (event) => {
    deleteTask()
    handleClose()
  }

  const changeName = (event) => {
    setNameChanged(event.target.value)
  }

  const changeDescription = (event) => {
    setDescriptionChanged(event.target.value)
  }

  const changeTag = (event) => {
    setTagChanged(event.target.value)
  }

  const changeEstimate = (event) => {
    try {
      parseInt(event.target.value)
    } catch (e) {
      console.error("Error while parsing integer")
      return
    }
    setEstimateChanged(event.target.value)
  }

  return(
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
    >
      <DialogTitle
        onChange={changeName}
      >
        {"Task #" + id}
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={9} className={styles.grid}>
            <h5>Title</h5>
            <TextField onChange={changeName} placeholder={data.name} className={styles.textField}/>
            <h5>Description</h5>
            <TextareaAutosize className={styles.textArea} rowsMin={3} onChange={changeDescription}>
              {data.description}
            </TextareaAutosize>
          </Grid>
          <Grid item xs={3}>
            <h5>State</h5>
            <DialogContentText>
              {data.state}
            </DialogContentText>
            <h5>Estimate</h5>
            <TextField type="number" onChange={changeEstimate} placeholder={data.points} className={styles.textField}/>
            <h5>Tag</h5>
            <TextField onChange={changeTag} placeholder={data.tag} className={styles.textField}/>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={deleteItem} color="secondary">
          Delete
        </Button>
        <Button onClick={updateItem} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default TaskDialog
