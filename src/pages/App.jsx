import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage"
import Country from './Country';
import NavBar from '../components/NavBar';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import ErrorPage from './ErrorPage';

const initialState = {
  data: [],
  continentData: [],
  searchForCountryData: [],
  screenMode: false,
  notFoundCountryErr: false
}

function reducer(state, action) {
  switch(action.type) {
    case "data-arrived":
      return {...state, data: action.payload}
    case "selectContinent" :
      return {...state, continentData: action.payload}
    case "searchForCountry": 
      return {...state, searchForCountryData: action.payload.searchData, notFoundCountryErr: action.payload.notFoundCountryErr}
    case "screenMode": 
      return {...state,  screenMode: action.payload}
    case "countryNotFound": 
      return {...state,  notFoundCountryErr: action.payload}


    default:
        return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
    const {data, screenMode, notFoundCountryErr} = state;
    
    const regionArr = data && data.map(obj => obj.region)
    const continents = [...new Set(regionArr)]

   useEffect(function() {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:8000/data/");
        const resTest = await axios.get("/api/data")
        console.log(resTest.data);
        
        
        
        dispatch({ type: "data-arrived", payload: res.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  
  return (
     <BrowserRouter>
     <NavBar screenMode={screenMode} onScreenMode={dispatch}/>
      <Routes>
        <Route path="/" element={<HomePage state={state} dispatch={dispatch} continents={continents} notFoundCountryErr={notFoundCountryErr} />} />
        <Route path="/country" element={<Country screenMode={screenMode} />} />
        <Route path="*" element={<ErrorPage screenMode={screenMode} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
