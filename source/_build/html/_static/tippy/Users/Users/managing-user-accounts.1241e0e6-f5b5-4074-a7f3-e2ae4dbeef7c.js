selector_to_html = {"a[href=\"#users\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Users<a class=\"headerlink\" href=\"#users\" title=\"Link to this heading\">#</a></h1><h2>Navigating to User Accounts<a class=\"headerlink\" href=\"#navigating-to-user-accounts\" title=\"Link to this heading\">#</a></h2><p>You can find the <strong>Manage User</strong> section along the left-hand side of the page:</p>", "a[href=\"#available-information-for-user-accounts\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Available Information for User Accounts<a class=\"headerlink\" href=\"#available-information-for-user-accounts\" title=\"Link to this heading\">#</a></h3><p>The homepage for <strong>Managing User Accounts</strong> includes a table of accounts with the following columns:</p>", "a[href=\"#navigating-to-user-accounts\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating to User Accounts<a class=\"headerlink\" href=\"#navigating-to-user-accounts\" title=\"Link to this heading\">#</a></h2><p>You can find the <strong>Manage User</strong> section along the left-hand side of the page:</p>", "a[href=\"#user-management-homepage\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">User Management Homepage<a class=\"headerlink\" href=\"#user-management-homepage\" title=\"Link to this heading\">#</a></h2><p>You should see the homepage for <strong>Managing User Accounts</strong>:</p>", "a[href=\"#user-status-column\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">(User) Status Column<a class=\"headerlink\" href=\"#user-status-column\" title=\"Link to this heading\">#</a></h3><p>The <strong>Status</strong> column indicates the current status of the account. The following statuses are available:</p>"}
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
                onShow(instance) {MathJax.typesetPromise([instance.popper]).then(() => {});},
            });
        };
    };
    console.log("tippy tips loaded!");
};
