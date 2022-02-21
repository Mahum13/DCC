<?php

  $servername = "localhost";
  $username = "dynami29_admin";
  $password = "Aliyah1969";
  $dbname = "dynami29_CONTACT";
  $conn = mysqli_connect($servername, $username, $password, $dbname);

  // Check connection
  if (!$conn) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
  }

?>
