<?php
// Routes

$app->post('/login', function ($request, $response, $args) {
    $params = json_decode(file_get_contents('php://input'));

    $return = [
        'status' => 'error'
    ];

    if($params->username == 'teste' && $params->password == 'teste') {
      $return['status'] = 'success';
    }
    
    $response->getBody()->write(json_encode($return));

    return $response;
});
