<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger y sanitizar los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $service = htmlspecialchars($_POST['service']);
    $contact_preference = htmlspecialchars($_POST['contact-preference']);
    $message = htmlspecialchars($_POST['message']);

    // Dirección de destino y asunto del correo
    $to = 'sebastian.andana18@gmail.com'; // Cambia esto a tu dirección de correo electrónico
    $subject = 'Nueva Solicitud de Cotización';
    $body = "Nombre: $name\nCorreo: $email\nTeléfono: $phone\nServicio: $service\nPreferencia de Contacto: $contact_preference\nMensaje: $message";
    $headers = "From: $email";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        // Redirigir al usuario a la página de contacto después de enviar el correo
        header('Location:index.html'); // Puedes ajustar esta URL según sea necesario
        exit();
    } else {
        // En caso de error, redirigir a la misma página con un mensaje de error
        header('Location:index.html'); // Puedes ajustar esta URL según sea necesario
        exit();
    }
}
