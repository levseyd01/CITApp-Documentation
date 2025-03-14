selector_to_html = {"a[href=\"#staff\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff<a class=\"headerlink\" href=\"#staff\" title=\"Link to this heading\">#</a></h1><p>The section <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Staff</span></span> section has the following features:</p>", "a[href=\"#remaining-sections-users-staff-page\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">View Staff Details and Other Remaining Sections<a class=\"headerlink\" href=\"#view-staff-details-and-other-remaining-sections\" title=\"Link to this heading\">#</a></h2><p>The remaining sections are universally shared throughout the app.</p><p><strong>These sections include:</strong></p>", "a[href=\"#view-staff-details-and-other-remaining-sections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">View Staff Details and Other Remaining Sections<a class=\"headerlink\" href=\"#view-staff-details-and-other-remaining-sections\" title=\"Link to this heading\">#</a></h2><p>The remaining sections are universally shared throughout the app.</p><p><strong>These sections include:</strong></p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/staff-homepage-columns.webp\" id=\"staff-homepage-columns\"><img alt=\"../../_images/staff-homepage-columns.webp\" id=\"staff-homepage-columns\" loading=\"lazy\" src=\"../../_images/staff-homepage-columns.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Users, Staff Homepage, Columns</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#staff-list-columns\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff List Columns<a class=\"headerlink\" href=\"#staff-list-columns\" title=\"Link to this heading\">#</a></h1><p>The table <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Staff List</span></span> table includes a table of accounts with the following columns <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Columns</span></span>:</p>", "a[href=\"#filter-by-status\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Filter by Status<a class=\"headerlink\" href=\"#filter-by-status\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Status</span></span> columnindicates the current status of the account.</p><p>Possible <span class=\"item-blue-reference\"><span class=\"visually-hidden\">Option: </span><span>Status</span></span> options include:</p>", "a[href=\"#users-staff-list-table\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff List Columns<a class=\"headerlink\" href=\"#staff-list-columns\" title=\"Link to this heading\">#</a></h1><p>The table <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Staff List</span></span> table includes a table of accounts with the following columns <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Columns</span></span>:</p>"}
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
