selector_to_html = {"a[href=\"#completed-tab-available-actions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Completed Tab: Available Actions<a class=\"headerlink\" href=\"#completed-tab-available-actions\" title=\"Link to this heading\">#</a></h1><p>The  cards contain every action besides the <a class=\"reference internal\" href=\"#upload-logo-button\"><span class=\"xref myst\">Approve Uploaded Document</span></a> action:</p>", "a[href=\"#upload-logo-button\"]": "<img src='/_static/solo_app/Profile/upload-logo-section/upload-logo-button.webp' alt='Upload Logo Button' style='width:200px;'>"}
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
