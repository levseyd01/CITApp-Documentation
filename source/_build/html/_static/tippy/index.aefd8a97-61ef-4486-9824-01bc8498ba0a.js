selector_to_html = {"a[href=\"#sections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sections<a class=\"headerlink\" href=\"#sections\" title=\"Link to this heading\">#</a></h2>", "a[href=\"Users/users.html#navigating-to-each-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating to Each Section<a class=\"headerlink\" href=\"#navigating-to-each-section\" title=\"Link to this heading\">#</a></h2><p>You can find both the <strong>User</strong> and <strong>Staff</strong> section along the left-hand side of the page:</p>", "a[href=\"#getting-started\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">#</a></h2><h3>Navigating the App<a class=\"headerlink\" href=\"#navigating-the-app\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#navigating-the-app\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the App<a class=\"headerlink\" href=\"#navigating-the-app\" title=\"Link to this heading\">#</a></h3>", "a[href=\"Account/account.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Account<a class=\"headerlink\" href=\"#account\" title=\"Link to this heading\">#</a></h1><p>The <strong>Account</strong> section allows you to edit the following:</p>", "a[href=\"Users/users.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User<a class=\"headerlink\" href=\"#user\" title=\"Link to this heading\">#</a></h1><p>The <strong>User</strong> section allows you to do the following for both <strong>Staff</strong> and <strong>User</strong> accounts:</p>", "a[href=\"#cit-app-cit-services\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT App (CIT Services)<a class=\"headerlink\" href=\"#cit-app-cit-services\" title=\"Link to this heading\">#</a></h1><p>Welcome to the documentation for the <strong>CIT Services</strong> version of the CIT App. See below to get started.</p>"}
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
