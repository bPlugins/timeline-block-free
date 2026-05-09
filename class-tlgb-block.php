<?php
if (!defined('ABSPATH')) exit;
if (!class_exists('TLGBPlugin')) {
    class TLGBPlugin {

      public function __construct() {
        add_action('init', [$this, 'init']); 
        add_action('enqueue_block_assets', [$this, 'tlgb_enqueue_scripts']); 
      }

      // Function to enqueue block assets for backend and frontend
      public function tlgb_enqueue_scripts() {
        wp_enqueue_script(
          'timelineJS',
          TLGB_DIR_URL . 'assets/js/timeline.min.js',
          ['jquery'],
          TLGB_VERSION,
          true
        );

        // Enqueue the CSS
        wp_enqueue_style(
          'timelineCSS',
          TLGB_DIR_URL . 'assets/css/timeline.min.css',
          [],
          TLGB_VERSION
        );
      }

      
      public function init() {
        register_block_type(__DIR__ . '/build');
        wp_set_script_translations('tlgb-editor', 'timeline-block', plugin_dir_path(__FILE__) . 'languages');
      }
    }
    new TLGBPlugin();
}