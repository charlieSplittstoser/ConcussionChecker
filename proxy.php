<?php

header("Access-Control-Allow-Origin: *");

/* Key, Latitude, Longitude */
//$c = $_GET['a'];
$lat = $_GET['lat'];
$lng = $_GET['lng'];

//if($c == "pjm") {
    $url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=Closest+hospital&location=" . $lat . "," . $lng . "&type=hospital&key=AIzaSyAeuPWQF7BynD5kceMl59kFsUKQ8I7mPTM";
/*} else {
    $url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=Closest+hospital&location=" . $lat . "," . $lng . "&type=hospital&key=AIzaSyAeuPWQF7BynD5kceMl59kFsUKQ8I7mPTM";
}*/

/* Open request */
$handle = fopen($url, "r");

/* Handle request and output the response for the client to read */
if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        echo $buffer;
    }

    /* Close the request handle */
    fclose($handle);
}

?>