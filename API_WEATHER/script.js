/// SELECTORS
const button = document.querySelector('.searchbtn');
const input = document.querySelector('.searchInput');
const name = document.querySelector('.name');
const temp = document.querySelector('.temp');
const clouds = document.querySelector('.clouds');
const windSpeed = document.querySelector('.windSpeed');
const windDeg = document.querySelector('.windDeg');
const gust = document.querySelector('.gust');
const visi = document.querySelector('.visibility');
const qnh = document.querySelector('.QNH');
const h3 = document.querySelectorAll('h3');


/// ENTER = CLICK
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      button.click()
    }
});

///EVENT CLICK
button.addEventListener('click', () =>{
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=467e873a6fcad896ed34c6d7849baea7`)
  .then(response => response.json())
  .then((data) => {
        let nameText = data['name'];
        let tempText = data['main']['temp'];
        let cloudsText = data['clouds']['all'];
        let windSpeedText = data['wind']['speed'];
        let windDegText = data['wind']['deg'];
        let gustText = data['wind']['gust'];
        let visiText = data['visibility'];
        let qnhText = data['main']['pressure'];

        let temperature = parseFloat(tempText)-273.15;
        let wgust = parseFloat(gustText)* 1.94;
        let windV = parseFloat(windSpeedText)* 1.94;
        let vis = parseInt(visiText)/1000;
      
            name.innerHTML = `City: ${nameText}`;
            temp.innerHTML = `Temperature: ${temperature.toFixed(2)}°C`;
            clouds.innerHTML = `Cloud cover: ${cloudsText}%`;
            windSpeed.innerHTML = `Wind velocity: ${windV.toFixed(2)}kt`;
            windDeg.innerHTML = `Wind direction: ${windDegText.toFixed(2)}°`;
            gust.innerHTML = `Gust: ${wgust.toFixed(2)}kt`;
            visi.innerHTML = `Visibility: ${vis}km`;
            qnh.innerHTML = `QNH: ${qnhText}hPa`; 

       
        h3.forEach(function(e){
            e.style.borderTop = "1px solid black";
        })   
 });
  
});