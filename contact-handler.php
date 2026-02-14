<?php
/**
 * Texas Built Plumbing - Contact Form Handler
 * Upload this file to your Hostinger public_html root.
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// ONLY change this to your desired email
$to_email = "webcore112@gmail.com"; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if ($data) {
        $name = strip_tags(trim($data["name"]));
        $phone = strip_tags(trim($data["phone"]));
        $email = filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL);
        $service = strip_tags(trim($data["service"]));
        $message = strip_tags(trim($data["message"]));

        if (empty($name) || empty($phone) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(["message" => "Please complete all required fields correctly."]);
            exit;
        }

        $subject = "New Estimate Request: $service from $name";
        $email_content = "Name: $name\n";
        $email_content .= "Phone: $phone\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Service: $service\n\n";
        $email_content .= "Message:\n$message\n";

        $headers = "From: Texas Built Website <noreply@texasbuiltplumbing.com>\r\n";
        $headers .= "Reply-To: $email\r\n";

        if (mail($to_email, $subject, $email_content, $headers)) {
            http_response_code(200);
            echo json_encode(["message" => "Email sent successfully."]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Server failed to send email."]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["message" => "Invalid data received."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["message" => "Access denied."]);
}
?>