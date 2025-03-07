selector_to_html = {"a[href=\"#view-user-details-and-other-remaining-sections\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View User Details and Other Remaining Sections<a class=\"headerlink\" href=\"#view-user-details-and-other-remaining-sections\" title=\"Link to this heading\">#</a></h1><p>The remaining sections are universally shared throughout the app.</p><p><strong>These sections include:</strong></p>"}
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
