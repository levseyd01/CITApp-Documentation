selector_to_html = {"a[href=\"#staff\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff<a class=\"headerlink\" href=\"#staff\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Staff Page</span></span> has the following features:</p>", "a[href=\"subsections/staff-table.html#users-staff-list-table\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff List Table<a class=\"headerlink\" href=\"#staff-list-table\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Staff List Table</span></span> includes a table of accounts with the following <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Columns</span></span>:</p>", "a[href=\"../Users/subsections/remaining-user-list-sections.html#remaining-sections-users-user-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View User Details and Other Remaining Sections<a class=\"headerlink\" href=\"#view-user-details-and-other-remaining-sections\" title=\"Link to this heading\">#</a></h1><p>The remaining sections are universally shared throughout the app.</p><p><strong>These sections include:</strong></p>"}
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
