import axios from 'axios';   //manage HTTP request on client side


//const API_BASE = process.env.REACT_APP_API_BASE;
//const TUITS_API = `${API_BASE}/tuits`;
const TUITS_API = 'https://tuiter-node-server-app-2.herokuapp.com/api/tuits';

//asynchronous function will run the HTTP requests on multiThreads, not block the main thread
//async and  await are used at same time
export const findTuits = async () => {
        const response = await axios.get(TUITS_API);  // send GET HTTP request to server
        const tuits = response.data;
        return tuits;
}

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}


export const deleteTuit = async (tid) => {
    const response = await axios.delete(`$(TUITS_API)/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    //const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
  return tuit;


}