import { useEffect, useReducer} from 'react';
import FilterBar from '../reuseableComponent/FilterBar';
import Card from '../reuseableComponent/Card';
import BackBtn from '../components/BackBtn';
import fetchData from '../components/fetchData';
import RenderCard from '../components/RenderCard';

const initiallState = {
  country: [],
  borderCountries: []
}


function reducer(state, action) {
  
  switch(action.type) {
    case "data-arrive": 
    return {...state, country: action.payload.country.at(0), borderCountries:  action.payload.borderCountries}

    default:
        return state;
  }

}


export default function Country({screenMode}) {
  const [state, dispatch] = useReducer(reducer, initiallState)
  const {country, borderCountries} = state
  
  const countryId = localStorage.getItem("country?description")
  
  function onBorderCountry(e) {
    fetchData(dispatch, e.target.id);
  }


  useEffect(function() {
  
  fetchData(dispatch, countryId);
  }, [countryId]);


  useEffect(() => {
      document.body.style.backgroundColor = screenMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 99%)"
      document.getElementById("root").style.color = screenMode ? "hsl(0, 0%, 99%)" : "hsl(207, 26%, 17%)"
  }, [screenMode])

  
  

  return (
    <div className="flex flex-col gap-10 mb-20">
      <FilterBar styleVariant="w-[90%] max-w-[1200px] flex gap-1 self-center mt-7">
          <BackBtn screenMode={screenMode}/>
      </FilterBar>

      <Card styleVariant="flex justify-center">
       <RenderCard country={country} borderCountries={borderCountries} onBorderCountry={onBorderCountry} screenMode={screenMode}/>
      </Card>
    </div>
  )
}
