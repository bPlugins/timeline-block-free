<?php
if(!class_exists('TLGBBTimeline')){
    class TLGBBTimeline {
        public function __construct() {
            add_action('init', [__CLASS__, 'init'], 0);
            add_action('wp_enqueue_scripts', [__CLASS__, 'timeline_scripts']);
            add_shortcode('btimeline', [__CLASS__, 'bptl_shortcode']);
        }
    
        public static function init() {
            if (!class_exists('CSF')) {
                require_once 'inc/codestar/csf-config.php';
            }


            $is_b_timeline_active = is_plugin_active( 'b-timeline/b-titmeline.php' );
            $is_pro_active        = function_exists( 'tlgbIsPremium' ) && tlgbIsPremium();

            if ( ! ( $is_b_timeline_active && $is_pro_active ) ) {
                require_once 'inc/class-bptl-options.php';
                require_once TLGB_DIR_PATH . 'b-timeline/class-bptl-admin.php';	
            }
            
        }   
        
        public static function timeline_scripts() {
            wp_register_script('bptl-timeline', TLGB_DIR_URL . 'b-timeline/public/assets/js/timeline.min.js', ['jquery'], TLGB_VERSION, true);
            wp_register_script('bptl-timeline-config', TLGB_DIR_URL . 'b-timeline/public/assets/js/public.js', ['jquery', 'bptl-timeline'], TLGB_VERSION, true);
        
            wp_register_style('timeline-style', TLGB_DIR_URL . 'b-timeline/public/assets/css/timeline.min.css', NULL, 'v0.0.2', 'all');
            
        }       
    
        public static function bptl_shortcode($atts) {
            extract(shortcode_atts(array(
                'id' => null
            ), $atts));
            ob_start();
            
            wp_enqueue_script('bptl-timeline');
            wp_enqueue_script('bptl-timeline-config');
            wp_enqueue_style('timeline-style');
        
            // Timeline Meta Data 
            $bptl_datas = get_post_meta($id, '_bptimeline_', true); ?>
        
            <!-- Start Parent Container -->
            <div id="btimeline-<?php echo esc_attr($id); ?>">
                <div class="timeline bp_titleline" data-timeline='<?php echo esc_attr(wp_json_encode($bptl_datas)); ?>'>
                    <div class="timeline__wrap">
                        <div class="timeline__items">
        
                            <?php foreach ($bptl_datas['item_datas'] as $item_data):
        
                                $timeline_label = $item_data['date_label'] ?? 'January';
                                $timeline_desc = $item_data['item_details'] ?? 'Timeline Description';
                                $timeline_position = $item_data['item_position'] ?? '';
                                ?>
        
                                <div class="timeline__item <?php echo esc_attr($timeline_position); ?> fadeIn">
                                    <div class="timeline__item__inner">
                                        <div class="timeline__content__wrap">
                                            <div class="timeline__content">
                                                <p class="title"><?php echo esc_html($timeline_label) ?> </p>
                                                <p><?php echo wp_kses_post($timeline_desc) ?> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div> <!-- End Parent Container -->
            <style>
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline__content {
                    background:
                        <?php echo esc_attr($bptl_datas['item_bg']); ?>
                    ;
                    border:
                        <?php echo esc_attr($bptl_datas['item_border_size']); ?>
                        px solid
                        <?php echo esc_attr($bptl_datas['item_border_color']); ?>
                    ;
        
                }
        
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline__content .title{
                    font-size: <?php echo esc_attr($bptl_datas['item_fontSize']); ?>px;
                    color: <?php echo esc_attr($bptl_datas['item_color']); ?>;
                    font-style: <?php echo esc_attr($bptl_datas['item_fontStyle']); ?>;
                    font-weight: <?php echo esc_attr($bptl_datas['item_fontWeight']); ?>
                }
        
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline__content p {
                    font-size: <?php echo esc_attr($bptl_datas['label_fontSize']); ?> px;
                    color: <?php echo esc_attr($bptl_datas['label_color']); ?>;
                    font-style: <?php echo esc_attr($bptl_datas['label_fontStyle']); ?>;
                    font-weight: <?php echo esc_attr($bptl_datas['lebel_fontWeight']); ?>
                }
        
                /* Timeline Dot */
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline__item::after {
                    background-color: '#fff';
                    border: 5px solid <?php echo esc_attr($bptl_datas['bar_dot_color']); ?>;
                }
        
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline--horizontal .timeline-divider,
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline:not(.timeline--horizontal)::before {
                    background-color: <?php echo esc_attr($bptl_datas['bar_bg_color']); ?>;
                }
        
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline__item--left .timeline__content::before {
                    border-left: 11px solid
                        <?php echo esc_attr($bptl_datas['item_border_color']); ?>
                    ;
                }
        
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline__item--right .timeline__content::before {
                    border-right: 12px solid
                        <?php echo esc_attr($bptl_datas['item_border_color']); ?>
                    ;
                }
        
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline__item--left .timeline__content::after {
                    border-left: 11px solid
                        <?php echo esc_attr($bptl_datas['item_bg']); ?>
                    ;
                }
        
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline__item--right .timeline__content::after {
                    border-right: 12px solid
                        <?php echo esc_attr($bptl_datas['item_bg']); ?>
                    ;
                }
        
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline__item.timeline__item--top .timeline__content::before {
                    border-top: 14px solid
                        <?php echo esc_attr($bptl_datas['item_border_color']); ?>
                        !important;
                }
        
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline__item.timeline__item--bottom .timeline__content::before {
                    border-bottom: 14px solid
                        <?php echo esc_attr($bptl_datas['item_border_color']); ?>
                        !important;
                    border-top: none;
                }
        
                /* Horizontal view */
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline__item.timeline__item--top .timeline__content::after {
                    border-top: 12px solid
                        <?php echo esc_attr($bptl_datas['item_bg']); ?>
                    ;
                }
        
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline__item.timeline__item--bottom .timeline__content::after {
                    border-bottom: 12px solid
                        <?php echo esc_attr($bptl_datas['item_bg']); ?>
                    ;
                    border-top: none;
                }
        
                /* Mobaile view */
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline--mobile .timeline__item .timeline__content::before {
                    border-left: none;
                    border-right: 12px solid
                        <?php echo esc_attr($bptl_datas['item_border_color']); ?>
                    ;
                }
        
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline--mobile .timeline__item .timeline__content::after {
                    border-left: none;
                    border-right: 12px solid
                        <?php echo esc_attr($bptl_datas['item_bg']); ?>
                    ;
                }
        
                <?php echo '#btimeline-' . esc_attr($id); ?>
                .timeline-nav-button {
                    background-color: #fff;
                    border: 2px solid
                        <?php echo esc_attr($bptl_datas['bar_bg_color']); ?>
                    ;
                }
            </style>
        
            <?php
            return ob_get_clean();
        }
    
    }
    new TLGBBTimeline();
}


