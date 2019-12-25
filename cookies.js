function setCookie(cookie_value){
	/*var date = new Date();
	date.setTime(date.getTime()+(expiration_days * 24 * 60 * 60 * 1000)); //Days to milliseconds
	var expiry = date.toGMTString();*/

	chrome.storage.sync.set({'username': cookie_value}, function() {
	    console.log('Value is set to ' + cookie_value);
	});
}

function getCookie(){

	chrome.storage.sync.get(['username'], function(result) {
		if (typeof result.value === 'undefined'){
			return "";
		} else {
			console.log('Value currently is ' + result.value);
			return result.value;
		}
	 });			
}

var namechange = document.getElementById('gear');