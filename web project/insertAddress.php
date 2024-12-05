<?php
// Define connection parameters
define("db_SERVER", "localhost");
define("db_USER", "root");
define("db_PASSWORD", "");
define("db_DBNAME", "addresses");

// Create connection
$con = mysqli_connect(db_SERVER, db_USER, db_PASSWORD, db_DBNAME);

if (!$con) {
    die("connection failed: " . mysqli_connect_error());//as exist 
}

// Get POST data
$address = $_POST['address'];

// Create SQL query with embedded variables
$sql = "INSERT INTO addresses (address)
 VALUES ('address')";

// Execute query and check for success
if (mysqli_query($con, $sql)) {
    echo "New student added successfully.";
} else {
    echo "Error: " . mysqli_error($con);
}

// Close connection
mysqli_close($con);
?>