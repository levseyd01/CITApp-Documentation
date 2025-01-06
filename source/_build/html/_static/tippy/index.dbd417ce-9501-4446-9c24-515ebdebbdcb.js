selector_to_html = {"a[href=\"#sections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sections<a class=\"headerlink\" href=\"#sections\" title=\"Link to this heading\">#</a></h2>", "a[href=\"Users/users.html#homepage-for-user-and-staff-accounts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Homepage for User and Staff Accounts<a class=\"headerlink\" href=\"#homepage-for-user-and-staff-accounts\" title=\"Link to this heading\">#</a></h1><p>Below is the homepage for <strong>Managing User</strong> accounts:</p>", "a[href=\"Users/users.html#view-user-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View User Details<a class=\"headerlink\" href=\"#view-user-details\" title=\"Link to this heading\">#</a></h1><p>The View User Details section allows you to both edit and view details of a specific user.</p>", "a[href=\"Settings/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Settings<a class=\"headerlink\" href=\"#settings\" title=\"Link to this heading\">#</a></h1><p>This section includes all the tabs located on the <strong>Settings</strong> section of SOLO 2.0.</p>", "a[href=\"#getting-started\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">#</a></h2><h3>Navigating the App<a class=\"headerlink\" href=\"#navigating-the-app\" title=\"Link to this heading\">#</a></h3>", "a[href=\"Users/users.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User<a class=\"headerlink\" href=\"#user\" title=\"Link to this heading\">#</a></h1><p>The <strong>User</strong> section allows you to <em>View</em> and <em>Manage</em> both <strong>Staff</strong> and <strong>User</strong> accounts.</p>", "a[href=\"Users/users.html#edited-user-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Edited User Details<a class=\"headerlink\" href=\"#edited-user-details\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#cit-app-cit-services\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT App (CIT Services)<a class=\"headerlink\" href=\"#cit-app-cit-services\" title=\"Link to this heading\">#</a></h1><p>Welcome to the documentation for the <strong>CIT Services</strong> version of the CIT App. See below to get started.</p>", "a[href=\"Account/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Communication<a class=\"headerlink\" href=\"#communication\" title=\"Link to this heading\">#</a></h1><p>This section includes all the tabs located on the <strong>Communication</strong> section of SOLO 2.0.</p>", "a[href=\"#navigating-the-app\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the App<a class=\"headerlink\" href=\"#navigating-the-app\" title=\"Link to this heading\">#</a></h3>", "a[href=\"Users/users.html#common-information\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Common Information<a class=\"headerlink\" href=\"#common-information\" title=\"Link to this heading\">#</a></h1><p>You can find both the <strong>User</strong> and <strong>Staff</strong> section along the left-hand side of the page:</p>", "a[href=\"Document/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">About Us<a class=\"headerlink\" href=\"#about-us\" title=\"Link to this heading\">#</a></h1><p>This section has all proofread content related to the <strong>About Us</strong> section of SOLO 2.0.</p>"}
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
