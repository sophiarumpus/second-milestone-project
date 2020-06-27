var map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 57.304650, lng: -6.223610},
    });
}

var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 