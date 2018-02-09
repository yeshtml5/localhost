<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--meta-->
    <meta charset="UTF-8"/>
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!--library-->
    <link type="text/css" rel="stylesheet" href="/src/css/common.css">
    <link type="text/css" rel="stylesheet" href="/src/css/layout.css">
    <script type="text/javascript" src="/src/lib/jquery.js"></script>
    <script type="text/javascript" src="/src/lib/angular.js"></script>
    <script type="text/javascript" src="/src/lib/angular-route.js"></script>
    <!--app-->
    <script type="text/javascript" src="/App.js"></script>
    <script type="text/javascript" src="/pages/style/buttonCtrl.js"></script>

    <!--
    <script type="text/javascript" src="/src/js/core.js"></script>
    <script type="text/javascript" src="/src/js/common.js"></script>
    -->
</head>
<body ng-app="localApp" ng-controller="localCtrl">
<header class="container">
    <nav class="bg-blue">
        <a class="menu" href="#!/">HOME</a>
        <a class="menu" href="#!/button">Button</a>
        <a class="menu" href="#!/test">test</a>
    </nav>
</header>
<main class="container">
    <article class="viewer" ng-view></article>
</main>
<footer>
    <section>
        copyright
    </section>
</footer>
</body>
</html>
