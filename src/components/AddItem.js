import React from 'react'
import axios from "axios";
import  { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import taskReducer from '../redux/Reducer';
import { FETCH_LIST } from '../redux/Action';
import { fetchList } from '../redux/ActionCreator';


import { useHistory } from "react-router-dom";


const AddItem = () => {
    //let history = useHistory();
    const dispatch = useDispatch()

    const [Task, setTask] = useState("");
    //console.log(Task)
    const handleSubmit = () => {
      //alert(props.fullName)
      const article = {
         task:Task.task,
        completed: "Incomplete",
        
      };
      //console.log(article);
      axios
        .post("http://localhost:3000/to-do", article)
        .then(() => {
          alert("Submitted");
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
      //this.history.push("/")  r-r-d
  
      //*** */
      axios
        .get("http://localhost:3000/to-do")
        .then((response) => {
          //data = response.data;
          console.log(response.data);
          //props.handleFetchToRedux();
          dispatch(fetchList(response.data))
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
      //history.push("/table");
    };
    const fetchData = () =>{
        axios
      .get(`http://localhost:3000/to-do`)
      .then((res) => {
        console.log(res.data);
        //data = res.data;
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
