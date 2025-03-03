selector_to_html = {"a[href=\"#checkuserfields-ts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">checkUserFields.ts<a class=\"headerlink\" href=\"#checkuserfields-ts\" title=\"Link to this heading\">#</a></h1><p>This function can be used anytime there is a <code class=\"docutils literal notranslate\"><span class=\"pre\">User</span> <span class=\"pre\">Detail</span></code> type of page, like the following:</p><p><img alt=\"alt text\" loading=\"lazy\" src=\"../../../_images/userDetails.png\"/></p>"}
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
