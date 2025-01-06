selector_to_html = {"a[href=\"#information-input\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Information Input<a class=\"headerlink\" href=\"#information-input\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#is-fast-transfer\"]": "<figure class=\"align-default\" id=\"is-fast-transfer\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Is_Fast_Transfer.png\"><img alt=\"../../_images/Is_Fast_Transfer.png\" src=\"../../_images/Is_Fast_Transfer.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Is Fast Transfer?</span><a class=\"headerlink\" href=\"#is-fast-transfer\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#add-reserved-shares-issuance\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add Reserved Shares Issuance<a class=\"headerlink\" href=\"#add-reserved-shares-issuance\" title=\"Link to this heading\">#</a></h1><h2>Information Input<a class=\"headerlink\" href=\"#information-input\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Information_Input.png\"><img alt=\"../../_images/Information_Input.png\" src=\"../../_images/Information_Input.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Information Input</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
