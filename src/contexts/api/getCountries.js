export const getCountries = async (setCountries, setError) => {
  fetch(`https://restcountries.com/v2/all`)
    .then(async (response) => {
      if (response.ok === true) {
        var data = await response.json();
        if (data) {
          if (data.hasOwnProperty("status")) {
            throw Error("connection error");
          } else {
            setError(false);
            setCountries(data);
          }
        }
      } else if (response.ok === false || response.status === "404") {
        throw Error("connection error");
      }
    })
    .catch((error) => {
      setError(error);
      //   console.clear();
    });
};
