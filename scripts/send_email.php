<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $email = $_POST["email"];
    $telephone = $_POST["telephone"];
    $company = $_POST["company"];
    $issue = $_POST["issue"];
    $message = $_POST["message"];

    // Set the recipient email address
    $to = "izhmash47@gmail.com"; // Replace with your actual email address

    // Set email subject
    $subject = "Contact Form Submission from $first_name $last_name";

    // Compose the email message
    $message = "Vorname: $first_name\n";
    $message .= "NachName: $last_name\n";
    $message .= "Email: $email\n";
    $message .= "Telephone: $telephone\n";
    $message .= "Unternehmen: $company\n";
    $message .= "Anliegen: $issue\n";
    $message .= "Nachricht:\n$message";

    // Set headers
    $headers = "From: $email";

    // Send the email
    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        echo "Message sent successfully. We will get back to you soon!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
