export const getCountries = async (setCountries) => {
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        var data = await response.json();
        if(data){
            // console.log(data)
            setCountries(data);
        }
        else{
            console.log('error');
        }
    }