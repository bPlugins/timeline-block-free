<?php if (!defined('ABSPATH')) {
  die;
} // Cannot access directly.

//
// Metabox of the PAGE
// Set a unique slug-like ID
//
$prefix = '_bptimeline_';

//
// Create a metabox
//
CSF::createMetabox($prefix, array(
  'title' => __('Timeline Options', 'timeline-block'),
  'post_type' => 'btimeline',
  'show_restore' => true,
));

//
// Create a section
//
CSF::createSection($prefix, array(
  'title' => __('Timeline Settings', 'timeline-block'),
  'icon' => 'fas fa-cog',
  'fields' => array(

    // Fields
    array(
      'id' => 'timeline_type',
      'title' => __('Timeline Type', 'timeline-block'),
      'type' => 'button_set',
      'subtitle' => __('Determines the structure of the Timeline.', 'timeline-block'),
      'desc' => __('Choose the Style of the Timeline.', 'timeline-block'),
      'options' => array(
        'vertical' => __('Vertical', 'timeline-block'),
        'horizontal' => __('Horizontal', 'timeline-block'),
      ),
      'default' => 'vertical'
    ),
    array(
      'id' => 'content_position',
      'title' => __('Content Position', 'timeline-block'),
      'type' => 'button_set',
      // 'subtitle' => 'Determines the structure of the Timeline.',
      'desc' => __("Choose 'Start' to display the timeline at the top (horizontal) or left (vertical), and choose 'End' to display the timeline at the bottom (horizontal) or right (vertical).", 'timeline-block'),
      'options' => array(
        'default' => __('Default', 'timeline-block'),
        'start' => __('Start', 'timeline-block'),
        'end' => __('End', 'timeline-block')
      ),
      'default' => 'start'
    ),
    array(
      'id' => 'date_location',
      'title' => __('Label / Date Location', 'timeline-block'),
      'type' => 'button_set',
      'subtitle' => __('Sets the location of the timeline dates. Top and bottom are only used in horizontal position. Also left and right are only used vertical position', 'timeline-block'),
      'desc' => __('Choose location of the timeline dates / Labels.', 'timeline-block'),
      'options' => array(
        'bottom' => __('Bottom', 'timeline-block'),
        'top' => __('Top', 'timeline-block'),
        'left' => __('Left', 'timeline-block'),
        'right' => __('Right', 'timeline-block')
      ),
      'default' => 'right',
    ),
    array(
      'id' => 'item_datas',
      'type' => 'group',
      'title' => __('Timeline Data ', 'timeline-block'),
      'subtitle' => __('Input Your Timeline Data', 'timeline-block'),
      'button_title' => __('Add New Data', 'timeline-block'),
      'fields' => array(
        array(
          'id' => 'date_label',
          'title' => __('Label', 'timeline-block'),
          'type' => 'text',
          'desc' => 'Use Year, Month, Day etc Name As Label. Ex:- ( \'2020\', \'Jan\', \'sun\' )',
          'default' => 'Jan'
        ),
        array(
          'id' => 'item_details',
          'title' => __('Details', 'timeline-block'),
          'type' => 'wp_editor',
          'desc' => __('Write / Input Details About Story Here', 'timeline-block'),
          'tinymce' => true,
          'quicktags' => true,
          'media_buttons' => true,
          'height' => '100px',
        ),
      )
    ), // End of Timeline Data
    array(
      'id' => 'start_item',
      'title' => __('Startup Index', 'timeline-block'),
      'type' => 'spinner',
      'subtitle' => __('When using the timeline in horizontal mode, define which item the timeline should start at.', 'timeline-block'),
      'desc' => __('Choose Startup Item of the Timeline. Input Number ', 'timeline-block'),
      'default' => '0',
      'dependency' => array(
        array('timeline_type', '==', 'horizontal'),
      ),
    ),
    array(
      'id' => 'move_item',
      'title' => __('Move Item', 'timeline-block'),
      'type' => 'spinner',
      'subtitle' => __('When using the timeline in horizontal mode, define how many items to move when clicking a navigation button.', 'timeline-block'),
      'desc' => __('Choose Move Item of the Timeline.', 'timeline-block'),
      'default' => '1',
      'dependency' => array(
        array('timeline_type', '==', 'horizontal'),
      ),
    ),
    array(
      'id' => 'visible_items',
      'type' => 'spinner',
      'title' => __('Visible Items', 'timeline-block'),
      'subtitle' => __('If using the timeline in horizontal mode, define how many items are visible in the viewport', 'timeline-block'),
      'desc' => __('Choose Display items to show', 'timeline-block'),
      'default' => '3',
      'dependency' => array(
        array('timeline_type', '==', 'horizontal'),
      ),
    ),
    array(
      'id' => 'vertica_trigger',
      'type' => 'spinner',
      'title' => __('Vertical Trigger', 'timeline-block'),
      'subtitle' => __('When using the timeline in vertical mode, define the distance from the bottom of the screen, in percent or pixels, that the items slide into view', 'timeline-block'),
      'desc' => __('Choose distance from the bottom of the screen,', 'timeline-block'),
      'unit' => '%',
      'default' => '15',
      'dependency' => array(
        array('timeline_type', '==', 'vertical'),
      ),

    ),
    array(
      'id' => 'rtl_mode',
      'type' => 'switcher',
      'title' => __('RTL Mode', 'timeline-block'),
      'subtitle' => __('When using the timeline in horizontal mode, RTL defines whether the timeline should start from the right. This overrides the startIndex setting.', 'timeline-block'),
      'desc' => __('Do you want activate it ?', 'timeline-block'),
      'text_on' => 'Yes',
      'text_off' => 'No',
      'default' => false,
      'dependency' => array(
        array('timeline_type', '==', 'horizontal'),
      ),
    ),

    // Typography and Style
    array(
      'type' => 'notice',
      'style' => 'success',
      'content' => __('Style & Typography Options : ', 'timeline-block'),
      'class' => 'tm_option_title',
    ),
    array(
      'id' => 'bar_bg_color',
      'type' => 'color',
      'title' => __('Bar Background', 'timeline-block'),
      'subtitle' => __('Set Timeline Bar Background Color', 'timeline-block'),
      'desc' => __('Choose Bar Background Color', 'timeline-block'),
      'default' => '#dddddd',
    ),
    array(
      'id' => 'bar_dot_color',
      'type' => 'color',
      'title' => __('Bar Dot Color', 'timeline-block'),
      'subtitle' => __('Set Timeline Bar Dot Color', 'timeline-block'),
      'desc' => __('Choose Dot Color', 'timeline-block'),
      'default' => '#ddd',
    ),
    array(
      'id' => 'item_bg',
      'type' => 'color',
      'title' => __('Item Background', 'timeline-block'),
      'subtitle' => __('Set Timeline Item Background Color', 'timeline-block'),
      'desc' => __('Choose Background Color', 'timeline-block'),
      'default' => '#ffffff'
    ),
    array(
      'id' => 'item_color',
      'type' => 'color',
      'title' => __('Item Color', 'timeline-block'),
      'subtitle' => __('Set Timeline Item Content / Text Color', 'timeline-block'),
      'desc' => __('Choose Font Color', 'timeline-block'),
      'default' => '#333333'
    ),
    array(
      'id' => 'item_fontWeight',
      'type' => 'button_set',
      'title' => __('Font Weight', 'timeline-block'),
      'subtitle' => __('Set Item Font Weight', 'timeline-block'),
      'desc' => __('Choose Font Weight', 'timeline-block'),
      'options' => array(
        'normal' => __('Normal', 'timeline-block'),
        'bold' => __('Bold', 'timeline-block'),
      ),
      'default' => 'normal',
    ),
    array(
      'id' => 'item_fontStyle',
      'type' => 'button_set',
      'title' => __('Font Style', 'timeline-block'),
      'subtitle' => __('Set Content Font Style', 'timeline-block'),
      'desc' => __('Choose Font Style', 'timeline-block'),
      'options' => array(
        'normal' => __('Normal', 'timeline-block'),
        'italic' => __('Italic', 'timeline-block'),
      ),
      'default' => 'normal',
    ),
    array(
      'id' => 'item_fontSize',
      'type' => 'spinner',
      'title' => __('Font-Size', 'timeline-block'),
      'subtitle' => __('Set Content Font-Size', 'timeline-block'),
      'desc' => __('Choose Font Size', 'timeline-block'),
      'unit' => 'PX',
      'default' => '14'
    ),
    array(
      'id' => 'item_border_size',
      'type' => 'spinner',
      'title' => __('Item Border', 'timeline-block'),
      'subtitle' => __('Set Timeline Item Border Size', 'timeline-block'),
      'desc' => __('Choose Border Size', 'timeline-block'),
      'unit' => 'PX',
      'default' => '1',
    ),
    array(
      'id' => 'item_border_color',
      'type' => 'color',
      'title' => __('Item Border Color', 'timeline-block'),
      'subtitle' => __('Set Timeline Item Border Color', 'timeline-block'),
      'desc' => __('Choose Border Color', 'timeline-block'),
      'default' => '#cccccc',
    ),
    array(
      'id' => 'label_fontSize',
      'type' => 'spinner',
      'title' => __('label / Title Font-Size', 'timeline-block'),
      'subtitle' => __('Set Label Font-Size', 'timeline-block'),
      'desc' => __('Choose Label Font Size', 'timeline-block'),
      'unit' => 'PX',
      'default' => '16'
    ),
    array(
      'id' => 'lebel_fontWeight',
      'type' => 'button_set',
      'title' => __('Font Weight', 'timeline-block'),
      'subtitle' => __('Set label / Title Font Weight', 'timeline-block'),
      'desc' => __('Choose Font Weight', 'timeline-block'),
      'options' => array(
        'normal' => __('Normal', 'timeline-block'),
        'bold' => __('Bold', 'timeline-block'),
      ),
      'default' => 'normal',
    ),
    array(
      'id' => 'label_fontStyle',
      'type' => 'button_set',
      'title' => __('Font Style', 'timeline-block'),
      'subtitle' => __('Set label / Title Font Style', 'timeline-block'),
      'desc' => __('Choose Font Style', 'timeline-block'),
      'options' => array(
        'normal' => __('Normal', 'timeline-block'),
        'italic' => __('Italic', 'timeline-block'),
      ),
      'default' => 'normal',
    ),
    array(
      'id' => 'label_color',
      'type' => 'color',
      'title' => __('label / Title Color', 'timeline-block'),
      'subtitle' => __('Set Label Font Color', 'timeline-block'),
      'desc' => __('Choose Label Font Color', 'timeline-block'),
      'default' => '#222222'
    ),
  )

));

