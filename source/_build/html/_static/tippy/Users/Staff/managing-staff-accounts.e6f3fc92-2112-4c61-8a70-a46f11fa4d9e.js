selector_to_html = {"a[href=\"#staff-list-columns\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff List Columns<a class=\"headerlink\" href=\"#staff-list-columns\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Staff List Table</span></span> includes a table of accounts with the following columns:</p>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/staff-homepage-columns.webp\" id=\"staff-homepage-columns\"><img alt=\"../../_images/staff-homepage-columns.webp\" id=\"staff-homepage-columns\" loading=\"lazy\" src=\"../../_images/staff-homepage-columns.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Users, Staff Homepage, Columns</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#staff-list-table\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff List Table<a class=\"headerlink\" href=\"#staff-list-table\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Staff List Table</span></span> includes a table of accounts with the following <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Columns</span></span>:</p>", "a[href=\"#status-column-for-staff\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Status Column for Staff<a class=\"headerlink\" href=\"#status-column-for-staff\" title=\"Link to this heading\">#</a></h2><p>The <strong>Status</strong> column indicates the current status of the account. The following statuses are available:</p>", "a[href=\"../../Universal/UserDetails/Tabs/view-user-details-accounts-tab.html#view-user-details-universal-accounts-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Details: Accounts Tab<a class=\"headerlink\" href=\"#user-details-accounts-tab\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>User Details</span></span> page also has an <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Accounts</span></span> tab that allows you to view the accounts associated with the user.</p>", "a[href=\"../Users/subsections/remaining-user-list-sections.html#remaining-sections-users-user-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View User Details and Other Remaining Sections<a class=\"headerlink\" href=\"#view-user-details-and-other-remaining-sections\" title=\"Link to this heading\">#</a></h1><p>The remaining sections are universally shared throughout the app.</p><p><strong>These sections include:</strong></p>", "a[href=\"#staff\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff<a class=\"headerlink\" href=\"#staff\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Staff</span></span> page has the following features:</p>", "a[href=\"#view-staff-details-and-other-remaining-sections\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View Staff Details and Other Remaining Sections<a class=\"headerlink\" href=\"#view-staff-details-and-other-remaining-sections\" title=\"Link to this heading\">#</a></h1><p>The remaining sections are universally shared throughout the app.</p><p><strong>These sections include:</strong></p>", "a[href=\"../../Universal/InformationPane/information-pane.html#information-pane-main-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Information Pane<a class=\"headerlink\" href=\"#information-pane\" title=\"Link to this heading\">#</a></h1><p>The <strong>Information Pane</strong> (Right Column) provides both an <strong>Activity Log</strong> and a <strong>Created &amp; Modified</strong> Section.</p>", "a[href=\"#users-staff-list-table\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff List Table<a class=\"headerlink\" href=\"#staff-list-table\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Staff List Table</span></span> includes a table of accounts with the following <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Columns</span></span>:</p>", "a[href=\"../../Universal/UserDetails/user-details-page.html#user-details-universal-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Details Page<a class=\"headerlink\" href=\"#user-details-page\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>User Details Page</span></span> opens up to the <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>User Information Tab</span></span></p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
