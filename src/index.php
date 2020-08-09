<?php

if (empty($_SERVER['HTTPS']) && $_SERVER['SERVER_NAME'] == 'yy.o-gata.online') {
        header('Location: https://yy.o-gata.online');
}

if ($_SERVER['SERVER_NAME'] != 'yy.o-gata.online') {
        header('Location: maintenance.html', 503);
        exit;
}

?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>End roll</title>
  <script src="js/jquery-3.5.1.min.js" type="text/javascript"></script>
  <script src="js/scroll.js" type="text/javascript"></script>
  <link rel="stylesheet" type="text/css" href="css/roll.css">
</head>
<body style="background-color: black;">
  <div style="text-align:center; margin:0 auto;">
    <video id="bgvideo" src="media/600609367.mp4" type="video/mp4" playsinline="" muted="muted" loop style="display: none"></video>
    <img id="iconb" src="img/60_20200719224125.png" class="sticon" style="display: block;">
    <img id="icona" src="img/461_20200627235425.png" class="sticon" style="display: none;">
  </div>
  <noscript>If you want to see whole contents, enable JavaScript for your browser.</noscript>
<div id="result"></div>
<div id="staff"></div>
<script src="js/load.js"></script>
</body>
</html>
