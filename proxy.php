<?php
header("Access-Control-Allow-Origin: *");

$c = $_GET['a'];
$lat = $_GET['lat'];
$lng = $_GET['lng'];
if($c == "pjm") {
    $url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=Closest+hospital&location=" . $lat . "," . $lng . "&type=hospital&key=AIzaSyDfjRkSCxZ-VYDKGyvtpI0_1gYIaBlfqX8";
} else {
    $url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=Closest+hospital&location=" . $lat . "," . $lng . "&type=hospital&key=AIzaSyDfjRkSCxZ-VYDKGyvtpI0_1gYIaBlfqX8";
}

$handle = fopen($url, "r");

if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        echo $buffer;
    }

    fclose($handle);
}



?>