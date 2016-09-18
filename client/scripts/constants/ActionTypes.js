const ACTION_TYPES = {
  AUTH_CREATE_USER_ERROR: 'AUTH_CREATE_USER_ERROR',
  AUTH_CREATE_USER_SUCCESS: 'AUTH_CREATE_USER_SUCCESS',
  AUTH_DELETE_USER_ERROR: 'AUTH_DELETE_USER_ERROR',
  AUTH_DELETE_USER_SUCCESS: 'AUTH_DELETE_USER_SUCCESS',
  AUTH_LIST_USERS_ERROR: 'AUTH_LIST_USERS_ERROR',
  AUTH_LIST_USERS_SUCCESS: 'AUTH_LIST_USERS_SUCCESS',
  AUTH_LOGIN_ERROR: 'AUTH_LOGIN_ERROR',
  AUTH_LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
  AUTH_REGISTER_ERROR: 'AUTH_REGISTER_ERROR',
  AUTH_REGISTER_SUCCESS: 'AUTH_REGISTER_SUCCESS',
  AUTH_VERIFY_ERROR: 'AUTH_VERIFY_ERROR',
  AUTH_VERIFY_SUCCESS: 'AUTH_VERIFY_SUCCESS',
  CLIENT_ADD_TORRENT_ERROR: 'CLIENT_ADD_TORRENT_ERROR',
  CLIENT_ADD_TORRENT_SUCCESS: 'CLIENT_ADD_TORRENT_SUCCESS',
  CLIENT_CHECK_HASH_ERROR: 'CLIENT_CHECK_HASH_ERROR',
  CLIENT_CHECK_HASH_SUCCESS: 'CLIENT_CHECK_HASH_SUCCESS',
  CLIENT_FETCH_TORRENT_TAXONOMY_ERROR: 'CLIENT_FETCH_TORRENT_TAXONOMY_ERROR',
  CLIENT_FETCH_TORRENT_TAXONOMY_SUCCESS: 'CLIENT_FETCH_TORRENT_TAXONOMY_SUCCESS',
  CLIENT_FETCH_TORRENT_DETAILS_ERROR: 'CLIENT_FETCH_TORRENT_DETAILS_ERROR',
  CLIENT_FETCH_TORRENT_DETAILS_SUCCESS: 'CLIENT_FETCH_TORRENT_DETAILS_SUCCESS',
  CLIENT_FETCH_TORRENTS_ERROR: 'CLIENT_FETCH_TORRENTS_ERROR',
  CLIENT_FETCH_TORRENTS_SUCCESS: 'CLIENT_FETCH_TORRENTS_SUCCESS',
  CLIENT_FETCH_TRANSFER_DATA_ERROR: 'CLIENT_FETCH_TRANSFER_DATA_ERROR',
  CLIENT_FETCH_TRANSFER_DATA_SUCCESS: 'CLIENT_FETCH_TRANSFER_DATA_SUCCESS',
  CLIENT_FETCH_TRANSFER_HISTORY_ERROR: 'CLIENT_FETCH_TRANSFER_HISTORY_ERROR',
  CLIENT_FETCH_TRANSFER_HISTORY_SUCCESS: 'CLIENT_FETCH_TRANSFER_HISTORY_SUCCESS',
  CLIENT_MOVE_TORRENTS_SUCCESS: 'CLIENT_MOVE_TORRENTS_SUCCESS',
  CLIENT_MOVE_TORRENTS_ERROR: 'CLIENT_MOVE_TORRENTS_ERROR',
  CLIENT_REMOVE_TORRENT_ERROR: 'CLIENT_REMOVE_TORRENT_ERROR',
  CLIENT_REMOVE_TORRENT_SUCCESS: 'CLIENT_REMOVE_TORRENT_SUCCESS',
  CLIENT_SET_FILE_PRIORITY_ERROR: 'CLIENT_SET_FILE_PRIORITY_ERROR',
  CLIENT_SET_FILE_PRIORITY_SUCCESS: 'CLIENT_SET_FILE_PRIORITY_SUCCESS',
  CLIENT_SET_TAXONOMY_ERROR: 'CLIENT_SET_TAXONOMY_ERROR',
  CLIENT_SET_TAXONOMY_SUCCESS: 'CLIENT_SET_TAXONOMY_SUCCESS',
  CLIENT_SET_THROTTLE_ERROR: 'CLIENT_SET_THROTTLE_ERROR',
  CLIENT_SET_THROTTLE_SUCCESS: 'CLIENT_SET_THROTTLE_SUCCESS',
  CLIENT_SET_TORRENT_PRIORITY_ERROR: 'CLIENT_SET_TORRENT_PRIORITY_ERROR',
  CLIENT_SET_TORRENT_PRIORITY_SUCCESS: 'CLIENT_SET_TORRENT_PRIORITY_SUCCESS',
  CLIENT_SETTINGS_FETCH_REQUEST_ERROR: 'CLIENT_SETTINGS_FETCH_REQUEST_ERROR',
  CLIENT_SETTINGS_FETCH_REQUEST_SUCCESS: 'CLIENT_SETTINGS_FETCH_REQUEST_SUCCESS',
  CLIENT_SETTINGS_SAVE_ERROR: 'CLIENT_SETTINGS_SAVE_ERROR',
  CLIENT_SETTINGS_SAVE_SUCCESS: 'CLIENT_SETTINGS_SAVE_SUCCESS',
  CLIENT_START_TORRENT_ERROR: 'CLIENT_START_TORRENT_ERROR',
  CLIENT_START_TORRENT_SUCCESS: 'CLIENT_START_TORRENT_SUCCESS',
  CLIENT_STOP_TORRENT_ERROR: 'CLIENT_STOP_TORRENT_ERROR',
  CLIENT_STOP_TORRENT_SUCCESS: 'CLIENT_STOP_TORRENT_SUCCESS',
  SETTINGS_FEED_MONITOR_FEED_ADD_ERROR: 'SETTINGS_FEED_MONITOR_FEED_ADD_ERROR',
  SETTINGS_FEED_MONITOR_FEED_ADD_SUCCESS: 'SETTINGS_FEED_MONITOR_FEED_ADD_SUCCESS',
  SETTINGS_FEED_MONITOR_FEEDS_FETCH_ERROR: 'SETTINGS_FEED_MONITOR_FEEDS_FETCH_ERROR',
  SETTINGS_FEED_MONITOR_FEEDS_FETCH_SUCCESS: 'SETTINGS_FEED_MONITOR_FEEDS_FETCH_SUCCESS',
  SETTINGS_FEED_MONITORS_FETCH_ERROR: 'SETTINGS_FEED_MONITORS_FETCH_ERROR',
  SETTINGS_FEED_MONITORS_FETCH_SUCCESS: 'SETTINGS_FEED_MONITORS_FETCH_SUCCESS',
  SETTINGS_FEED_MONITOR_REMOVE_ERROR: 'SETTINGS_FEED_MONITOR_REMOVE_ERROR',
  SETTINGS_FEED_MONITOR_REMOVE_SUCCESS: 'SETTINGS_FEED_MONITOR_REMOVE_SUCCESS',
  SETTINGS_FEED_MONITOR_RULE_ADD_ERROR: 'SETTINGS_FEED_MONITOR_RULE_ADD_ERROR',
  SETTINGS_FEED_MONITOR_RULE_ADD_SUCCESS: 'SETTINGS_FEED_MONITOR_RULE_ADD_SUCCESS',
  SETTINGS_FEED_MONITOR_RULES_FETCH_ERROR: 'SETTINGS_FEED_MONITOR_RULES_FETCH_ERROR',
  SETTINGS_FEED_MONITOR_RULES_FETCH_SUCCESS: 'SETTINGS_FEED_MONITOR_RULES_FETCH_SUCCESS',
  SETTINGS_FETCH_REQUEST_SUCCESS: 'SETTINGS_FETCH_REQUEST_SUCCESS',
  SETTINGS_FETCH_REQUEST_ERROR: 'SETTINGS_FETCH_REQUEST_ERROR',
  SETTINGS_SAVE_REQUEST_SUCCESS: 'SETTINGS_SAVE_REQUEST_SUCCESS',
  SETTINGS_SAVE_REQUEST_ERROR: 'SETTINGS_SAVE_REQUEST_ERROR',
  UI_CLICK_TORRENT: 'UI_CLICK_TORRENT',
  UI_CLICK_TORRENT_DETAILS: 'UI_CLICK_TORRENT_DETAILS',
  UI_DISPLAY_MODAL: 'UI_DISPLAY_MODAL',
  UI_DISPLAY_CONTEXT_MENU: 'UI_DISPLAY_CONTEXT_MENU',
  UI_DISPLAY_DROPDOWN_MENU: 'UI_DISPLAY_DROPDOWN_MENU',
  UI_LATEST_TORRENT_LOCATION_REQUEST_ERROR: 'UI_LATEST_TORRENT_LOCATION_REQUEST_ERROR',
  UI_LATEST_TORRENT_LOCATION_REQUEST_SUCCESS: 'UI_LATEST_TORRENT_LOCATION_REQUEST_SUCCESS',
  UI_SET_TORRENT_SEARCH_FILTER: 'UI_SET_TORRENT_SEARCH_FILTER',
  UI_SET_TORRENT_SORT: 'UI_SET_TORRENT_SORT',
  UI_SET_TORRENT_STATUS_FILTER: 'UI_SET_TORRENT_STATUS_FILTER',
  UI_SET_TORRENT_TAG_FILTER: 'UI_SET_TORRENT_TAG_FILTER',
  UI_SET_TORRENT_TRACKER_FILTER: 'UI_SET_TORRENT_TRACKER_FILTER',
  UI_SORT_PROPS_REQUEST_SUCCESS: 'UI_SORT_PROPS_REQUEST_SUCCESS',
  UI_SORT_PROPS_REQUEST_ERROR: 'UI_SORT_PROPS_REQUEST_ERROR'
};

export default ACTION_TYPES;