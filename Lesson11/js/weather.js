const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c9e3042008b963f420ce5b64bb77f439&units=imperial";
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
//console.log(jsObject);
document.getElementById("current").textContent = jsObject.weather[0].description;
document.getElementById("temp").textContent = jsObject.main.temp;
document.getElementById("hum").textContent = jsObject.main.humidity;
document.getElementById("wspeed").textContent = jsObject.wind.speed;
});

const apiFCURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c9e3042008b963f420ce5b64bb77f439&units=imperial";
fetch(apiFCURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    //select 5 array from the 40
    let _18hour = jsObject['list'].filter((day) => day.dt_txt.includes('18:00:00'));
    console.log(_18hour);

    _18hour.forEach(list => {
        let d = new Date(list.dt_txt);
    console.log(d);
    let image = `http://openweathermap.org/img/wn/${list.weather[0].icon}@4x.png`;
    let desc = list.weather[0].description;
    document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
    document.getElementById(`forecast${day+1}`).textContent = list.main.temp;
   
    
    document.getElementById(`imageIcon${day+1}`).setAttribute("src", image); 
    document.getElementById(`imageIcon${day+1}`).setAttribute("alt", desc);
    console.log(image);
    console.log(desc);
    day++;
    });
    });

    