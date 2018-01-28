var map, infoWindow;

/* Has the map already been initiated? */
var initiated = false;

function loadMap() {
    if (initiated == false) {
        initMap();
        initiated = true;
    }
}

/* Initiates the map on the modal */
function initMap() {

    /* Defines a new map */
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });

    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
}

/* Handle errors with browsers that do not support the map */
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

  function calcSymptomNumber() {
        var checkboxes = [];

        var numberOfCheckboxes = 15;

        // get all checkbox elemetns
        for(var i = 0; i < numberOfCheckboxes; i++){
            var num = i + 1;
            document.getElementById("checkbox-" + num).setAttribute("class", "test");
            //numberOfCheckboxes[i].setAttribute("class", "test");
        }
      document.getElementById("checkbox-1").setAttribute("class", "test");
  }

