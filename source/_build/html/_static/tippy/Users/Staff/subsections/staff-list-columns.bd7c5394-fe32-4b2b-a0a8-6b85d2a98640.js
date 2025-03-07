selector_to_html = {"a[href=\"#staff-list-columns\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff List Columns<a class=\"headerlink\" href=\"#staff-list-columns\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Staff List Table</span></span> includes a table of accounts with the following columns:</p>", "a[href=\"#status-column\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Status Column<a class=\"headerlink\" href=\"#status-column\" title=\"Link to this heading\">#</a></h1><p>The <strong>Status</strong> column indicates the current status of the account. The following statuses are available:</p>"}
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
