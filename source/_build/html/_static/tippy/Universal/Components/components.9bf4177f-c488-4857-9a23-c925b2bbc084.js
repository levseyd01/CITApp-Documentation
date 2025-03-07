selector_to_html = {"a[href=\"#components\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Components<a class=\"headerlink\" href=\"#components\" title=\"Link to this heading\">#</a></h1><p>This page was created to help maintain all of the reusable portions of the app. Specifically w/respect to the components.</p>"}
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
