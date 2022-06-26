const city_name = document.getElementById('location_name').value;
const api_key = '486e894d175364c877ce241900b4f28b'
const deg = document.getElementById("degree").innerText;
const cityName = document.getElementById("cityName").innerText;
const image = document.getElementById('weatherImg').src;
const weatherDesc = document.getElementById("description").innerText;


const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(){
    const input_location_name = document.getElementById('location_name').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input_location_name}&appid=${api_key}&units=metric`)
    .then(res => res.json())
    .then(data => displayData(data));

    function displayData(data){
        // console.log(data);
        const temps = data.main.temp;
        const name = data.name;
        const icons = data.weather[0].icon;
        const condition = data.weather[0].description;
        console.log(temps, name, icons, condition);
        document.getElementById("degree").innerText = temps;
        document.getElementById("cityName").innerText = name;
        document.getElementById('weatherImg').src = `https://openweathermap.org/img/wn/${icons}@2x.png`;
        document.getElementById('description').innerText = condition;
        document.getElementById('location_name').value = ""
    
    }

           

     

    });






