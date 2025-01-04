selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<span id=\"upload-logo-tip\"></span><a class=\"reference internal image-reference\" href=\"_images/upload-button.png\"><img alt=\"_images/upload-button.png\" src=\"_images/upload-button.png\" style=\"width: 400px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Upload Logo Button</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
