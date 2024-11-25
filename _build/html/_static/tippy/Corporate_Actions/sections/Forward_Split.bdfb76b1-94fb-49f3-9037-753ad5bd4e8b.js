selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Forward_Split_Table.png\"><img alt=\"../../_images/Forward_Split_Table.png\" src=\"../../_images/Forward_Split_Table.png\" style=\"width: 100%;\"/></a>\n<figcaption>\n<p><span class=\"caption-text\">Forward Split Table</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#forward-split\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Forward Split<a class=\"headerlink\" href=\"#forward-split\" title=\"Link to this heading\">#</a></h1>"}
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
