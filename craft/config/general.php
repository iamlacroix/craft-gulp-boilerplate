<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

$dev = getenv('CRAFT_ENV') == 'development' ? true : false;

$url = $_SERVER['SERVER_NAME'];
if ( array_key_exists('HTTP_X_FORWARDED_HOST', $_SERVER) ) {
  $url = $_SERVER['HTTP_X_FORWARDED_HOST'];
}
$url = "http://" . $url . "/";

$uploadsPath = 'content/';

return array(

  '*' => array(
    'omitScriptNameInUrls' => true,
    'cacheMethod' => 'file',
    'devMode' => $dev,
    'generateTransformsBeforePageLoad' => true,
    'postCpLoginRedirect' => 'entries',
    'environmentVariables' => array(
      'siteUrl'           => $url,
      'uploadsPath'       => $uploadsPath,
      'uploadsUrl'        => "$url$uploadsPath",
      'googleAnalytics'   => '',
      'facebookAppId'     => '',
    )
  ),

  'example.com' => array(
    'devMode' => false,
    'environmentVariables' => array(
      'siteUrl'           => "http://www.example.com/",
      'uploadsUrl'        => "http://www.example.com/$uploadsPath",
      'googleAnalytics'   => '',
      'facebookAppId'     => '',
    )
  ),

  '.dev' => array(
    'environmentVariables' => array()
  ),
  '.wf' => array(
    'environmentVariables' => array()
  )

);
