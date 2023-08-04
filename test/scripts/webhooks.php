<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
$botToken = "6105394242:AAGA2YLRWWaok2jrxMWgjip8KMKZSVdcMQY";
$chatId = "-1001943094890";
$apiUrl = "https://api.telegram.org/bot" . $botToken;

$data = json_decode(file_get_contents('php://input'), true) ?? [];

if (!empty($data)) {
    $text = $data['message']['text'] ?? '';

    if (!empty($text)) {
        $response = [
            'chat_id' => $chatId,
            'text' => $text,
        ];

        $url = $apiUrl . "/sendMessage?" . http_build_query($response);
        
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1); // Add this line
$telegramResponse = curl_exec($curl);

        $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        $curlError = curl_error($curl);
        curl_close($curl);

        if ($httpCode >= 200 && $httpCode < 300) {
            echo json_encode(['status' => 'success']);
        } else {
            $error = [
                'type' => 2,
                'message' => 'Telegram API error',
                'file' => __FILE__,
                'line' => __LINE__,
                'response' => $telegramResponse,
                'http_code' => $httpCode,
                'curl_error' => $curlError,
            ];
            echo json_encode(['status' => 'error', 'message' => 'Telegram API error', 'error' => $error]);
        }

    } else {
        echo json_encode(['status' => 'error', 'message' => 'Empty message']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Empty data']);
}
