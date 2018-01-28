var map, infoWindow;

/*
var symptomssarr = ["headache", "loss of consciousness","Confusion or disorientation","Lasting or recurrent dizziness",
"Difficulty recognizing people or places","Confusion or disorientation",
"Changes in behavior/ irritability", "Repeated vomiting/nausea","Blurred Vision",
"Change in eating or sleeping patterns","Loss of balance/unsteady walking","sensitivity to light and noise",
"dilated pupils","Concentration and memory complaints"]; // array of sysmptoms' names
*/

function getHospitals() {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        console.log(pos.lat);

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
        //handleLocationError(true, infoWindow, map.getCenter());
        alert("Error");
      });
    } else {
      // Browser doesn't support Geolocation
      alert("Error");
      //handleLocationError(false, infoWindow, map.getCenter());
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
      getHospitals();
      var priorityArr = [8.85,8.0,7.5,7.88,6.92,4.0,3.85,7.73,4.0,4.5,5.58,5.77,3.27,8.27, 5.0];

        var numberOfCheckboxes = 15;
        var badge = 'badge';
        var total = 0;
        var sum = 0;
         for (var i = 0; i < numberOfCheckboxes; i++){
            var num = i + 1;
        //     console.log(num);
             if(document.getElementById(badge + num).classList.contains("checked")) {
                console.log(num);
                total = total + priorityArr[i];
             }
             sum = sum+ priorityArr[i]

       //document.getElementById("badge" + num).setAttribute("class", "test");
         }
         result = "";
         if (total >= 15) {
          result = "High Risk"
         }
         else if (total>=10) {
          result = "Intermidate Risk"
         }
         else{
          result = "Low Risk"
         }
         document.getElementById("total").innerHTML = result;
         console.log(total);
         console.log(sum);
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
