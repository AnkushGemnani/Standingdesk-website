<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$email_from='amazingankush2714@gmail.com';
$email_subject ='New form submission';
$email_body="User Name:$name.\n".
             "User Email: $visitor_email.\n".
             "Subject: $subject\n".
             "User message: $message.\n";

$to ="ankush.gemnani@viie.edu.in";
$headers =  "From:$email_from\r\n";     
$headers .="Reply-To: $visitor_email\r\n";
mail($to,$email_subject,$email_body,$headers);
header("Location.ContactUs.html")

?>