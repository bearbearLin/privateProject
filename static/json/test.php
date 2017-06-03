<?php 
	header('Access-Control-Allow-Origin:*');
	// $data=file_get_contents("https://api.douban.com/v2/book/1220562");
	$data=file_get_contents("http://www.baidu.com");
	echo $data;
 ?>