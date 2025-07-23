import { useEffect } from 'react'
import DropDownSearch from '../components/DropDownSearch'
import SearchInupt from '../components/SearchInupt'
import FilterBar from '../reuseableComponent/FilterBar'
import Main from '../components/Main'




export default function HomePage({state, dispatch, continents, notFoundCountryErr}) {

  const {data, continentData, searchForCountryData, screenMode} = state;
    
    
    function selectTask(e) {
        const targetVal = e.target.value
        const renderCountry = data.slice().filter(obj => obj.region === targetVal)

        dispatch({type: "selectContinent", payload: targetVal === "Filter by region" ? [] : renderCountry})
    }

    function searchForCountryTask(e) {
        const inputVal = e.target.value.toLowerCase();
        const searchData = data.filter(obj => {
            const name = obj.name.toLowerCase();
            if(name.indexOf(inputVal) !== -1) return obj
            
        })

       

        if(searchData.length !== 0) {
            dispatch({type: "searchForCountry", payload: {searchData: inputVal !== "" ? searchData : [], notFoundCountryErr: false}})
            
        } else {
            
            dispatch({type: "countryNotFound", payload: true})
        }
        
        
    }



 


  useEffect(() => {
      document.body.style.backgroundColor = screenMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 99%)"
      document.getElementById("root").style.color = screenMode ? "hsl(0, 0%, 99%)" : "hsl(207, 26%, 17%)"
  }, [screenMode])



  return (
    <div className="flex flex-col items-center">

        <FilterBar styleVariant="flex justify-between my-5 w-[95%] max-w-[1200px]">
            <SearchInupt screenMode={screenMode} onSearCh={searchForCountryTask}/>
            <DropDownSearch screenMode={screenMode} onSelect={selectTask} data={continents}/>
        </FilterBar>
        {!notFoundCountryErr && <Main continentData={continentData} screenMode={screenMode} searchForCountryData={searchForCountryData} data={data}/>}

        {notFoundCountryErr && <p className="w-[95%] font-medium">No country found with the search name...</p>}
    </div>
  )
}
