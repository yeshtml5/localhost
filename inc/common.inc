<?php
/**
 * Created by PhpStorm.
 * User: bos
 * Date: 2018. 2. 8.
 * Time: 오후 6:55
 */

define("__ROOT__", $_SERVER['DOCUMENT_ROOT']);
define("__PATH__", __ROOT__ . "/");


function head()
{
    include_once __PATH__ . "/inc/header.inc";
}

function footer()
{
    include_once __ROOT__ . "/inc/footer.php";
}

?>