var map;
var service;
var infowindow;

function initMap() {
  var skye = new google.maps.LatLng(57.304650, -6.223610);

  map = new google.maps.Map(document.getElementById('map'), {
        center: skye,
        zoom: 10
    });

    // Locate restaurants nearby

  var request = {
        location: skye,
        radius: '20000',
        type: ['lodging']
    };

    // opens map info window

    infowindow = new google.maps.InfoWindow();

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

// Return restaurants nearby

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarkers(results[i]);
    }
  }
}

// Create Markers on the map for the neaby restaurants

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

// Accomodation Search

// Restaurant Search

// Attractions Search