export const getCountry = async (setBorderCountry, alpha3Code, setError) => {
  if (alpha3Code !== undefined) {
    fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
      .then(async (response) => {
        if (response.ok === true) {
          var data = await response.json();
          if (data) {
            // console.log(data)
            setError(false);
            setBorderCountry(data);
          }
        } else if (response.ok === false || response.status === "404") {
          throw Error("country not found");
        }
      })
      .catch((error) => {
        setError(error);
        console.clear();
      });
  }
};
