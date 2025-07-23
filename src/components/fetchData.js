import axios from 'axios';

export default async function fetchData(dispatch, countryName) {
    try {
      const res = await axios.get(`http://localhost:8000/data/`);

      const targetCountry = res.data.filter(obj => obj.id === countryName)


      const borderCountries = targetCountry?.at(0)?.borders?.map(item => res.data.filter(obj => obj.alpha3Code === item)).map(obj => {
        const [countryArr] = obj
        return {id: countryArr.id, name: countryArr.name}
        
      })
      
      dispatch({type: "data-arrive", payload: {borderCountries, country: targetCountry}})
    } catch (err) {
      console.log(err);
    }
  }
