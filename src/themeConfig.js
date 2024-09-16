export default {
    color_scheme: {
        nord_00: "#2E3440",
        nord_01: "#3B4252",
        nord_02: "#434C5E",
        nord_03: "#4C566A",
        nord_04: "#D8DEE9",
        nord_05: "#E5E9F0",
        nord_06: "#ECEFF4",
        nord_07: "#8FBCBB",
        nord_08: "#88C0D0",
        nord_09: "#81A1C1",
        nord_10: "#5E81AC",
        nord_11: "#BF616A",
        nord_12: "#D08770",
        nord_13: "#EBCB8B",
        nord_14: "#A3BE8C",
        nord_15: "#B48EAD",
        nord_between_2_n_9: "#627790",
    },

    theme_colors: {
        button_background_active: 'nord_03',     // The color of the background of the pressed toolbar buttons.
        button_background_hover: 'nord_03',      // The color of the background of the toolbar buttons on hover.
        frame: 'nord_00',                        // The background color of the header area.
        frame_inactive: 'nord_00',               // The background color of the header area when the window is inactive.
        icons: 'nord_07',                        // The color of the toolbar icons.Defaults to the color specified by toolbar_text.
        icons_attention: 'nord_08',              // The color of the toolbar icons in attention state such as the chat icon with new messages.
        popup: 'nord_00',                        // The background color of popups such as the AppMenu.
        popup_border: 'nord_01',                 // The border color of popups.
        popup_highlight: 'nord_03',              // The background color of items highlighted using the keyboard inside popups.
        popup_highlight_text: 'nord_06',         // The text color of items highlighted using the keyboard inside popups.
        popup_text: 'nord_04',                   // The text color of popups.
        sidebar: 'nord_00',                      // The background color of the trees.
        sidebar_border: 'nord_00',               // The border color of the trees.
        sidebar_highlight: 'nord_03',            // The background color of highlighted rows in trees.
        sidebar_highlight_border: 'nord_03',     // The border color of highlighted rows in trees.
        sidebar_highlight_text: 'nord_06',       // The text color of highlighted rows in trees.
        sidebar_text: 'nord_04',                 // The text color of the trees. Needed to enable the tree theming.
        tab_background_separator: 'nord_01',     // The color of the vertical separator of the background tabs.
        tab_background_text: 'nord_04',          // The text color of the unselected tabs.
        tab_line: 'nord_08',                     // The color of the selected tab line.
        tab_loading: 'nord_00',                  // The color of the tab loading indicator.
        tab_selected: 'nord_00',                 // Background color of the selected tab. Defaults to the color specified by toolbar.
        tab_text: 'nord_06',                     // The text color for the selected tab. Defaults to the color specified by toolbar_text.
        toolbar: 'nord_00',                      // The background color of the toolbars. Also used as default value for tab_selected.
        toolbar_bottom_separator: 'nord_00',     // The color of the line separating the bottom of the toolbar from the region below.
        toolbar_field: 'nord_00',                // The background color for fields in the toolbar, such as the search field.
        toolbar_field_border: 'nord_01',         // The border color for fields in the toolbar.
        toolbar_field_border_focus: 'nord_03',   // The focused border color for fields in the toolbar.
        toolbar_field_focus: 'nord_00',          // The focused background color for fields in the toolbar.
        toolbar_field_highlight: 'nord_00',      // The background color used to indicate the current selection of text in the search field.
        toolbar_field_highlight_text: 'nord_04', // The color used to draw text that’s currently selected in the search field.
        toolbar_field_text: 'nord_04',           // The text color for fields in the toolbar.
        toolbar_field_text_focus: 'nord_04',     // The text color in the focused fields in the toolbar.
        toolbar_text: 'nord_04',                 // The text color in the main Thunderbird toolbar. Also used as default value for icons and tab_text.
        toolbar_top_separator: 'nord_00',        // The color of the line separating the top of the toolbar from the region above.
        toolbar_vertical_separator: 'nord_00',   // The color of the vertical separators on the toolbars.
    },

    theme_experiment_colors: {
        ///////////////
        //  GENERAL  //
        ///////////////

        '--primary': 'nord_08', // used as progress bar color
        '--primary-color': 'nord_08',
        '--button-primary-text-color': 'nord_06',
        '--button-primary-border-color': 'nord_10',
        '--button-primary-background-color': 'nord_02',
        '--button-primary-hover-background-color': 'nord_03',

        '--button-background-color': 'nord_02',

        '--tree-view-bg': 'nord_00', // inbox list
        '--tree-view-header-hover-bg': 'nord_01',
        '--tree-view-header-hover-active-bg': 'nord_10',
        '--bg-color': 'nord_00',

        '--selected-item-color': 'nord_09',

        '--layout-background-0': 'nord_00',
        '--layout-background-1': 'nord_01',
        '--layout-background-2': 'nord_02',
        '--layout-color-1': 'nord_04',

        '--new-folder-color': 'nord_04', // used as NEW email subject color on inbox's cards-view

        // Main sidebar with main icons
        '--spaces-bg-color': 'nord_00',
        '--spaces-button-active-text-color': 'nord_01',
        '--spaces-button-active-bg-color': 'nord_08',

        ////////////////
        // EMAIL VIEW //
        ////////////////

        // Accounts list - Folder icons
        '--folder-color-inbox': 'nord_09',
        '--folder-color-draft': 'nord_15',
        '--folder-color-sent': 'nord_07',
        '--folder-color-archive': 'nord_13',
        '--folder-color-spam': 'nord_11',
        '--folder-color-trash': 'nord_03',
        // '--folder-color-template': 'nord_',
        // '--folder-color-newsletter': 'nord_',
        // '--folder-color-rss': 'nord_',
        // '--folder-color-outbox': 'nord_',
        '--folder-color-folder': 'nord_between_2_n_9',
        // '--folder-color-folder-filter': 'nord_',
        // '--folder-color-folder-rss': 'nord_',


        // Accounts list - Email count badges
        '--folderpane-unread-count-text': 'nord_08',
        '--folderpane-unread-count-background': 'nord_00',
        '--folderpane-unread-new-count-background': 'nord_08',

        // Inbox
        '--thread-pane-flag-fill': 'nord_14', // starred
        '--thread-pane-flag-stroke': 'nord_14', // starred
        '--thread-pane-spam-fill': 'nord_11', // span/junk
        '--thread-pane-spam-stroke': 'nord_11', // span/junk
        '--thread-pane-unread-fill': 'nord_08', // unread
        '--thread-pane-unread-stroke': 'nord_08', // unread

        // Account - manage
        '--accounts-bg-color': 'nord_01',
        '--button-hover-background-color': 'nord_02', // text button hover
        '--primary-color-hover': 'nord_07', // text-button hover
        '--btn-bg': 'nord_03', // normal button
        '--btn-bg-hover': 'nord_10', // normal button hover

        ////////////////////////////////////////////////////////////////////////
        // CALENDAR
        ////////////////////////////////////////////////////////////////////////

        '--calendar-view-toggle-background': 'nord_02',
        '--calendar-view-toggle-selected-background': 'nord_10',

        '--viewHighlightBorderColor': 'nord_03', // selected day
        '--viewDayBoxSelectedBackground': 'nord_03', // selected day
        '--viewTodayLabelColor': 'nord_08',
        '--viewTodayLabelBackground': 'nord_00',
    },

    images: {
        // theme_frame: 'theme_frame.svg',
    },
};
