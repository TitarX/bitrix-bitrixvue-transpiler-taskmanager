<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
{
    die();
}

return [
    'js' => [
        './dist/taskmanager.bundle.js',
    ],
    'css' => [
        './dist/taskmanager.bundle.css',
    ],
    'rel' => [
		'ui.vue3',
		'main.core',
	],
    'skip_core' => false,
];
