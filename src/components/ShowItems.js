import React from 'react'
import axios from "axios";
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'


let data;
const ShowItems = (props) => {
    
    useEffect(()=>{
        axios
      .get(`http://localhost:3000/to-do`)
      .then((res) => {
        console.log(res.data);
        data = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
      },[])

      const counter = useSelector(state => state)
      console.log("counter",counter)
      const dispatch = useDispatch()

    const fetchData = () =>{
        axios
      .get(`http://localhost:3000/to-do`)
      .then((res) => {
        console.log(res.data);
        data = res.data;
        
      })
      .catch((err) => {
        console.log(err);
      });
    }
    console.log(props)
    
    return (
        <div>
            <h3>List of tasks </h3>
            {/* <button onClick={fetchData}>See list</button> */}
        <table id="customers">
          <tr>
            <th>id</th>
            <th>Task</th>
            <th>Status</th>
            
          </tr>
          {data ? data.map((user, i) => (
            <tr>
              {user.id ? <td>{user.id}</td> : <td>--</td>}
              {user.task ? <td>{user.task}</td> : <td>--</td>}
              {user.completed ? <td>{user.completed}</td> : <td>--</td>}
              {/* {user.address ? <td>{user.address}</td> : <td>--</td>}
              {
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              }
              {
                <td>
                  <button onClick={() => handleUpdate(user)}>Update</button>
                </td>
              } */}
            </tr>
          )):null}
        </table>

        </div>
    )
}

export default ShowItems
