var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
apik = "fc99515d674d3e6b413c5d6f2518ff23";

console.log(wind);

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityinput.value+'&units=imperial&appid=fc99515d674d3e6b413c5d6f2518ff23').
    then(res => res.json())

    .then(data => {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var wndspd = data['wind']['speed']
        var iconCode = data.weather[0].icon;
        var iconURL = "http://openweathermap.org/img/w" + iconCode + ".png";

        city.innerHTML = 'City: ' + nameval;
        temp.innerHTML = 'Temp: ' + tempature + "<img src=" + iconURL; 
        description.innerHTML = 'Conditions:' + descrip;
        wind.innerHTML = 'Wind Speed: ' + wndspd + 'km/h';s

        var el 


     
    })

    
    // .catch(err => alert('you entered something stupid'))

})





