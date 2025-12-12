const countryCodes = {
    "Afghanistan": "AF",
    "Australia": "AU",
    "Austria": "AT",
    "Azerbaijan": "AZ",
    "Bangladesh": "BD",
    "Bhutan": "BT",
    "Canada": "CA",
    "India": "IN",
    "Japan": "JP",
    "Mexico": "MX",
    "Russia": "RU",
    "Singapore": "SG",
    "South Africa": "ZA",
    "South Korea": "KR",
    "Spain": "ES",
    "Sri Lanka": "LK",
    "United Kingdom": "GB",
    "United States": "US",
    "Germany": "DE"
};


// Export if needed (for Node.js)
// export default countries;

//to fetch state from country
let apikey = "V21hTmtTY25kbTBabncwT2ZPTU5ubTRNTnJDZkdKWXVyc0kxTnNaeg==";

const getStatesByCountry = async (countryCode) => {
  const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states`, {
    headers: { 'X-CSCAPI-KEY' : `${apikey}` }
  });

  if (response.ok) {
    const states = await response.json();
    console.log(`Found ${states.length} states in ${countryCode}`);
    console.log(states);
    return states;
  } else {
    console.error('Country not found or no states available');
  }
};

// to fetch cities from state
const getCityByState = async (countryCode, stateCode) =>{
    const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`, {
    headers: { 'X-CSCAPI-KEY' : `${apikey}` }
  });
  if (response.ok) {
    const cities = await response.json();
    console.log(cities);
    return cities;
  } else {
    console.error('Country not found or no states available');
  }

}
getCityByState('IN', 'GJ');
// getStatesByCountry('IN');