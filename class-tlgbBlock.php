<?php
if (!class_exists('TLGBPlugin')) {
    class TLGBPlugin {
      public function __construct() {
        add_action('init', [$this, 'init']); 
        add_action('enqueue_block_assets', [$this, 'tlgb_enqueue_scripts']); 

        add_action('wp_ajax_tlgbPipeChecker', [$this, 'tlgbPipeChecker']);
        add_action('wp_ajax_nopriv_tlgbPipeChecker', [$this, 'tlgbPipeChecker']);
        add_action('admin_init', [$this, 'registerSettings']);
        add_action('rest_api_init', [$this, 'registerSettings']);
      }

      function tlgbPipeChecker() {
        if (! isset($_POST['_wpnonce'])) {
          wp_send_json_error('Invalid Request');
        }
        $nonce = sanitize_text_field(wp_unslash($_POST['_wpnonce']));

        if (! wp_verify_nonce($nonce, 'wp_ajax')) {
          wp_send_json_error('Invalid Request');
        }

        wp_send_json_success([
          'isPipe' => [
            'isPipe' => tlgbIsPremium(),
            'adminUrl' => admin_url()
          ]
        ]);
      }

      function registerSettings() {
        register_setting('tlgbUtils', 'tlgbUtils', [
          'show_in_rest' => [
            'name' => 'tlgbUtils',
            'schema' => ['type' => 'string']
          ],
          'type' => 'string',
          'default' => wp_json_encode(['nonce' => wp_create_nonce('wp_ajax')]),
          'sanitize_callback' => 'sanitize_text_field'
        ]);
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


      function init() {
        register_block_type(__DIR__ . '/build');
        wp_set_script_translations('tlgb-editor', 'timeline-block', plugin_dir_path(__FILE__) . 'languages');
      }
    }
    new TLGBPlugin();
}