selector_to_html = {"a[href=\"#rejected-transfer-table\"]": "<figure class=\"align-default\" id=\"rejected-transfer-table\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Rejected_Transfer_Table.png\"><img alt=\"../../_images/Rejected_Transfer_Table.png\" src=\"../../_images/Rejected_Transfer_Table.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Rejected Transfer Table</span><a class=\"headerlink\" href=\"#rejected-transfer-table\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#rejected-transfers\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Rejected Transfers<a class=\"headerlink\" href=\"#rejected-transfers\" title=\"Link to this heading\">#</a></h1><p>This covers the \u201cRejected Transfers\u201d of SOLO 2.0.</p>"}
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
