let countryOp = document.getElementById('country');
let stateOp = document.querySelector('#state');
let cityOp = document.querySelector('#city');
let submit = document.querySelector('.submit');
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
    console.log(country);
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

submit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(cityOp.value);
    weather(cityOp.value);
});

let apikeyw = "f0ce81830d4ad598f3879e4ad0de54fb";
let weather1 = document.querySelector(".weather");
let city1 = document.querySelector(".city");
let data;
async function weather(city) {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikeyw}`;
    const response = await fetch(url);
    data = await response.json();
    let temp = data.main.temp - 273;

    window.open("data.html","_self");
    // console.log(temp, "Celc");
    // city1.innerText = `${cityOp.value}`;
    weather1.innerText = `${temp} Celc`;
}

// const text = "Weather info app";
// const textElement = document.querySelector('.h');
// let index = 0;
// let isDeleting = false;
// let typingSpeed = 150;
// let deletingSpeed = 100;
// let pauseTime = 2000;
// textElement.style.fontSize = "30px";

// function type() {
//     if (!isDeleting && index <= text.length) {
//         textElement.textContent = text.substring(0, index);
//         textElement.style.fontSize = "30px";
//         index++;

//         if (index > text.length) {
//             setTimeout(() => {
//                 isDeleting = true;
//                 type();
//             }, pauseTime);
//             return;
//         }

//         setTimeout(type, typingSpeed);
//     }
//     else if (isDeleting && index > 0) {
//         textElement.textContent = text.substring(0, index);
//         index--;

//         if (index <= 0) {
//             setTimeout(() => {
//                 isDeleting = false;
//                 index = 0;
//                 type();
//             }, 500);
//             return;
//         }

//         setTimeout(type, deletingSpeed);
//     }
// }

// // Start the animation
// type();















