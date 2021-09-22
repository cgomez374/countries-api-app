export const getCountriesByName = async (setCountries, setError, name) => {
  if (name !== "") {
    fetch(`https://restcountries.com/v2/name/${name}`)
      .then(async (response) => {
        if (response.ok === true) {
          var data = await response.json();
          if (data) {
            if(data.hasOwnProperty('status')){
              throw "country not found";
            }
            else {
              setError(false);
              setCountries(data);
            }
          }
        } else if (response.ok === false || response.status === "404") {
          throw "country not found";
        }
      })
      .catch((error) => {
        setError(error);
        console.clear();
        // console.log(error)
      });
  }
};
