<?php

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

function tlgb_uninstall_plugin() {
	$options = get_option( 'tlgb_options', [] );
	$is_delete_data = isset( $options['delete_data_on_uninstall'] ) ? $options['delete_data_on_uninstall'] : false;

	if ( ! $is_delete_data ) {
		return;
	}

	$post_ids = get_posts( [
		 'post_type'      => 'timeline_block',
         'post_status'    => 'any',
         'posts_per_page' => -1,
         'fields'         => 'ids',
	] );

	if ( ! empty( $post_ids ) ) {
		foreach ( $post_ids as $post_id ) {
			wp_delete_post( $post_id, true );
		}
	}
	global $wpdb;

    $auto_draft_ids = $wpdb->get_col(
        "SELECT ID FROM {$wpdb->posts}
         WHERE post_type = 'timeline_block'
         AND post_status = 'auto-draft'"
    );

    foreach ( $auto_draft_ids as $id ) {
        wp_delete_post( (int) $id, true );
    }
    $posts_with_shortcode = $wpdb->get_results(
        "SELECT ID, post_content FROM {$wpdb->posts}
         WHERE post_content LIKE '%[timeline_block%'
         AND post_status != 'trash'"
    );

    foreach ( $posts_with_shortcode as $post ) {
        // Remove the full shortcode block including newlines
        $clean_content = preg_replace(
            '/<!--\s*wp:shortcode\s*-->\s*\[timeline_block[^\]]*\]\s*<!--\s*\/wp:shortcode\s*-->/s',
            '',
            $post->post_content
        );

        if ( $clean_content !== $post->post_content ) {
            $wpdb->update(
                $wpdb->posts,
                [ 'post_content' => $clean_content ],
                [ 'ID'           => $post->ID ],
                [ '%s' ],
                [ '%d' ]
            );
        }
    }

	delete_option( 'tlgb_options' );
	flush_rewrite_rules();
} 

tlgb_uninstall_plugin();
