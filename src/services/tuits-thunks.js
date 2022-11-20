import {createAsyncThunk} from '@reduxjs/toolkit';
import * as service from "./tuits-service";  //import all exported function as service


export const findTuitsThunk = createAsyncThunk(  //create thunk for findTuits
    'tuits/findTuits',  //name the thunk
    async () =>  await service.findTuits()  //return data goes in redux action's payload
    )

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit', //name the thunk
    async (tuitId) => {
    await service.deleteTuit(tuitId)
    return tuitId
})

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit', //name the thunk
    async (tuit) => {await service.createTuit(tuit)
    return tuit
})



export const updateTuitThunk =
  createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) =>
      await service.updateTuit(tuit)
)
