<?php
/**
 * Plugin Name: Timeline Block 
 * Description: Display timeline content on your site. 
 * Version: 1.0.3
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: timeline-block
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'TLGB_PLUGIN_DIR', plugin_dir_url( __FILE__ ) );
define( 'TLGB_PLUGIN_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.3' );

// Generate Styles
class TLGBStyleGenerator {
	public static $styles = [];
	public static function addStyle( $selector, $styles ){
		if( array_key_exists( $selector, self::$styles ) ){
			self::$styles[$selector] = wp_parse_args( self::$styles[$selector], $styles );
		}else { self::$styles[$selector] = $styles; }
	}
	public static function renderStyle(){
		$output = '';
		foreach( self::$styles as $selector => $style ){
			$new = '';
			foreach( $style as $property => $value ){
				if( $value == '' ){
					$new .= $property;
				}else {
					$new .= " $property: $value;";
				}
			}
			$output .= "$selector { $new }";
		}
		return $output;
	}
}

// Timeline
class TLGBTimeline{
	function __construct(){
		add_action( 'enqueue_block_assets', [$this, 'enqueueBlockAssets'] );
		add_action( 'init', [$this, 'register'] );
	}

	function enqueueBlockAssets(){ 
		wp_enqueue_script( 'timelineJS', TLGB_PLUGIN_DIR . 'assets/js/timeline.min.js', [], TLGB_PLUGIN_VERSION, true );
	}

	function register() {
		wp_register_style( 'tlgb-b-timeline-block-editor-style', plugins_url( 'dist/editor.css', __FILE__ ), [ 'wp-edit-blocks' ], TLGB_PLUGIN_VERSION ); // Backend Style
		wp_register_style( 'tlgb-b-timeline-block-style', plugins_url( 'dist/style.css', __FILE__ ), [], TLGB_PLUGIN_VERSION ); // Style

		register_block_type( __DIR__, [
			'editor_style'  => 'tlgb-b-timeline-block-editor-style',
			'style'         => 'tlgb-b-timeline-block-style',
			'render_callback' => [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'tlgb-b-timeline-block-editor-script', 'b-timeline-block', plugin_dir_path( __FILE__ ) . 'languages' ); // Translate
	}

	function render( $attributes ){
		extract( $attributes );

		// Generate Styles
		$tlgbStyles = new TLGBStyleGenerator();
		$tlgbStyles::addStyle( "#tlgbTimeline-$cId .timeline .timeline__content", [
			'background' => $itemBg,
			'border' => $itemBorder['width'] ." solid ". $itemBorder['color']
		] );
		$tlgbStyles::addStyle( "#tlgbTimeline-$cId .timeline .timeline__content label", [
			'font-size' => $labelTypo['fontSize'],
			'font-weight' => $labelTypo['fontWeight'],
			'font-style' => $labelTypo['fontStyle'],
			'color' => $labelColor
		] );
		$tlgbStyles::addStyle( "#tlgbTimeline-$cId .timeline .timeline__content p", [
			'font-size' => $itemTypo['fontSize'] .'px',
			'font-weight' => $itemTypo['fontWeight'],
			'font-style' => $itemTypo['fontStyle'],
			'color' => $itemColor
		] );
		$tlgbStyles::addStyle( "#tlgbTimeline-$cId .timeline__item::after", [
			'background-color' => $itemBg,
			'border' => '5px solid '. $barDotColor
		] );
		$tlgbStyles::addStyle( "#tlgbTimeline-$cId .timeline--horizontal .timeline-divider, #tlgbTimeline-$cId .timeline:not(.timeline--horizontal)::before", [
			'background-color' => $barBackground
		] );
		$tlgbStyles::addStyle( "#tlgbTimeline-$cId .timeline__item.timeline__item--left .timeline__content::before", [
			'border-left' => '11px solid '. $itemBorder['color']
		] );
		$tlgbStyles::addStyle( "#tlgbTimeline-$cId .timeline__item.timeline__item--right .timeline__content::before", [
			'border-right' => '12px solid '. $itemBorder['color']
		] );
		$tlgbStyles::addStyle( "#tlgbTimeline-$cId .timeline__item.timeline__item--left .timeline__content::after", [
			'border-left' => '11px solid '. $itemBg
		] );
		$tlgbStyles::addStyle( "#tlgbTimeline-$cId .timeline__item.timeline__item--right .timeline__content::after", [
			'border-right' => '12px solid '. $itemBg
		] );
		$tlgbStyles::addStyle( "#tlgbTimeline-$cId .timeline__item.timeline__item--top .timeline__content::before", [
			'border-top' => '14px solid '. $itemBorder['color'],
			'border-bottom' => 'none'
		] );
		$tlgbStyles::addStyle( "#tlgbTimeline-$cId .timeline__item.timeline__item--bottom .timeline__content::before", [
			'border-bottom' => '14px solid '. $itemBorder['color'],
			'border-top' => 'none'
		] );
		$tlgbStyles::addStyle( "#tlgbTimeline-$cId .timeline__item--top .timeline__content::after", [
			'border-top' => '12px solid '. $itemBg,
			'border-bottom' => 'none'
		] );
		$tlgbStyles::addStyle( "#tlgbTimeline-$cId .timeline__item--bottom .timeline__content::after", [
			'border-bottom' => '12px solid '. $itemBg,
			'border-top' => 'none'
		] );
		$tlgbStyles::addStyle( "#tlgbTimeline-$cId .timeline--mobile .timeline__item .timeline__content::before", [
			'border-right' => '12px solid '. $itemBorder['color'],
			'border-left' => 'none'
		] );
		$tlgbStyles::addStyle( "#tlgbTimeline-$cId .timeline--mobile .timeline__item .timeline__content::after", [
			'border-right' => '12px solid '. $itemBg,
			'border-left' => 'none'
		] );
		$tlgbStyles::addStyle( "#tlgbTimeline-$cId .timeline-nav-button", [
			'background-color' => '#fff',
			'border' => '2px solid '. $barBackground
		] );

		ob_start(); ?>
		<div class='wp-block-tlgb-b-timeline-block <?php echo 'align' . esc_attr( $align ); ?>' id='tlgbTimeline-<?php echo esc_attr( $cId ); ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'>
			<style><?php echo wp_kses( $tlgbStyles::renderStyle(), [] ); ?></style>

			<div class='timeline tlgbTimeline'>
				<div class='timeline__wrap'>
					<div class='timeline__items'>
						<?php foreach ( $timelines as $index => $timeline ) { extract( $timeline ); ?>
							<div class='timeline__item fadeIn' id='tlgbTimelineItem-<?php echo esc_attr( $index ); ?>'>
								<div class='timeline__content'>
									<label><?php echo wp_kses_post( $label ); ?></label>

									<p><?php echo wp_kses_post( $description ); ?></p>
								</div>
							</div> <!-- Timeline Item -->
						<?php } ?>
					</div> <!-- Timeline Items -->
				</div> <!-- Timeline Wrap -->
			</div> <!-- Timeline -->
		</div> <!-- Timeline Block -->

		<?php  return ob_get_clean();
	} // Render
}
new TLGBTimeline();