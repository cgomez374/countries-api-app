export const getCountry = async (setBorderCountry, alpha3Code) => {
    if(alpha3Code !== undefined){
        const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`);
        var data = await response.json();
        if(data){
            // console.log(data)
            setBorderCountry(data);
        }
        else{
            console.log('error');
        }
    }
}