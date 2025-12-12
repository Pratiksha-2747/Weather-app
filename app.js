let apikeyw = "f0ce81830d4ad598f3879e4ad0de54fb";

async function weather(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikeyw}`;
    const response = await fetch(url);
    const data = await response.json();
let temp = data.main.temp
    console.log(temp - 273, "Celc");  
    return data;
}
