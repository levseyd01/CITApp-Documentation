selector_to_html = {"a[href=\"#dividend\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dividend<a class=\"headerlink\" href=\"#dividend\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#corporate-actions-dividend\"]": "<figure class=\"align-default\" id=\"corporate-actions-dividend\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Dividend.png\"><img alt=\"../../_images/Dividend.png\" src=\"../../_images/Dividend.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Corporate Actions - Dividend</span><a class=\"headerlink\" href=\"#corporate-actions-dividend\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
