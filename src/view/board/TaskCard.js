import React, {useState} from 'react';
import {Draggable} from 'react-beautiful-dnd';
import Card from '@material-ui/core/Card';
import {CardContent, Container, DialogContentText, makeStyles, Modal, Typography} from '@material-ui/core';
import TaskDialog from './TaskDialog';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  card: {
    margin: "8px",
  },
  cardContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  tag: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "flex-start"
  }
})

const TaskCard = ({data, index}) => {

  const styles = useStyles()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Draggable key={data.id.toString()} draggableId={data.id.toString()} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <Card className={styles.card} onClick={handleOpen}>
              <CardContent className={styles.cardContent}>
                <Typography align="left">
                  {data.item.name}
                </Typography>
                <div className={styles.tag}>
                  <Chip color="primary" variant="outlined" label={data.item.points}/>
                </div>
              </CardContent>
            </Card>

            <TaskDialog data={data.item} id={data.id} open={open} handleClose={handleClose}/>
          </div>
        )}

      </Draggable>
  )
}

export default TaskCard
