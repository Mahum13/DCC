<?php
  include_once 'db.php';
  $val = $_GET["value"];

  $val_M = mysqli_real_escape_string($conn, $val);
  $sql = "SELECT CourseName, Module, FromDate, ToDate FROM CoursesTable WHERE CourseName='$val_M'";
  $result = mysqli_query($conn, $sql);

  if ($result != 0) {
    echo "<select>";

     while ($rows = mysqli_fetch_assoc($result)) {
         echo "<option>".$rows["Module"].": ".$rows["FromDate"]." - ".$rows["ToDate"]."</option>";
    //   echo "<option>".$rows["Module"]."</option>";
     }
     echo "</select>";
   } else {
       echo "No selection Made";
   }

   function getCourses() {
     $sql = "SELECT CourseName FROM CoursesTable";
     $result = mysqli_query($conn, $sql);
     if ($result != 0) {
       echo "<select>";

       while ($rows = mysqli_fetch_assoc($result)) {
         echo "<option>".$rows["CourseName"]."</option>";
       }
       echo "</select>";

     } else {
       echo "No Courses Available";
     }

   }
    mysqli_close($conn);

?>
