import React, {useState} from 'react';
import {Draggable} from 'react-beautiful-dnd';
import Card from '@material-ui/core/Card';
import {CardContent, Container, DialogContentText, makeStyles, Modal, Typography} from '@material-ui/core';
import TaskDialog from './TaskDialog';

const useStyles = makeStyles({
  card: {
    margin: "8px"
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
      <Draggable key={data.id} draggableId={data.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <Card className={styles.card} onClick={handleOpen}>
              <CardContent>
                <Typography>
                  {data.name}
                </Typography>
              </CardContent>
            </Card>

            <TaskDialog data={data} open={open} handleClose={handleClose}/>
          </div>
        )}

      </Draggable>
  )
}

export default TaskCard
