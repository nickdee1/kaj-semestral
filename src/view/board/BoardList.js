import React from 'react';
import Grid from '@material-ui/core/Grid';
import {CardContent, makeStyles, Typography} from '@material-ui/core';
import theme from '../../theme';
import Card from '@material-ui/core/Card';
import {Droppable, Draggable, DragDropContext} from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const useStyles = makeStyles({
  container: {
    backgroundColor: "#ebecf0",
    minHeight: "50px",
    marginRight: "12px",
  },
  card: {
    margin: "8px"
  },
  title: {
    align: "left",
    paddingLeft: "10px",
    paddingTop: "10px"
  }
})

/**
 * Component for exact column in board
 * */
const BoardList = ({listData, columnId}) => {

  const styles = useStyles()

  return (
      <Droppable droppableId={columnId}>

        {(provided) => (
          <Grid container direction="column" xs={2} className={styles.container}>
            <Typography align={'left'} className={styles.title}>
              <b>{columnId}</b>  {listData.length}
            </Typography>

            {/* Map all data to TaskCard */}
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {listData.map((task, index) => (
                <TaskCard data={task} index={index}/>
              ))}
            </div>

          </Grid>
        )}
      </Droppable>
  )
}

export default BoardList
