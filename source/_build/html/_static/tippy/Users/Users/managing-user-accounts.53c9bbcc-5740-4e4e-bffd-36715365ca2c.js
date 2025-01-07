selector_to_html = {"a[href=\"#managing-user-accounts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Managing User Accounts<a class=\"headerlink\" href=\"#managing-user-accounts\" title=\"Link to this heading\">#</a></h1><p>You can find the <strong>Manage User</strong> section along the left-hand side of the page:</p>", "a[href=\"#available-information\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Available Information<a class=\"headerlink\" href=\"#available-information\" title=\"Link to this heading\">#</a></h2><p>The homepage for <strong>Managing Staff</strong> accounts includes a table of accounts with the following columns:</p>", "a[href=\"#status-column\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Status Column<a class=\"headerlink\" href=\"#status-column\" title=\"Link to this heading\">#</a></h2><p>The <strong>Status</strong> column indicates the current status of the account. The following statuses are available:</p>"}
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
