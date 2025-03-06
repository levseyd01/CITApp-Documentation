selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"path/to/overall-status-screenshot.webp\"><img alt=\"CIT Overall Status screenshot\" loading=\"lazy\" src=\"path/to/overall-status-screenshot.webp\" style=\"width: 80%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">A high-level overview of all documents and their statuses.</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#navigating-the-cit-corporation-offering-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the CIT Corporation Offering Section<a class=\"headerlink\" href=\"#navigating-the-cit-corporation-offering-section\" title=\"Link to this heading\">#</a></h2><p>The Offering section opens up to the CIT Corporation Offering Documents Table on the Homepage:</p>", "a[href=\"#cit-corporation-offering-documents\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporation Offering Documents<a class=\"headerlink\" href=\"#cit-corporation-offering-documents\" title=\"Link to this heading\">#</a></h1><p>The <strong>CIT Corporation Offering</strong> section helps users manage and track all documents related to any Offering.</p>"}
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
