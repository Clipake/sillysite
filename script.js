$(document).ready(function() {
    $.getJSON("https://api.ipify.org?format=json",
            function (data) {
 
                // Displayin IP address on screen
                $("#result").html("Your IP is: " + data.ip);
            })
});