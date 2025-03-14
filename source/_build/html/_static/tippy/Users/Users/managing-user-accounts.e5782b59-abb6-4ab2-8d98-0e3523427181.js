selector_to_html = {"a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-user-status-filter.webp\" id=\"user-user-status-filter\"><img alt=\"../../_images/user-user-status-filter.webp\" id=\"user-user-status-filter\" loading=\"lazy\" src=\"../../_images/user-user-status-filter.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Homepage, Status Filter Dropdown</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#user-list-table\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">User List Table<a class=\"headerlink\" href=\"#user-list-table\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>User List</span></span> table summarizes key details for each <span class=\"item-reference\"><span class=\"visually-hidden\">Item: </span><span>User</span></span> that exists within the <span class=\"item-reference\"><span class=\"visually-hidden\">Item: </span><span>CIT Corporation</span></span>.</p><p><strong>It provides the User\u2019s:</strong></p>", "a[href=\"#users\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Users<a class=\"headerlink\" href=\"#users\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Users</span></span> section has the following features:</p>", "a[href=\"#remaining-sections-users-user-page\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">View User Details and Other Remaining Sections<a class=\"headerlink\" href=\"#view-user-details-and-other-remaining-sections\" title=\"Link to this heading\">#</a></h2><p>The remaining sections are universally shared throughout the app.</p><p><strong>These sections include:</strong></p>", "a[href=\"#search-and-filter-options\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Search and Filter Options<a class=\"headerlink\" href=\"#search-and-filter-options\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>User List</span></span> table can be filtered using two methods:</p>", "a[href=\"#view-user-details-and-other-remaining-sections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">View User Details and Other Remaining Sections<a class=\"headerlink\" href=\"#view-user-details-and-other-remaining-sections\" title=\"Link to this heading\">#</a></h2><p>The remaining sections are universally shared throughout the app.</p><p><strong>These sections include:</strong></p>", "a[href=\"#users-user-list-table-page\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">User List Table<a class=\"headerlink\" href=\"#user-list-table\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>User List</span></span> table summarizes key details for each <span class=\"item-reference\"><span class=\"visually-hidden\">Item: </span><span>User</span></span> that exists within the <span class=\"item-reference\"><span class=\"visually-hidden\">Item: </span><span>CIT Corporation</span></span>.</p><p><strong>It provides the User\u2019s:</strong></p>", "a[href=\"#status-options\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Status Options<a class=\"headerlink\" href=\"#status-options\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"item-reference\"><span class=\"visually-hidden\">Item: </span><span>Status</span></span> dropdown includes five different options:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-user-homepage.webp\" id=\"user-homepage\"><img alt=\"../../_images/user-user-homepage.webp\" id=\"user-homepage\" loading=\"lazy\" src=\"../../_images/user-user-homepage.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Users, User list Table</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-user-column-options.webp\" id=\"id1\"><img alt=\"../../_images/user-user-column-options.webp\" id=\"id1\" loading=\"lazy\" src=\"../../_images/user-user-column-options.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User, Column Options</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#filter-by-status-users-user-options\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Status Options<a class=\"headerlink\" href=\"#status-options\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"item-reference\"><span class=\"visually-hidden\">Item: </span><span>Status</span></span> dropdown includes five different options:</p>"}
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
