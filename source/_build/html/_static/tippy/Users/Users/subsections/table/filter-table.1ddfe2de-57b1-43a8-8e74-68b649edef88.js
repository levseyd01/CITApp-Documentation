selector_to_html = {"a[href=\"#filter-options\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Filter Options<a class=\"headerlink\" href=\"#filter-options\" title=\"Link to this heading\">#</a></h2><p>The <strong>Status</strong> dropdown includes these options:</p>", "a[href=\"#filter-table\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Filter Table<a class=\"headerlink\" href=\"#filter-table\" title=\"Link to this heading\">#</a></h1><p>The <strong>User Table</strong> can be filtered using two methods:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../../_images/user-user-status-filter.webp\" id=\"user-user-status-filter\"><img alt=\"../../../../_images/user-user-status-filter.webp\" id=\"user-user-status-filter\" loading=\"lazy\" src=\"../../../../_images/user-user-status-filter.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Homepage, Status Filter Dropdown</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
