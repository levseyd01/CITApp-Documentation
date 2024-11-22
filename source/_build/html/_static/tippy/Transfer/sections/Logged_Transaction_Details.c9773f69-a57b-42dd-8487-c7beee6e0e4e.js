selector_to_html = {"a[href=\"#logged-transaction-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Logged Transaction Details<a class=\"headerlink\" href=\"#logged-transaction-details\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Logged_Transaction_Details.png\"><img alt=\"../../_images/Logged_Transaction_Details.png\" src=\"../../_images/Logged_Transaction_Details.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Logged Transaction Details</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
