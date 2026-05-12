<?php
if (!defined('ABSPATH')) exit;
$id = wp_unique_id('BTimelineBlock-');

// Filter out pro attributes
$tlgb_pro_attributes = [
    'theme8Animation',
    'theme3Animation',
    'theme5Animation',
    'theme4Animation',
    'accordionAnimation',
    'theme9Animation',
    'theme9CenturyStyles',
    'iconStyles',
    'theme8CardBorder',
    'theme8CardShadow'
];
 
foreach ($tlgb_pro_attributes as $tlgb_attr) {
    if (isset($attributes[$tlgb_attr])) {
        unset($attributes[$tlgb_attr]);
    }
}
?>
<div <?php echo get_block_wrapper_attributes(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> id='<?php echo esc_attr($id); ?>'
  data-attributes='<?php echo esc_attr(wp_json_encode($attributes)); ?>'></div>