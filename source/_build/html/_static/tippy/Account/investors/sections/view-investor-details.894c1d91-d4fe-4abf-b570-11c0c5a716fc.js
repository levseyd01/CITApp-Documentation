selector_to_html = {"a[href=\"#how-to-view-investor-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">How to View Investor Details<a class=\"headerlink\" href=\"#how-to-view-investor-details\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View Investor Details<a class=\"headerlink\" href=\"#view-investor-details\" title=\"Link to this heading\">#</a></h1><p>The <a class=\"reference internal\" href=\"#\"><span class=\"doc std std-doc\">View Investor Details</span></a> action allows you to access detailed information about an investor.</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../_images/investor-list-table-action-column-location.webp\" id=\"investor-view-action-location\"><img alt=\"../../../_images/investor-list-table-action-column-location.webp\" id=\"investor-view-action-location\" loading=\"lazy\" src=\"../../../_images/investor-list-table-action-column-location.webp\" style=\"width: 80%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Investors List, View Action Location</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#view-investor-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View Investor Details<a class=\"headerlink\" href=\"#view-investor-details\" title=\"Link to this heading\">#</a></h1><p>The <a class=\"reference internal\" href=\"#\"><span class=\"doc std std-doc\">View Investor Details</span></a> action allows you to access detailed information about an investor.</p>"}
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
