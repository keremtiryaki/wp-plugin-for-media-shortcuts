<?php
/**
 * Plugin Name: add-media-shortcut-for-stores
 * Plugin URI: http://trototype.com
 * Description: Shortcut for stores media
 * Version: 0.0.1
 * Author: Kerem Tiryaki
 * Author URI: http://trototype.com
 * License: The MIT License (MIT)
 */

function add_my_android() {
    echo '<a href="#" id="insert-my-android" class="button">Playstore</a>';
	echo '<a href="#" id="insert-my-itunes" class="button">iTunes</a>';
	echo '<a href="#" id="insert-my-win" class="button">Windows</a>';
}

add_action('media_buttons', 'add_my_android', 15);

function include_media_button_js_file() {
	wp_enqueue_script('media_button', '/wp-content/plugins/add-media-shortcut-for-stores/js/addUrl.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_media', 'include_media_button_js_file');

?>