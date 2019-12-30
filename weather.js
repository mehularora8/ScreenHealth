/*function getCoords(){
    if(nagivator.geolocation){
        navigator.geolocation.getCurrentPosition(location){
            var lat = encodeURI(location.coords.latitude);
            var long = encodeURI(location.coords.longitude);
        }
    }
}

$(document).ready(function () {
        var request = $.ajax({
            url: "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather",
            method: "GET",
            data: { lat: lat, lon: long, appid: '90220591bfabe9b624628773d51625a4', units: 'metric' },
            success: function (response) {
                var dataArray = response;
                console.log(dataArray);
                console.log(dataArray.weather[0].icon);
                document.getElementById('temp').innerHTML = dataArray.main.temp - (dataArray.main.temp % 1) + '&deg;C';
                document.getElementById('pic').src = "http://openweathermap.org/img/w/" + dataArray.weather[0].icon + ".png";
            }
        });
    });
*/

//Current support is only for the Bay area. 
   
$(document).ready(function () {
        var request = $.ajax({
            url: "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather",
            method: "GET",
            data: { id: '3669881', appid: '90220591bfabe9b624628773d51625a4', units: 'metric' },
            success: function (response) {
                var dataArray = response;
                console.log(dataArray);
                document.getElementById('temp').innerHTML = dataArray.main.temp - (dataArray.main.temp % 1) + '&deg;C';
                var icon = dataArray.weather[0].icon;
                var weather_image = document.getElementById('pic');
                weather_image.src = "images/" + dataArray.weather[0].icon + ".png";
            }
        });
    });
