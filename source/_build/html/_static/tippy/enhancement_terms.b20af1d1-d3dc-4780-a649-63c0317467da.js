selector_to_html = {"a[href=\"#seo-enhancement-terms\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">SEO Enhancement Terms<a class=\"headerlink\" href=\"#seo-enhancement-terms\" title=\"Link to this heading\">#</a></h1><p>For SEC.gov:</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'right', maxWidth: 500, interactive: true, delay: [200, 100], duration: [200, 100],

            });
        };
    };
    console.log("tippy tips loaded!");
};
