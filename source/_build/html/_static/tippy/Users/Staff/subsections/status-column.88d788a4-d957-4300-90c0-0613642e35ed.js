selector_to_html = {"a[href=\"#status-column-for-staff\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Status Column for Staff<a class=\"headerlink\" href=\"#status-column-for-staff\" title=\"Link to this heading\">#</a></h1><p>The <strong>Status</strong> column indicates the current status of the account. The following statuses are available:</p>"}
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
