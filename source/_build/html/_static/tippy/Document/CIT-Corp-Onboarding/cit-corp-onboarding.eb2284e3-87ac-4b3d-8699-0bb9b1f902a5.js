selector_to_html = {"a[href=\"#cit-corp-onboarding\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corp. Onboarding<a class=\"headerlink\" href=\"#cit-corp-onboarding\" title=\"Link to this heading\">#</a></h1><p>The <strong>CIT Corp Onboarding</strong> section allows you to to:</p>"}
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
