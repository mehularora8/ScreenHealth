$(document).ready(function () {
        var request = $.ajax({
            url: "https://api.unsplash.com/photos/random",
            method: "GET",
            data: { client_id: 'b3edcbff864ef66e5236d0866f535ffa587aaa7ac12a9b99bd979dead01bde4c', query: 'city%20night%20dark', orientation: 'landscape'},
            success: function (response) {
                var dataArray = response;
                console.log(dataArray);
                var image = dataArray.urls.full;
                console.log(image);
                document.getElementById("body").style.backgroundImage = image;
                document.getElementById("body").style.backgroundSize = "cover";
            }
        });
    });
