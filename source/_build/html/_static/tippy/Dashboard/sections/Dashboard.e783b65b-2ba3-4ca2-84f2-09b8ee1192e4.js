selector_to_html = {"a[href=\"#manage-issuers-button\"]": "<figure class=\"align-default\" id=\"manage-issuers-button\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Manage_Issuers_Button.png\"><img alt=\"../../_images/Manage_Issuers_Button.png\" src=\"../../_images/Manage_Issuers_Button.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Manage Issuers Button</span><a class=\"headerlink\" href=\"#manage-issuers-button\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#dashboard\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dashboard<a class=\"headerlink\" href=\"#dashboard\" title=\"Link to this heading\">#</a></h1><h2>Manage Issuers<a class=\"headerlink\" href=\"#manage-issuers\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#manage-issuers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Manage Issuers<a class=\"headerlink\" href=\"#manage-issuers\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#fig-example\"]": "<figure class=\"align-default\" id=\"fig-example\">\n<a class=\"reference internal image-reference\" href=\"../../_images/Dashboard.png\"><img alt=\"../../_images/Dashboard.png\" src=\"../../_images/Dashboard.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Main page of the Transfer Agent Dashboard.</span><a class=\"headerlink\" href=\"#fig-example\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
