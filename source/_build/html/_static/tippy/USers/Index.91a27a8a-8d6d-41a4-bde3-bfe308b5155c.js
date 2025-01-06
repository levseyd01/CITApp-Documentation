selector_to_html = {"a[href=\"#managing-staff-accounts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Managing Staff Accounts<a class=\"headerlink\" href=\"#managing-staff-accounts\" title=\"Link to this heading\">#</a></h1><p>You can find the <strong>Manage Staff</strong> section along the left-hand side of the page:</p>", "a[href=\"#user\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User<a class=\"headerlink\" href=\"#user\" title=\"Link to this heading\">#</a></h1><p>The <strong>User</strong> section allows you to <em>View</em> and <em>Manage</em> both <strong>Staff</strong> and <strong>User</strong> accounts.</p>"}
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
