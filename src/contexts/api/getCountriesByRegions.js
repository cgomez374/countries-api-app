export const getCountriesByRegions = async (setCountries, setError, region = '') => {
    if(region !== ''){
        const response = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);
        var data = await response.json();
        if(data){
            setCountries(data);
        }
        else{
            setError('Could not retrieve countries')
        }
    }
}