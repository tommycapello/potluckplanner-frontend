import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';
import PotLuckList from './components/PotluckList';
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

const [items, setItems] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{
  const fetchItems = async ()=> {
    const result = await axios.get(`https://potluckplanner-2.herokuapp.com/api/potlucks `)
    console.log(result.data)
    setItems(result.data)
    setIsLoading(false)
  }
  fetchItems()},[])


  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <PotLuckList isLoading={isLoading}  items={items}/>
    </div>
  );
}

export default App;
