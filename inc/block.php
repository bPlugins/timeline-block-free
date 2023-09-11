<?php
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

class TLGBBlock{
	function __construct(){
		add_action( 'enqueue_block_assets', [$this, 'enqueueBlockAssets'] );
		add_action( 'init', [$this, 'register'] );
	}

	function enqueueBlockAssets(){ 
		wp_enqueue_script( 'timelineJS', TLGB_DIR_URL . 'assets/js/timeline.min.js', [], TLGB_VERSION, true );
	}

	function register() {
		wp_register_style( 'tlgb-b-timeline-block-style', TLGB_DIR_URL . 'dist/style.css', [], TLGB_VERSION ); // Style
		wp_register_style( 'tlgb-b-timeline-block-editor-style', TLGB_DIR_URL . 'dist/editor.css', [ 'tlgb-b-timeline-block-style' ], TLGB_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'tlgb-b-timeline-block-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'tlgb-b-timeline-block-editor-script', 'timeline-block', TLGB_DIR_PATH . 'languages' ); // Translate
	}

	function render( $attributes ){
		extract( $attributes );

		wp_enqueue_style( 'tlgb-b-timeline-block-style' );
		wp_enqueue_script( 'tlgb-b-timeline-block-script', TLGB_DIR_URL . 'dist/script.js', [ 'timelineJS' ], TLGB_VERSION, true );
		wp_set_script_translations( 'tlgb-b-timeline-block-script', 'timeline-block', TLGB_DIR_PATH . 'languages' ); // Translate

		// Generate Styles
        $contentCl = '.timeline__content';
        $mainSl = "#tlgbTimeline-$cId";
        $timelineSl = "$mainSl .timeline";
        $contentSl = "$timelineSl $contentCl";
        $itemSl = "$mainSl .timeline__item";
		$tlgbStyles = new TLGBStyleGenerator();
		$tlgbStyles::addStyle( "$contentSl", [
			'background' => $itemBg,
			'border' => $itemBorder['width'] ." solid ". $itemBorder['color']
		] );
		$tlgbStyles::addStyle( "$contentSl label", [
			'font-size' => $labelTypo['fontSize']['desktop'] .'px',
			'font-weight' => $labelTypo['fontWeight'],
			'font-style' => $labelTypo['fontStyle'],
			'color' => $labelColor
		] );
		$tlgbStyles::addStyle( "$contentSl p", [
			'font-size' => $itemTypo['fontSize']['desktop'] .'px',
			'font-weight' => $itemTypo['fontWeight'],
			'font-style' => $itemTypo['fontStyle'],
			'color' => $itemColor
		] );
		$tlgbStyles::addStyle( "$itemSl::after", [
			'background-color' => $itemBg,
			'border' => '5px solid '. $barDotColor
		] );
		$tlgbStyles::addStyle( "$mainSl .timeline--horizontal .timeline-divider, $timelineSl:not(.timeline--horizontal)::before", [
			'background-color' => $barBackground
		] );
		$tlgbStyles::addStyle( "$itemSl.timeline__item--left $contentCl::before", [
			'border-left' => '11px solid '. $itemBorder['color']
		] );
		$tlgbStyles::addStyle( "$itemSl.timeline__item--right $contentCl::before", [
			'border-right' => '12px solid '. $itemBorder['color']
		] );
		$tlgbStyles::addStyle( "$itemSl.timeline__item--left $contentCl::after", [
			'border-left' => '11px solid '. $itemBg
		] );
		$tlgbStyles::addStyle( "$itemSl.timeline__item--right $contentCl::after", [
			'border-right' => '12px solid '. $itemBg
		] );
		$tlgbStyles::addStyle( "$itemSl.timeline__item--top $contentCl::before", [
			'border-top' => '14px solid '. $itemBorder['color'],
			'border-bottom' => 'none'
		] );
		$tlgbStyles::addStyle( "$itemSl.timeline__item--bottom $contentCl::before", [
			'border-bottom' => '14px solid '. $itemBorder['color'],
			'border-top' => 'none'
		] );
		$tlgbStyles::addStyle( "$itemSl--top $contentCl::after", [
			'border-top' => '12px solid '. $itemBg,
			'border-bottom' => 'none'
		] );
		$tlgbStyles::addStyle( "$itemSl--bottom $contentCl::after", [
			'border-bottom' => '12px solid '. $itemBg,
			'border-top' => 'none'
		] );
		$tlgbStyles::addStyle( "$mainSl .timeline--mobile .timeline__item $contentCl::before", [
			'border-right' => '12px solid '. $itemBorder['color'],
			'border-left' => 'none'
		] );
		$tlgbStyles::addStyle( "$mainSl .timeline--mobile .timeline__item $contentCl::after", [
			'border-right' => '12px solid '. $itemBg,
			'border-left' => 'none'
		] );
		$tlgbStyles::addStyle( "$mainSl .timeline-nav-button", [
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

		<?php return ob_get_clean();
	} // Render
}
new TLGBBlock();