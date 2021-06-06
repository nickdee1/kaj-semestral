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
      description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten himself. \"Teh monks were not to blame, in any case,\" he reflceted, on the steps. \"And if they're decent people here (and the Father Superior, I understand, is a nobleman) why not be friendly and courteous withthem? I won't argue, I'll fall in with everything, I'll win them by politness, and show them that I've nothing to do with that Aesop, thta buffoon, that Pierrot, and have merely been takken in over this affair, just as they have.\"Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten himself. \"Teh monks were not to blame, in any case,\" he reflceted, on the steps. \"And if they're decent people here (and the Father Superior, I understand, is a nobleman) why not be friendly and courteous withthem? I won't argue, I'll fall in with everything, I'll win them by politness, and show them that I've nothing to do with that Aesop, thta buffoon, that Pierrot, and have merely been takken in over this affair, just as they have.\"",
      points: 2
    }
  }
]

const TeamBoard = () => {

  const [tasksData, setTasksData] = useState(tasks)
  const allItems = useLiveQuery(() => db.tasks.toArray(), []);
  useEffect( () => {
    if (allItems) {
      setTasksData(allItems)
    }
  })

  const getTasks = (column) => {
    console.log(tasksData)
    return tasksData.filter(task => {
      return task.item.state === column
    })
  }

  return(
    <DragDropContext onDragEnd={() => console.log("")}>
      <Grid container direction="row">
        <BoardList listData={getTasks("TO DO")} columnId={"To do"}/>
        <BoardList listData={getTasks("IN PROGRESS")} columnId={"Blocked"}/>
        <BoardList listData={getTasks("IN REVIEW")} columnId={"In progress"}/>
        <BoardList listData={getTasks("IN TEST")} columnId={"In test"}/>
        <BoardList listData={getTasks("DONE")} columnId={"Done"}/>
      </Grid>
    </DragDropContext>
  )
}

export default TeamBoard
