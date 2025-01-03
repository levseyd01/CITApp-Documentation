selector_to_html = {"a[href=\"#upload-button\"]": "<figure class=\"align-default\" id=\"upload-button\">\n<span id=\"upload-button-ref\"></span><img alt=\"_images/upload-button.png\" src=\"_images/upload-button.png\"/>\n<figcaption>\n<p><span class=\"caption-text\">Upload Button</span><a class=\"headerlink\" href=\"#upload-button\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
