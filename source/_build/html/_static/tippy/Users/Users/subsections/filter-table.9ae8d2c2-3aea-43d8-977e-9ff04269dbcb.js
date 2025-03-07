selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../_images/user-user-status-filter.webp\" id=\"user-user-status-filter\"><img alt=\"../../../_images/user-user-status-filter.webp\" id=\"user-user-status-filter\" loading=\"lazy\" src=\"../../../_images/user-user-status-filter.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Homepage, Status Filter Dropdown</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#remaining-sections\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Remaining Sections<a class=\"headerlink\" href=\"#remaining-sections\" title=\"Link to this heading\">#</a></h1><p>The remaining sections are universally shared throughout the app.</p><p><strong>These sections include:</strong></p>", "a[href=\"#how-to-search-and-filter-by-status\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to Search and Filter by Status<a class=\"headerlink\" href=\"#how-to-search-and-filter-by-status\" title=\"Link to this heading\">#</a></h1><p>The <strong>User Table</strong> can be filtered using two methods:</p>"}
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
