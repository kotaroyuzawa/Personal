<?php
$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/kotaroyuzawa/' :
        require __DIR__ . '/home.php';
        break;
    case '/kotaroyuzawa/quereinstieg' :
        require __DIR__ . '/quereinstieg.php';
        break;
    case '/kotaroyuzawa/FAQ' :
        require __DIR__ . '/faq.php';
        break;
    case '/kotaroyuzawa/contact' :
        require __DIR__ . '/contact.php';
    default:
        http_response_code(404);
        require __DIR__ . '/404.php';
        break;
}
