<?php $firstname = $_POST['firstname'];
$email = $_POST['email'];
$strokes = $_POST['strokes'];
$message = $_POST['message'];
$formcontent="From: $firstname \n Message: $message";
$recipient = "yougotketchuponit@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>