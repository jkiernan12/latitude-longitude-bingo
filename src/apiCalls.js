const fetchCountryData = () => {
  return fetch('https://latitude-longitude-bingo-api.herokuapp.com/api/v1/countries')
    .then(response =>
      {if (response.ok) {
        return response.json()
      }
      throw response.message
    }
    )
}

export {fetchCountryData};
