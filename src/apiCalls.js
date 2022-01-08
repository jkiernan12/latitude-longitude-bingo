const fetchCountryData = () => {
  return fetch('http://localhost:8080/api/v1/countries')
    .then(response => response.json())
    .catch(error => console.log(error))
}

export {fetchCountryData};
