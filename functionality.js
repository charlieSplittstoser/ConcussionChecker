var map, infoWindow;


var symptomsarr = ["headache", "loss of consciousness","Confusion or disorientation","Lasting or recurrent dizziness",

/* Has the map already been initiated? */
var initiated = false;

function loadMap() {
    if (initiated == false) {
        getLocation();
        initiated = true;
    }
}

var symptomssarr = ["headache", "loss of consciousness","Confusion or disorientation","Lasting or recurrent dizziness",
"Difficulty recognizing people or places","Confusion or disorientation",
"Changes in behavior/ irritability", "Repeated vomiting/nausea","Blurred Vision",
"Change in eating or sleeping patterns","Loss of balance/unsteady walking","sensitivity to light and noise",
"dilated pupils","Concentration and memory complaints"]; // array of sysmptoms' names

var priorityarr = [8.85,8.0,7.5,7.88,6.92,7.5,3.85,7.73,4.0,4.5,5.58,5.77,3.27,8.27]; // corresponding priorities


symptomsarr = ["headache",
"loss of consciousness",
"Confusion or disorientation",
"Lasting or recurrent dizziness",
"Difficulty recognizing people or places",
"Ringing in ear",
"Changes in behavior/ irritability", 
"Repeated vomiting/nausea",
"Blurred Vision",
"Change in eating or sleeping patterns",
"Loss of balance/unsteady walking",
"sensitivity to light and noise",
"dilated pupils",
"Concentration and memory complaints"] // array of sysmptoms' names

symptoms = []

function SymptomClass(symptom, priority) { // class to store name priorty and if it was checked or not (capatalized S and c)
  this.symptom = symptom
  this.priority = priority;
  this.checked = false;
}

var finalarr = []; // array to story classes we make
var i = 0;
while (symptomsarr[i]) { //make each class for each symptom
  var symptomClass = new SymptomClass(symptomsarr[i],priorityarr[i]);
  finalarr[i] = symptomClass;
  i++;
}

function getHospitals() {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               var obj = JSON.parse(xhttp.responseText);
               for (var i = 0; i < 3; i++) {
                  var name = obj['results'][i]['name'];
                  var address = obj['results'][i]['formatted_address'];
                  var p = document.createElement('p');
                  var parent = document.getElementById('hospitalArea');
                  var addressLink = 'https://www.google.com/maps/place/' + address.split(' ').join('+');
                  p.innerHTML = name + " - " + "<a href=" + addressLink + " target='_blank'>Directions</a>";
                  parent.appendChild(p);
               }
               
               console.log(JSON.stringify(obj['results'][0]['formatted_address']));
            }
        };
        xhttp.open("GET", "proxy.php?a=pjm", true);
        xhttp.send();

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
      var priorityArr = [8.85,8.0,7.5,7.88,6.92,4.0,3.85,7.73,4.0,4.5,5.58,5.77,3.27,8.27];

        var numberOfCheckboxes = 14;
        var badge = 'badge';
         for (var i = 0; i < numberOfCheckboxes; i++){
            var num = i + 1;
        //     console.log(num);
             if(document.getElementById(badge + num).classList.contains("checked")) {
                console.log(num);
             }
       //document.getElementById("badge" + num).setAttribute("class", "test");
         }
      // //document.getElementById("checkbox-1").setAttribute("class", "test");
  }

function checkBox(id) {
    // if doesn't have class checked add it, if it has it remove it
    if(document.getElementById(id).classList.contains("checked")){
        document.getElementById(id).classList.remove('checked');
        document.getElementById(id).style.backgroundColor = '#ffffff';//white
    }
    else {
        document.getElementById(id).style.backgroundColor = '#ff8f0f';// orange
        document.getElementById(id).classList.add("checked");
    }

}
