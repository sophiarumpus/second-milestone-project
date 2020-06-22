var map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: { lat: 51.522573, lng: 0.467391},
    });
}