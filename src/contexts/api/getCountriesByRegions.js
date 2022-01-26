export const getCountriesByRegions = async (setCountries, setError, region = '') => {
    // if(region !== ''){
    //     const response = await fetch(`https://restcountries.com/v2/continent/${region}`
    //     );
    //     var data = await response.json();
    //     if(data){
    //         setCountries(data);
    //     }
    //     else{
    //         setError('Could not retrieve countries')
    //     }
    // }

    fetch(`https://restcountries.com/v2/continent/${region}`)
      .then(async (response) => {
        if (response.ok === true) {
          var data = await response.json();
          if (data) {
            if (data.hasOwnProperty("status")) {
              throw "connection error";
            } else {
              setError(false);
              setCountries(data);
            }
          }
        } else if (response.ok === false || response.status === "404") {
          throw "technical difficulties :(";
        }
      })
      .catch((error) => {
        setError(error);
        //   console.clear();
      });
}