<?php
if(isset($_POST["submit"])) {
$recipient = "yougotketchuponit@gmail.com"; //my email
echo $subject = 'Email message from Point Plumbing';
echo $name = $_POST ["firstname"];
echo $email = $_POST["email"];
echo $strokes = $_POST["strokes"];
echo  $message = $_POST["message"];

 $mailBody="Name: $name\nEmail: $email\n\n$message"; 

 mail($recipient, $subject, $mailBody, "From: $name <$email>");

echo $thankYou="<p>Thank you! We will be in contact with you shortly.</p>";

}
?>