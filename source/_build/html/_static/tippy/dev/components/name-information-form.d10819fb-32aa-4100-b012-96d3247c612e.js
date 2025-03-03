selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/PrimarySidebar-toggle.webp\"><img alt=\"../../_images/PrimarySidebar-toggle.webp\" loading=\"lazy\" src=\"../../_images/PrimarySidebar-toggle.webp\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Toggle Primary Sidebar button.</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#name-and-information-forms\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Name and Information Forms<a class=\"headerlink\" href=\"#name-and-information-forms\" title=\"Link to this heading\">#</a></h1><p>This section contains information about how to access the various parts of the <code class=\"docutils literal notranslate\"><span class=\"pre\">Name</span> <span class=\"pre\">and</span> <span class=\"pre\">Information</span></code> form that can be found throughout the app.</p>"}
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
