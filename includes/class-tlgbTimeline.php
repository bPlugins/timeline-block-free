<?php
if(!class_exists('TLGBTimeline')){
  class TLGBTimeline {
    public function __construct() {
      add_action('plugins_loaded', [__CLASS__, 'load_dependencies']);
      add_shortcode('timeline_block', [__CLASS__, 'tlgb_shortcode']);
    }
  
    public static function load_dependencies() {
      require_once TLGB_DIR_PATH. 'class-tlgbBlock.php';
      require_once TLGB_DIR_PATH . 'includes/functions.php';
      require_once TLGB_DIR_PATH . 'includes/class-tlgbCPT.php';
      include_once TLGB_DIR_PATH . 'includes/AdminMenu.php';
      $b_timeline = TLGB_DIR_PATH . 'b-timeline/b-timeline.php';
      if (tlgbIsPremium() && file_exists($b_timeline)) {
        include_once $b_timeline;
      }
    }
  
    public static function tlgb_shortcode($atts) {
      if (isset($atts['id'])) {
        $post = get_post($atts['id']);
    
        if ($post) {
            $blocks = parse_blocks($post->post_content);
    
            foreach ($blocks as $block) {
                if ($block['blockName'] === 'tlgb/b-timeline-block') {
                    return render_block($block);
                }
            }
        } else {
            return 'Post not found or invalid post type.';
        }
      }
    } 
  }
}