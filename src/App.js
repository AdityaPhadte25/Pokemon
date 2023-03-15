import React,{useEffect,useState} from "react";
import MainPage from "./components/MainPage";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import axios from "axios";

const App = () => {

  const [data, setData] = useState([])
  const [limit,setLimit] = useState(20)

  useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`).then((response) => {
        return setData(response.data.results)
      })
  },[limit])

  return (
    <div>
    <BrowserRouter basename={"/Pokemon"}>
    <Routes>
      <Route path="/" element={<MainPage data={data} setLimit={setLimit}/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
};

export default App;