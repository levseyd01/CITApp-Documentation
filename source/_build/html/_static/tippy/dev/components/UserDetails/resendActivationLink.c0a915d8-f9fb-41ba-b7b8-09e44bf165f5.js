selector_to_html = {"a[href=\"#resendactivationlink\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">resendActivationLink()<a class=\"headerlink\" href=\"#resendactivationlink\" title=\"Link to this heading\">#</a></h1><p>This function can be used whenever a <code class=\"docutils literal notranslate\"><span class=\"pre\">Resend</span> <span class=\"pre\">Acitvation</span> <span class=\"pre\">Link</span></code> button is needed.</p><p><img alt=\"alt text\" loading=\"lazy\" src=\"../../../_images/resendActivationLink.png\"/></p>"}
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
