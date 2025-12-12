let countryOp = document.getElementById('country');
let stateOp = document.querySelector('#state');
let cityOp = document.querySelector('#city');
let apikey = "V21hTmtTY25kbTBabncwT2ZPTU5ubTRNTnJDZkdKWXVyc0kxTnNaeg==";

const getStatesByCountry = async (id) => {
    const response = await fetch(`https://api.countrystatecity.in/v1/countries/${id}/states`, {
        headers: { 'X-CSCAPI-KEY': `${apikey}` }
    });

    const states = await response.json();
    
    for (let s in states) {
        let statecode = states[s].iso2;
        let stateoption = document.createElement("option");
        stateoption.value = statecode;
        stateoption.textContent = states[s].name;
        stateOp.appendChild(stateoption);
    }
};

const getCityByState = async (cid, sid) => {
    const response = await fetch(`https://api.countrystatecity.in/v1/countries/${cid}/states/${sid}/cities`, {
        headers: { 'X-CSCAPI-KEY': `${apikey}` }
    });

    const cities = await response.json();

    for (let c in cities) {
        let id = cities[c].name;
        let cityOption = document.createElement("option");
        cityOption.value = id;
        cityOption.textContent = id;

        cityOp.appendChild(cityOption);
    }
}

for (let country in countryCodes) {
    let code = countryCodes[country];
    let option = document.createElement("option");
    option.value = code;
    option.textContent = country;
    countryOp.appendChild(option);
}

countryOp.addEventListener("change", () => {
    let id = countryOp.value;
    stateOp.innerHTML = `<option value="default">Select a state</option>`;
    cityOp.innerHTML = `<option value="default">Select a city</option>`;
    getStatesByCountry(id);
});

stateOp.addEventListener("change", () => {
    let sid = stateOp.value;
    let cid = countryOp.value;
    cityOp.innerHTML = `<option value="default">Select a city</option>`;
    getCityByState(cid, sid);
});















let apikeyw = "f0ce81830d4ad598f3879e4ad0de54fb";

async function weather(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikeyw}`;
    const response = await fetch(url);
    const data = await response.json();
    let temp = data.main.temp
    console.log(temp - 273, "Celc");
    return data;
}
