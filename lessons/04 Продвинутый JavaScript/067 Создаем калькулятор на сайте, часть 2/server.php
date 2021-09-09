<?php
$_POST = json_decode(file_get_contents("php://input"), true);  //Эта строка помогаем работтать с JSON
echo var_dump($_POST);