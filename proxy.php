<?php


$c = $_GET['a'];
if($c == "pjm") {
    $url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=Closest+hospital&location=43.56,-97.86&type=hospital&key=AIzaSyDfjRkSCxZ-VYDKGyvtpI0_1gYIaBlfqX8";
} else {
    $url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=Closest+hospital&location=43.56,-97.86&type=hospital&key=AIzaSyDfjRkSCxZ-VYDKGyvtpI0_1gYIaBlfqX8";
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