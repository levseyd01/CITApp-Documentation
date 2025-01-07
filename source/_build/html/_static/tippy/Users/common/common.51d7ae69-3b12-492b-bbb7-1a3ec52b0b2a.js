selector_to_html = {"a[href=\"#available-information\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Available Information<a class=\"headerlink\" href=\"#available-information\" title=\"Link to this heading\">#</a></h3><p>Each of the <strong>Managing Users</strong> and <strong>Staff</strong> sections opens with a homepage that presents a table including the following columns:</p>", "a[href=\"#common-information\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Common Information<a class=\"headerlink\" href=\"#common-information\" title=\"Link to this heading\">#</a></h1><h2>Homepage for User and Staff Accounts<a class=\"headerlink\" href=\"#homepage-for-user-and-staff-accounts\" title=\"Link to this heading\">#</a></h2><p>Below is the homepage for <strong>Managing User</strong> accounts:</p>", "a[href=\"#action-column\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Action Column<a class=\"headerlink\" href=\"#action-column\" title=\"Link to this heading\">#</a></h3><p>Both <strong>User</strong> and <strong>Staff</strong> sections have the <a class=\"reference internal\" href=\"#view-more-icon\"><span class=\"xref myst\">View User Details</span></a> option in the <strong>Action</strong> column.</p>", "a[href=\"#homepage-for-user-and-staff-accounts\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Homepage for User and Staff Accounts<a class=\"headerlink\" href=\"#homepage-for-user-and-staff-accounts\" title=\"Link to this heading\">#</a></h2><p>Below is the homepage for <strong>Managing User</strong> accounts:</p>", "a[href=\"#general-status-column\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">(General) Status Column<a class=\"headerlink\" href=\"#general-status-column\" title=\"Link to this heading\">#</a></h3><p>The <strong>Status</strong> column indicates the current status of the account. The following statuses are available:</p>", "a[href=\"#edit-permissions-icon\"]": "<img src='/_static/solo_app/Universal/actions/edit-permissions.png' alt='Edit Permissions Icon' style='width:200px;'>", "a[href=\"#delete-icon\"]": "<img src='/_static/solo_app/Universal/icons/delete-icon.png' alt='Delete Icon' style='width:200px;'>", "a[href=\"#view-more-icon\"]": "<img src='/_static/solo_app/Universal/icons/view-more-icon.png' alt='View More Icon' style='width:200px;'>"}
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
