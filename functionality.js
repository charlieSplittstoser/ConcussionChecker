var map, infoWindow;

/* Grab user's location and find 3 nearby hospitals */
function getHospitals() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        /* Query Google Maps API */
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
            }
        };
        xhttp.open("GET", "proxy.php?a=pjm&lat="+pos.lat+"&lng="+pos.lng, true);
        xhttp.send();

      }, function() {
        alert("Error. Location is incompatible with your device.");
      });
    } else {
      // Browser doesn't support Geolocation
      alert("Error. Location is incompatible with your device.");
    }
}

/* Weighting algorithm for tags */
function calcSymptomNumber() {
  var priorityArr = [8.85,8.0,7.5,7.88,6.92,4.0,3.85,7.73,4.0,4.5,5.58,5.77,3.27,8.27, 5.0];

  var numberOfCheckboxes = 15;
  var badge = 'badge';
  var total = 0;
  var sum = 0;
  for (var i = 1; i <= numberOfCheckboxes; i++){
      if(document.getElementById(badge + i).classList.contains("checked")) {
          total = total + priorityArr[i-1];
       }
       sum = sum + priorityArr[i-1];
   }

   result = "";

   if (total >= 15)
      result = "High Risk";
   else if (total >= 10)
      result = "Intermediate Risk";
   else
      result = "Low Risk";

   document.getElementById("total").innerHTML = result;
}

/* Handle boolean check values */
function checkBox(id) {
    if(document.getElementById(id).classList.contains("checked")){
        document.getElementById(id).classList.remove('checked');
        document.getElementById(id).style.backgroundColor = '#ffffff';//white
    } else {
        document.getElementById(id).style.backgroundColor = '#ff8f0f';// orange
        document.getElementById(id).classList.add("checked");
    }
}
