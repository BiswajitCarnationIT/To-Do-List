import React from 'react'
import axios from "axios";
import  { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import taskReducer from '../redux/Reducer';
import { FETCH_LIST } from '../redux/Action';
import { fetchList } from '../redux/ActionCreator';


import { useHistory } from "react-router-dom";


const UpdateItem = () => {
    const state = useSelector(state => state)
    console.log("stsate",state.list[1])
    const dispatch = useDispatch()
    const [id, setId] = useState(0);
    const [task, setTask] = useState("");
    console.log(id)

    const [completed, setCompleted] = useState("");
    const handleSubmit = () => {
      let article = {
         task:state.list,
        completed: completed.completed,
        
      };
      console.log(article);
    
      axios
        .put(`http://localhost:3000/to-do/${id.id}`, article)
        .then(() => {
          alert("Updated");
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
     
      axios
        .get("http://localhost:3000/to-do")
        .then((response) => {
          console.log(response.data);
          dispatch(fetchList(response.data))
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    };
    const fetchData = () =>{
        axios
      .get(`http://localhost:3000/to-do`)
      .then((res) => {
        console.log(res.data);
        dispatch(fetchList(res.data))
        
      })
      .catch((err) => {
        console.log(err);
      });
    }

    return (
        <div>
            <h1>Update To-Do list</h1>
            <input type="text" placeholder='id'  name="id"
            onChange={(e) =>
                setId({ [e.target.name]: e.target.value })
            }/><br></br>
            <input type="text" placeholder='task'  name="task"
            onChange={(e) =>
                setTask({ [e.target.name]: e.target.value })
            }/><br></br>
            <input type="text" placeholder='Rnter updated status'  name="completed"
            onChange={(e) =>
                setCompleted({ [e.target.name]: e.target.value })
            }/><br></br>
            <button onClick={handleSubmit} >Submit update</button><br></br>
            <button onClick={fetchData}>Load Task list</button>
        </div>
    )
}

export default UpdateItem
