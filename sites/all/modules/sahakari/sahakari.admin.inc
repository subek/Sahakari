<?php
/**
 * @file
 * Provides infrequently used functions and hooks for menu_block.
 */

/**
 * Implements hook_menu().
 */
function clear_cache($cid = NULL, $table = NULL, $wildcard = FALSE) {
    cache_clear_all($cid, $table, $wildcard);
}

