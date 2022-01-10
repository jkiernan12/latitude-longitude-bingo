const fetchCountryData = () => {
  return fetch('http://localhost:8080/api/v1/countries')
    .then(response => 
      {if (response.ok) {
        return response.json()
      } 
      throw response.message
    }
    )
}

export {fetchCountryData};
