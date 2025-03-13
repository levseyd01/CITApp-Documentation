selector_to_html = {"a[href=\"#search-and-filter-options\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Search and Filter Options<a class=\"headerlink\" href=\"#search-and-filter-options\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>User Table</span></span> can be filtered using two methods:</p>", "a[href=\"#status-options\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Status Options<a class=\"headerlink\" href=\"#status-options\" title=\"Link to this heading\">#</a></h2><p><strong>Status</strong> dropdown includes five different options:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"Users/_static/solo_app/User/Users/user-user-status-filter.webp\" id=\"user-user-status-filter\"><img alt=\"Users/_static/solo_app/User/Users/user-user-status-filter.webp\" id=\"user-user-status-filter\" loading=\"lazy\" src=\"Users/_static/solo_app/User/Users/user-user-status-filter.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Homepage, Status Filter Dropdown</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
