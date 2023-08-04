<?php
header('Content-Type: application/json');
$botToken = "6105394242:AAGA2YLRWWaok2jrxMWgjip8KMKZSVdcMQY";
$chatId = "-1001943094890";
$apiUrl = "https://api.telegram.org/bot" . $botToken;

$data = json_decode(file_get_contents('php://input'), true);
$text = $data['message'] ?? '';

if ($text) {
    $response = [
        'chat_id' => $chatId,
        'text' => $text,
    ];

    file_get_contents($apiUrl . "/sendMessage?" . http_build_query($response));
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid message']);
}
