<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <meta charset="utf-8">
    <title>Elementis</title>

    <meta name="robots" content="index,follow">
    <meta name="description" content="Example of components you can re-use.">
    <meta name="keywords" content="example, sample, demo, components, atomic, reuse">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- TWITTER - https://dev.twitter.com/cards/overview -->
    <meta name="twitter:card" content="summary_large_image">
    <!-- <meta name="twitter:site" content="@username"> -->
    <meta name="twitter:title" content="Elementis">
    <meta name="twitter:description" content="Example of components you can re-use.">
    <meta name="twitter:image" content="/lib/core/images/sharing-large.jpg"> <!-- 1200x630 -->

    <!-- FACEBOOK - http://ogp.me -->
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en">
    <meta property="og:title" content="Elementis">
    <meta property="og:description" content="Example of components you can re-use.">
    <!-- <meta property="og:url" content="http://www.domain.tld/path/to/master-copy.html"> -->
    <meta property="og:image" content="/lib/core/images/sharing-large.jpg">
    <meta property="og:image" content="/lib/core/images/sharing-small.jpg"> <!-- 600x315 -->

    <link rel="icon" type="image/png" sizes="32x32" href="/lib/core/images/favicon-32.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/lib/core/images/icon-60.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/lib/core/images/icon-76.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/lib/core/images/icon-120.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/lib/core/images/icon-152.png">
    <link rel="shortcut icon" sizes="196x196" href="/lib/core/images/icon-196.png">

    <link rel="stylesheet" type="text/css" href="/lib/core/styles/dependencies.css" media="all">
    <link rel="stylesheet" type="text/css" href="/lib/site-example/styles/coming-soon.css" media="all">
</head>

<body>
    <header id="demo-header">
        <div class="content">
            <h1>Elementis</h1>
            <p>
                Simple, scss-based, elements for quick and friendly front-end development.<br/>
                See below link to component demo pages.
            </p>
        </div>
    </header>

    <main id="demo-main">
        <div class="content">
            <div class="tiles">
            <?php
                foreach (glob('templates/**/*.html') as $template):
                    $component = explode('/', str_replace('.html','',$template));
                    $componentName = $component[1];
                    $pageName = end($component);
            ?>
                <a class="tile" href="<?= $template ?>" target="_blank">
                    <span><?= $componentName ?></span> / <span><?= $pageName ?></span>
                </a>
            <?php
                endforeach;
            ?>
            </div>
        </div>
    </main>

    <link rel="stylesheet" type="text/css" href="/lib/core/scripts/dependencies.js" media="all">
</body>
</html>
