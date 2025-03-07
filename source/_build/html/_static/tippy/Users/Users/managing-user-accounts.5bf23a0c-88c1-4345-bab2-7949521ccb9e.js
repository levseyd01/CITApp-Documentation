selector_to_html = {"a[href=\"subsections/remaining-staff-list-sections.html#remaining-sections-users-user-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View User Details and Other Remaining Sections<a class=\"headerlink\" href=\"#view-user-details-and-other-remaining-sections\" title=\"Link to this heading\">#</a></h1><p>The remaining sections are universally shared throughout the app.</p><p><strong>These sections include:</strong></p>", "a[href=\"subsections/filter-table.html#filter-by-status-users-user-options\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Status Options<a class=\"headerlink\" href=\"#status-options\" title=\"Link to this heading\">#</a></h2><p><strong>Status</strong> dropdown includes five different options:</p>", "a[href=\"subsections/user-table.html#users-user-list-table-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User List Table<a class=\"headerlink\" href=\"#user-list-table\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>User List Table</span></span> summarizes key details for each staff member, including:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-user-homepage.webp\" id=\"user-homepage\"><img alt=\"../../_images/user-user-homepage.webp\" id=\"user-homepage\" loading=\"lazy\" src=\"../../_images/user-user-homepage.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Users, User list Table</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#users\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Users<a class=\"headerlink\" href=\"#users\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Users Page</span></span> has the following features:</p>"}
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
