selector_to_html = {"a[href=\"#homepage-for-user-and-staff-accounts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Homepage for User and Staff Accounts<a class=\"headerlink\" href=\"#homepage-for-user-and-staff-accounts\" title=\"Link to this heading\">#</a></h1><p>Below is the homepage for <strong>Managing User</strong> accounts:</p>", "a[href=\"#action-column\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Action Column<a class=\"headerlink\" href=\"#action-column\" title=\"Link to this heading\">#</a></h2><p>Both <strong>User</strong> and <strong>Staff</strong> sections have the <a class=\"reference internal\" href=\"../../Universal/logos.html#view-more-icon\"><span class=\"std std-ref\">View User Details</span></a> option in the <strong>Action</strong> column.</p>", "a[href=\"#status-column\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Status Column<a class=\"headerlink\" href=\"#status-column\" title=\"Link to this heading\">#</a></h2><p>The <strong>Status</strong> column indicates the current status of the account. The following statuses are available:</p>", "a[href=\"#available-information\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Available Information<a class=\"headerlink\" href=\"#available-information\" title=\"Link to this heading\">#</a></h2><p>Each of the <strong>Managing Users</strong> and <strong>Staff</strong> sections opens with a homepage that presents a table including the following columns:</p>", "a[href=\"../../Universal/logos.html#delete-icon\"]": "<img alt=\"../_static/solo_app/Universal/icons/delete-icon.png\" class=\"align-center\" id=\"delete-icon\" src=\"../../_static/solo_app/Universal/icons/delete-icon.png\" style=\"width: 200px;\"/>", "a[href=\"../../Universal/logos.html#view-more-icon\"]": "<img alt=\"../_static/solo_app/Universal/icons/view-more-icon.png\" class=\"align-center\" id=\"view-more-icon\" src=\"../../_static/solo_app/Universal/icons/view-more-icon.png\" style=\"width: 200px;\"/>"}
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
