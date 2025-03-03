selector_to_html = {"a[href=\"#name-and-information-form\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Name and Information Form<a class=\"headerlink\" href=\"#name-and-information-form\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/PrimarySidebar-toggle.webp\"><img alt=\"../../_images/PrimarySidebar-toggle.webp\" loading=\"lazy\" src=\"../../_images/PrimarySidebar-toggle.webp\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Toggle Primary Sidebar button.</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#forms\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Forms<a class=\"headerlink\" href=\"#forms\" title=\"Link to this heading\">#</a></h1><p>This section information about the various ways you can access the forms with the Playwright Automation Test Suite.</p>"}
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
