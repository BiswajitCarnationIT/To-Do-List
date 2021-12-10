import logo from './logo.svg';
import './App.css';
import AddItem from './components/AddItem';
import ShowItems from './components/ShowItems';
import { useEffect } from "react";
import axios from "axios";
import UpdateItem from './components/UpdateList';

let data;

function App() {
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
  return (
    <div>
      <h1>To do list</h1>
      <AddItem/>
      <ShowItems data={data}/>
      <UpdateItem/>
    </div>
  );
}

export default App;
