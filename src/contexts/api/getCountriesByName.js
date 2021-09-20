export const getCountriesByName = async (setCountries, setError, name) => {
  if (name !== "") {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(async (response) => {
        if (response.ok === true) {
          var data = await response.json();
          if (data) {
            // console.log(data)
            setError(false);
            setCountries(data);
          }
        } else if (response.ok === false || response.status === "404") {
          throw("country not found");
        }
      })
      .catch((error) => {
        // console.log(error)
        setError(error);
        // console.clear();
      });
  }
};
