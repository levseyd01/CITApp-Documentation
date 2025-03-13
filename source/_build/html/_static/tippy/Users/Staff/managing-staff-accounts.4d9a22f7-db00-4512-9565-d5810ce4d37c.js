selector_to_html = {"a[href=\"#staff\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff<a class=\"headerlink\" href=\"#staff\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Staff</span></span> page has the following features:</p>", "a[href=\"#users-staff-list-table\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff List Table<a class=\"headerlink\" href=\"#staff-list-table\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Staff List Table</span></span> includes a table of accounts with the following <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Columns</span></span>:</p>", "a[href=\"#staff-list-columns\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff List Columns<a class=\"headerlink\" href=\"#staff-list-columns\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Staff List Table</span></span> includes a table of accounts with the following <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Columns</span></span>:</p>", "a[href=\"#staff-list-table\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff List Table<a class=\"headerlink\" href=\"#staff-list-table\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Staff List Table</span></span> includes a table of accounts with the following <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Columns</span></span>:</p>", "a[href=\"#view-staff-details-and-other-remaining-sections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">View Staff Details and Other Remaining Sections<a class=\"headerlink\" href=\"#view-staff-details-and-other-remaining-sections\" title=\"Link to this heading\">#</a></h2><p>The remaining sections are universally shared throughout the app.</p><p><strong>These sections include:</strong></p>", "a[href=\"#status-column-for-staff\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Status Column for Staff<a class=\"headerlink\" href=\"#status-column-for-staff\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Status</span></span> column indicates the current status of the account.</p><p>Possible statuses include:</p>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/staff-homepage-columns.webp\" id=\"staff-homepage-columns\"><img alt=\"../../_images/staff-homepage-columns.webp\" id=\"staff-homepage-columns\" loading=\"lazy\" src=\"../../_images/staff-homepage-columns.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Users, Staff Homepage, Columns</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
