var map;
var service;
var infowindow;
var markers = [];

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

        clearMarkers();

        var skye = new google.maps.LatLng(57.304650, -6.223610);
        var accomodation = {
            location: skye,
            radius: '20000',
            type: ['lodging']
        };

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(accomodation, callback);
    }

    // Locate restaurants nearby

    function restaurantSearch(){

        clearMarkers();

        var skye = new google.maps.LatLng(57.304650, -6.223610);
        var restaurant = {
            location: skye,
            radius: '20000',
            type: ['restaurant']
        };

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(restaurant, callback);
    }

    // Locate attractions nearby

    function attractionSearch(){

        clearMarkers();

        var skye = new google.maps.LatLng(57.304650, -6.223610);
        var attractions = {
            location: skye,
            radius: '20000',
            type: ['tourist_attraction']
        };

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(attractions, callback);
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

  markers.push(marker);

  // listens for click on marker to display detail

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

// Google Documentation for Clearing Markers

// Sets the map on all markers in the array.

      function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }

      // Removes the markers from the map, but keeps them in the array.
      function clearMarkers() {
        setMapOnAll(null);
      }

      // Deletes all markers in the array by removing references to them.
      function deleteMarkers() {
        clearMarkers();
        markers = [];
      }

/* Omitting for the time being

    // Displays results and detail in the search results section 

    function searchResults() {
        document.getElementById('searchResults')
    }

    /* Clears results from search results section 

    function clearResults() {

    }
*/

// Clears markers from map