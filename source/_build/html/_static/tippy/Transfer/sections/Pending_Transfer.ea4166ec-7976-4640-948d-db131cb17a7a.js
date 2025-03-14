selector_to_html = {"a[href=\"#pending-transfer\"]": "<figure class=\"align-default\" id=\"pending-transfer\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Pending_Transfer.png\"><img alt=\"../../_images/Pending_Transfer.png\" src=\"../../_images/Pending_Transfer.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Pending Transfer</span><a class=\"headerlink\" href=\"#pending-transfer\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#pending-transfers\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Pending Transfers<a class=\"headerlink\" href=\"#pending-transfers\" title=\"Link to this heading\">#</a></h1><p>This covers the \u201cPending Transfers\u201d section of SOLO 2.0.</p>"}
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
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
