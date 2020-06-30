var map;
var service;
var infowindow;

// Initialises map over the Iske of Skye 

function initMap() {
  var skye = new google.maps.LatLng(57.304650, -6.223610);

  map = new google.maps.Map(document.getElementById('map'), {
        center: skye,
        zoom: 10
    });

    // opens map info window

    infowindow = new google.maps.InfoWindow();
}

// Performs place searches  

    // Locate Accomodation nearby

    function accomodationSearch(){
        var skye = new google.maps.LatLng(57.304650, -6.223610);
        var accomodation = {
            location: skye,
            radius: '20000',
            type: ['lodging']
        };

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(accomodation, callback);

        clearMarkers();
    }

    // Locate restaurants nearby

    function restaurantSearch(){
        var skye = new google.maps.LatLng(57.304650, -6.223610);
        var restaurant = {
            location: skye,
            radius: '20000',
            type: ['restaurant']
        };

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(restaurant, callback);

        clearMarkers();
    }

    // Locate attractions nearby

    function attractionSearch(){
        var skye = new google.maps.LatLng(57.304650, -6.223610);
        var attractions = {
            location: skye,
            radius: '20000',
            type: ['tourist_attraction']
        };

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(attractions, callback);

        clearMarkers();
    } 

// Returns results

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarkers(results[i]);
    }
  }
}

// Creates markers on the map for nearby places

function createMarkers(place) {
  place.geometry.location;
  var marker = new google.maps.Marker({
      map:map,
      position: place.geometry.location
  });

  // listens for click on marker to display detail

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

// Displays results and detail in the search results section 

function searchResults() {
    
}

// Clears markers from map

function clearMarkers() {
    var marker = new google.maps.Marker
    marker.setMap(null);
}

// Clears results from search results section

function clearResults() {

}