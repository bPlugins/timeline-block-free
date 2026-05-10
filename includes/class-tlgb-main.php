<?php
if ( ! defined( 'ABSPATH' ) ) exit;
if(!class_exists('TLGBTimeline')){
  class TLGBTimeline {
    public function __construct() {
      add_action('plugins_loaded', [__CLASS__, 'load_dependencies']);
      add_shortcode('timeline_block', [__CLASS__, 'tlgb_shortcode']);
    }
  
    public static function load_dependencies() {
      require_once TLGB_DIR_PATH . 'class-tlgb-block.php';
      require_once TLGB_DIR_PATH . 'includes/class-tlgb-cpt.php';
      include_once TLGB_DIR_PATH . 'includes/class-tlgb-admin.php';
      include_once TLGB_DIR_PATH . 'includes/class-tlgb-options.php';
    } 
  
    public static function tlgb_shortcode($atts) {
      $atts = shortcode_atts([
					'id' => 0,
				],$atts, 'timeline_block');

			$post_id = absint( $atts['id'] );

			if ( ! $post_id ) {
				return '<p>Invalid timeline ID.</p>';
			}

			$post = get_post( $post_id );

			if ( ! $post || $post->post_type !== 'timeline_block' ) {
				return '<p>Timeline not found.</p>';
			}

			$blocks = parse_blocks( $post->post_content );

			if ( empty( $blocks ) ) {
				return '<p>No timeline content found.</p>';
			}

			foreach ( $blocks as $block ) {
				if ( isset( $block['blockName'] ) && $block['blockName'] === 'tlgb/b-timeline-block' ) {
					return render_block( $block );
				}
			}

			return '<p>Timeline block not found in this post.</p>';
    } 
  }
}