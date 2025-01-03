selector_to_html = {"a[href=\"#otc-markets\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">OTC Markets<a class=\"headerlink\" href=\"#otc-markets\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#logo\"]": "<figure class=\"align-default\" id=\"logo\">\n<a class=\"reference internal image-reference\" href=\"../../_images/OTC_Markets.png\"><img alt=\"../../_images/OTC_Markets.png\" src=\"../../_images/OTC_Markets.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Transfer Agent - OTC Markets</span><a class=\"headerlink\" href=\"#logo\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
                placement: 'auto-start', maxWidth: 500, interactive: false, theme: 'material', duration: [200, 100], delay: [200, 500],

            });
        };
    };
    console.log("tippy tips loaded!");
};
