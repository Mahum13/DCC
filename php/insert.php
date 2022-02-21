<?php
  include_once 'db.php';
  if (isset($_POST['submit-contact'])) {
    echo "Message sent!01";
    $FName = ($_POST["firstname"]);
    $LName = ($_POST["lastname"]);
    $Email = ($_POST["email"]);
    $Mobile = ($_POST["phone"]);
    $Country = ($_POST["country"]);
    $Message = ($_POST["message"]);
    $City = ($_POST["city"]);
    $usertable = "ContactTable";
    $sql = "INSERT INTO `ContactTable` (FirstName, LastName, Email, Mobile, Country, Message, City) VALUES ('$FName', '$LName', '$Email', '$Mobile', '$Country', '$Message', '$City')";
    if (mysqli_query($conn, $sql)) {
      echo "<script>window.location='http://dynamiccommunications.com.au/'</script>";
    } else {
      echo "Error: " . $sql . ":-" . mysqli_error($conn);
    }

  } else if (isset($_POST['submit-course'])) {
    
    $FName = ($_POST["firstname"]);
    $LName = ($_POST["lastname"]);
    $Email = ($_POST["email"]);
    $Mobile = ($_POST["phone"]);
    $City = ($_POST["city"]);
    $Country = ($_POST["country"]);
    $CourseName = ($_POST["course"]);
    $ModuleDate = ($_POST["date"]);
    $sql = "INSERT INTO `RegistrationTable` (FirstName, LastName, Email, Phone, City, Country, CourseName, ModuleDate) VALUES ('$FName', '$LName', '$Email', '$City', '$Country',  '$CourseName', "$ModuleDate")";
    if (mysqli_query($conn, $sql)) {
      echo "<script>window.location='http://dynamiccommunications.com.au/'</script>";
    } else {
      echo "Error: " . $sql . ":-" . mysqli_error($conn);
    }
  }
  mysqli_close($conn);
?>
