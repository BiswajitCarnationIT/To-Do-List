import React from 'react'
import axios from "axios";
import  { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import taskReducer from '../redux/Reducer';
import { FETCH_LIST } from '../redux/Action';
import { fetchList } from '../redux/ActionCreator';


import { useHistory } from "react-router-dom";


const AddItem = () => {
    const dispatch = useDispatch()

    const [Task, setTask] = useState("");
]    const handleSubmit = () => {
      const article = {
         task:Task.task,
        completed: "Incomplete",
        
      };
      axios
        .post("http://localhost:3000/to-do", article)
        .then(() => {
          alert("Submitted");
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
            <h1>Add item</h1>
            <input type="text" placeholder='Enter Item to add'  name="task"
            onChange={(e) =>
                setTask({ [e.target.name]: e.target.value })
            }/>
            <button onClick={handleSubmit} >Add</button><br></br>
            <button onClick={fetchData}>Load Task list</button>
        </div>
    )
}

export default AddItem
