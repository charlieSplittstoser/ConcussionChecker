var map, infoWindow;

/* Has the map already been initiated? */
var initiated = false;

function loadMap() {
    if (initiated == false) {
        initMap();
        initiated = true;
    }
}


symptomssarr = {"headache", 
"loss of consciousness",
"Confusion or disorientation",
"Lasting or recurrent dizziness",
"Difficulty recognizing people or places",
"Ringing in ear"
"Changes in behavior/ irritability", 
"Repeated vomiting/nausea",
"Blurred Vision",
"Change in eating or sleeping patterns",
"Loss of balance/unsteady walking",
"sensitivity to light and noise",
"dilated pupils",
"Concentration and memory complaints"} // array of sysmptoms' names

priorityarr = {8.85,8.0,7.5,7.88,6.92,4.0,3.85,7.73,4.0,4.5,5.58,5.77,3.27,8.27} // corresponding priorities
symptoms = []




function SymptomClass(symptom, priority) { // class to store name priorty and if it was checked or not (capatalized S and c)
  this.symptom = symptom
  this.priority = priority;
  this.checked = false;
}

finalarr = {}; // array to story classes we make
while (symptomsarr[i]) { //make each class for each symptom
  var symptomClass = new SymptomClass(symptomsarr[i],priorityarr[i]);
  finalarr[i] = symptomClass;
  i++;
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
        $('#checkbox-'+i).Class = "asda"
        var numberOfCheckboxes = 15;

        // get all checkbox elemetns
         for(var i = 0; i < numberOfCheckboxes; i++){
            var num = i + 1;
        //     console.log(num);
        $('#badge'+num).checked(true);//addClass('test');
       //document.getElementById("checkbox-" + num).setAttribute("class", "test");
         }
      //document.getElementById("checkbox-1").setAttribute("class", "test");
  }

function checkBox(id) {
    // if doesn't have class checked add it, if it has it remove it
    if(document.getElementById(id).classList.contains("checked")){
        document.getElementById(id).classList.remove('checked');
        document.getElementById(id).style.backgroundColor = '#ffffff';//white
    }
    else {
        document.getElementById(id).style.backgroundColor = '#db8215';// orange
        document.getElementById(id).classList.add("checked");
    }

}

