chrome.browserAction.onClicked.addListener(function()
{
    chrome.tabs.create({ url: "chrome://newtab" });
});

setInterval(function(){
	alert("Rest your eyes! It has been 20 minutes since you started looking at your screen. In order to keep your eyes healthy, please follow the 20/20/20 rule.");
}, 20 * 60 * 1000);

setInterval(function(){
	alert("Move around! It has been 60 minutes since you are in one location. Please get up and stretch your body!");
}, 60 * 60 * 1000);

setInterval(function(){
	alert("Hydration alert! It has been 90 minutes since you started working. If you haven't, please drink some water!");
}, 90 * 60 * 1000);