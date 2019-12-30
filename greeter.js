		var salutations = ["Hope you have a great day!",
		"Did you drink enough water today?", 
		"Have you given your eyes some rest in a while?", 
		"Today might be a good day to get some chores done!", 
		"Interested in knowing how this website was coded? Click the GitHub icon in the bottom right."];

		var greetings = ["Hello", "Aloha", "Bonjour", "Hola", "Zdravstvuyte", "Guten Tag", "Yassas", "Salve"];

		//Get and Set cookies to be worked on
		/*function setCookie(cookie_value){

			chrome.storage.sync.set({'username': cookie_value}, function() {
			    console.log('Value is set to ' + cookie_value);
			});
		}*/

		/*function getCookie(){

			chrome.storage.sync.get(['username'], function(result) {
				if (typeof result.value === 'undefined'){
					return "";
				} else {
					console.log('Value currently is ' + result.value);
					return result.value;
				}
			 });			
		} */

		function clock(){
			var date = new Date();
			var hours = date.getHours();
			var minutes = date.getMinutes();

			if(minutes < 10 && hours < 10){
				document.getElementById("clock").innerHTML =  "0" + hours + ':0' + minutes;
			} else if (minutes > 10 && hours > 10) {
				document.getElementById("clock").innerHTML =  hours + ':' + minutes;
			} else if (minutes < 10 && hours > 10) {
				document.getElementById("clock").innerHTML =  hours + ':0' + minutes;
			} else if (minutes > 10 && hours < 10) {
				document.getElementById("clock").innerHTML =  "0" + hours + ':' + minutes;
			}

			var datediv = document.getElementById('date');

			var day = date.getDay();
			switch (new Date().getDay()) {
			  case 0:
			    datediv.innerHTML = "Sunday<br>";
			    break;
			  case 1:
			    datediv.innerHTML = "Monday <br>";
			    break;
			  case 2:
			    datediv.innerHTML = "Tuesday<br>";
			    break;
			  case 3:
			    datediv.innerHTML = "Wednesday<br>";
			    break;
			  case 4:
			    datediv.innerHTML = "Thursday<br>";
			    break;
			  case 5:
			    datediv.innerHTML = "Friday<br>";
			    break;
			  case  6:
			    datediv.innerHTML = "Saturday<br>";
			}

			datediv.innerHTML += date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear();
		}

		function salutation(){
			var i = Math.floor(Math.random() * salutations.length); 
			document.getElementById("salutation").innerHTML = salutations[i];
		}

		function newuser(){
			var newuser = prompt("Change of name: please enter new name:", "");
				if (newuser != "" && newuser != null) {
     			  setCookie(newuser);
     			  location.reload();
 			    } else {
 			    	alert("Please enter a valid name");
 			    	newuser();
 			    }
		}

		function greet(){
			var i = Math.floor(Math.random() * greetings.length); 
			document.getElementById("append").innerHTML = greetings[i] + "." /*+ " <i id = 'gear' class='fa fa-gear' style = 'font-size: 3vh'></i>"*/ ;
		}

		function startup(){

			setInterval(clock, 1000);
			greet();
			setInterval(greet, 5000);
			salutation();
			setInterval(salutation, 30000);

			/*var user = getCookie();
			console.log(user);

			if(typeof user === "undefined"){
				document.getElementById("append").innerHTML = "Welcome back, " + user + "!" + " <i id = 'gear' class='fa fa-gear' style = 'font-size: 3vh'></i>" ;
				salutation();
				setInterval(salutation, 30000);
				
			} else{
				newuser();
			}*/
		}

		$(document).ready(function(){
			var request = $.ajax({
			    url: "https://api.unsplash.com/photos/random",
			    method: "GET",
			    data: { client_id: 'b3edcbff864ef66e5236d0866f535ffa587aaa7ac12a9b99bd979dead01bde4c', query: 'city%20night%20dark', orientation: 'landscape'},
			    success: function (response) {
			        var dataArray = response;
			        console.log(dataArray);
			        var image = dataArray.urls.full;
			        console.log(image);
			        document.getElementById("body").style.background = 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(' + image + ')';
			        document.getElementById("body").style.backgroundSize = "cover";
			    }
			});

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
			startup();	
	});

		$(document).ajaxComplete(function () {
		    document.getElementById('loadingmask').style.display = 'none';
		});

