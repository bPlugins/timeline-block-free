<?php
if(!class_exists('TLGBBTimelineAdmin')){
    class TLGBBTimelineAdmin {

        public function __construct() {
            add_action('init', [__CLASS__,  'register_post_type']);
            if (is_admin()) {
                add_filter('post_row_actions', [__CLASS__, 'remove_row_actions'], 10, 2);
            }
            add_filter('post_updated_messages', [__CLASS__, 'updated_messages']);
            add_action('admin_head-post.php', [__CLASS__, 'hide_publishing_actions']);
            add_action('admin_head-post-new.php', [__CLASS__, 'hide_publishing_actions']);
            add_filter('gettext', [__CLASS__, 'change_publish_button'], 10, 2);
            add_filter('manage_btimeline_posts_columns', [__CLASS__, 'columns_head_only'], 10);
            add_action('manage_btimeline_posts_custom_column', [__CLASS__, 'columns_content_only'], 10, 2);
            add_action('edit_form_after_title', [__CLASS__, 'shortcode_area']);
            add_filter('admin_footer_text', [__CLASS__, 'admin_footer']);
            add_action('admin_enqueue_scripts', [__CLASS__, 'admin_style']);
        }
    
        public static function register_post_type() {
            $labels = array(
                'name' => __('Timeline', 'timeline-block'),
                'name_admin_bar' => __('Timeline', 'timeline-block'),
                'add_new' => __('Add New', 'timeline-block'),
                'add_new_item' => __('Add New ', 'timeline-block'),
                'new_item' => __('New Timeline ', 'timeline-block'),
                'edit_item' => __('Edit Timeline ', 'timeline-block'),
                'view_item' => __('View Timeline ', 'timeline-block'),
                'all_items' => __('Timeline - Lagacy', 'timeline-block'),
                'not_found' => __('Sorry, we couldn\'t find the Feed you are looking for.')
            );
            $args = array(
                'labels' => $labels,
                'description' => __('Timeline Options.', 'timeline-block'),
                'public' => false,
                'show_ui' => true,
                "show_in_rest" => true,
                'show_in_menu' => "edit.php?post_type=timeline_block",
                'query_var' => true,
                'rewrite' => array('slug' => 'b-timeline'),
                'capability_type' => 'post',
                'has_archive' => false,
                'hierarchical' => false,
                'supports' => array('title'),
            );
            register_post_type('btimeline', $args);
        }
    
        public static function remove_row_actions($idtions) {
            global $post;
            if ($post->post_type == 'btimeline') {
                unset($idtions['view']);
                unset($idtions['inline hide-if-no-js']);
            }
            return $idtions;
        }
    
        public static function hide_publishing_actions() {
            $my_post_type = 'btimeline';
            global $post;
            if ($post->post_type == $my_post_type) {
                echo '
                    <style type="text/css">
                        #misc-publishing-actions,
                        #minor-publishing-actions{
                            display:none;
                        }
                    </style>
                ';
            }
        }
    
        public static function updated_messages($messages) {
            $messages['btimeline'][1] = __('Timeline Item updated ', 'btimeline');
            return $messages;
        } 
    
        public static function change_publish_button($translation, $text) {
            if ('btimeline' == get_post_type())
                if ($text == 'Publish')
                    return 'Save';
    
            return $translation;
        }
    
         public static function shortcode_area() {
            global $post; 
            if ( $post->post_type === 'btimeline' ) : ?>
                <div class="bptl_shortcode">
                    <code 
                        class="shortcode_copy" 
                        data-code="[btimeline id='<?php echo esc_attr( $post->ID ); ?>']">
                        [btimeline id='<?php echo esc_attr( $post->ID ); ?>']
                    </code>

                    <p class="shortcode_desc">
                        <?php echo esc_html__( "Copy this shortcode and paste it into your post, page, or text widget content.", "bptl" ); ?>
                    </p>
                </div>

                <script>
                    document.addEventListener('click', function (e) {
                        var el = e.target.closest('.shortcode_copy');
                        if (!el) return;

                        navigator.clipboard.writeText(el.dataset.code).then(function () {
                            var original = el.textContent;
                            el.textContent = 'Copied!';

                            setTimeout(function () {
                                el.textContent = original;
                            }, 1000);
                        });
                    });
                </script>
            <?php endif;
        }
    
        public static function columns_head_only($defaults) {
            unset($defaults['date']);
            $defaults['directors_name'] = 'ShortCode';
            $defaults['date'] = 'Date';
            return $defaults;
        }
    
        public static function columns_content_only($column_name, $post_ID) {
            if ($column_name == 'directors_name') {
                echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr($post_ID) . '">
                <input value="[btimeline id=' . esc_attr($post_ID) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr($post_ID) . '\')" readonly>
                <span class="tooltip">Copy To Clipboard</span>
              </div>';
            }
        }

        public static function admin_footer($text) {
            if ('btimeline' === get_post_type()) {
                $url = 'https://wordpress.org/plugins/b-timeline/reviews/?filter=5#new-post';
                $text = sprintf(__('If you like <strong> Timeline </strong> please leave us a <a href="%s" target="_blank">&#9733;&#9733;&#9733;&#9733;&#9733;</a> rating. Your Review is very important to us as it helps us to grow more. ', 'timeline-block'), $url);
            }
            return $text;
        }

        public static function admin_style($hook) {
            if ('btimeline' !== get_post_type()) {
                return;
            }

            wp_register_style('bptl-admin-style', TLGB_DIR_URL . 'b-timeline/public/assets/css/admin-style.css');
            wp_enqueue_style('bptl-admin-style');
        }
    
    }
    new TLGBBTimelineAdmin();
}