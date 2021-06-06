import React, {useEffect, useState} from 'react';
import {Container} from '@material-ui/core';
import BoardList from './BoardList';
import Grid from '@material-ui/core/Grid';
import {DragDropContext} from 'react-beautiful-dnd';
import Dexie, {liveQuery} from 'dexie';
import { useLiveQuery } from "dexie-react-hooks";
import db from '../../db/TaskController';

const tasks = [
  {
    id: '1',
    item: {
      name: "Task 1",
      tag: "tag 1",
      state: "TO DO",
      projectId: "1",
      description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten himself. \"Teh monks were not to blame, in any case,\" he reflceted, on the steps. \"And if they're decent people here (and the Father Superior, I understand, is a nobleman) why not be friendly and courteous withthem? I won't argue, I'll fall in with everything, I'll win them by politness, and show them that I've nothing to do with that Aesop, thta buffoon, that Pierrot, and have merely been takken in over this affair, just as they have.\"Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten himself. \"Teh monks were not to blame, in any case,\" he reflceted, on the steps. \"And if they're decent people here (and the Father Superior, I understand, is a nobleman) why not be friendly and courteous withthem? I won't argue, I'll fall in with everything, I'll win them by politness, and show them that I've nothing to do with that Aesop, thta buffoon, that Pierrot, and have merely been takken in over this affair, just as they have.\"",
      points: 2
    }
  }
]

/**
 * Component for showing tasks for current project
 * */
const TeamBoard = () => {

  const [tasksData, setTasksData] = useState(tasks)
  const allItems = useLiveQuery(() => db.tasks.toArray(), []);
  const currentProject = localStorage.getItem("projectId")

  useEffect( () => {
    if (allItems) {
      setTasksData(allItems)
    }
  })

  /* Get tasks for exact column for current project */
  const getTasks = (column) => {
    return tasksData.filter(task => {
      return task.item.projectId === currentProject && task.item.state === column
    })
  }

  /* Arrow function handling actions that should happen when task is dragged and dropped */
  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }
    if (source.droppableId !== destination.droppableId) {
      updateCardInDb(source, destination, result.draggableId)
    }
  }

  /* Update state of task in DB */
  const updateCardInDb = (source, destination, cardId) => {
    console.log(destination.droppableId)
    db.tasks.update(parseInt(cardId), {"item.state": destination.droppableId}).then(updated => {
      if (updated) {
        console.log("updated")
      } else {
        console.log("Not updated")
      }
    })
  }

  return(
    // Context for drag and drop usage
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container direction="row">
        <BoardList listData={getTasks("TO DO")} columnId={"TO DO"}/>
        <BoardList listData={getTasks("IN PROGRESS")} columnId={"IN PROGRESS"}/>
        <BoardList listData={getTasks("IN REVIEW")} columnId={"IN REVIEW"}/>
        <BoardList listData={getTasks("IN TEST")} columnId={"IN TEST"}/>
        <BoardList listData={getTasks("DONE")} columnId={"DONE"}/>
      </Grid>
    </DragDropContext>
  )
}

export default TeamBoard
