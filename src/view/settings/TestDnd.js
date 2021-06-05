import React, {useState} from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import Card from '@material-ui/core/Card';
import {CardContent, makeStyles, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
    thumb: '/images/gary.png'
  },
  {
    id: 'cato',
    name: 'Little Cato',
    thumb: '/images/cato.png'
  },
  {
    id: 'kvn',
    name: 'KVN',
    thumb: '/images/kvn.png'
  },
  {
    id: 'mooncake',
    name: 'Mooncake',
    thumb: '/images/mooncake.png'
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
    thumb: '/images/quinn.png'
  }
]

const useStyles = makeStyles({
  container: {
    backgroundColor: "#ebecf0",
    minHeight: "50px",
    marginLeft: "8px",
  },
  card: {
    marginBottom: "8px"
  }
})


function TestDnD() {

  const styles = useStyles()

  return (
    <DragDropContext onDragEnd={() => console.log("")}>
      <Droppable droppableId="characters">

        {(provided) => (
          <Grid container direction="column" xs={2} className={styles.container}>
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <h4>sosi</h4>

              {finalSpaceCharacters.map((t, index) => (

                <Draggable key={t.id} draggableId={t.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <Card>
                        <CardContent>
                          <Typography>
                            {t.name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                </Draggable>
              ))}
            </div>
          </Grid>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TestDnD
