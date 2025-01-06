selector_to_html = {"a[href=\"Users/users.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User<a class=\"headerlink\" href=\"#user\" title=\"Link to this heading\">#</a></h1><p>The <strong>User</strong> section allows you to <em>View</em> and <em>Manage</em> both <strong>Staff</strong> and <strong>User</strong> accounts.</p>", "a[href=\"#navigating-the-app\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the App<a class=\"headerlink\" href=\"#navigating-the-app\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#sections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sections<a class=\"headerlink\" href=\"#sections\" title=\"Link to this heading\">#</a></h2>", "a[href=\"Beneficiaries/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Beneficiaries List<a class=\"headerlink\" href=\"#beneficiaries-list\" title=\"Link to this heading\">#</a></h1><p>The <strong>Beneficiaries List</strong> section displays an overview of the company\u2019s beneficiaries.</p><p>The list contains each beneficiary\u2019s:</p>", "a[href=\"Account/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Communication<a class=\"headerlink\" href=\"#communication\" title=\"Link to this heading\">#</a></h1><p>This section includes all the tabs located on the <strong>Communication</strong> section of SOLO 2.0.</p>", "a[href=\"Document/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">About Us<a class=\"headerlink\" href=\"#about-us\" title=\"Link to this heading\">#</a></h1><p>This section has all proofread content related to the <strong>About Us</strong> section of SOLO 2.0.</p>", "a[href=\"Beneficiaries/Index.html#adding-a-beneficiary\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Adding a Beneficiary<a class=\"headerlink\" href=\"#adding-a-beneficiary\" title=\"Link to this heading\">#</a></h1><p>To <strong>Add a Beneficiary:</strong></p>", "a[href=\"#getting-started\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">#</a></h2><h3>Navigating the App<a class=\"headerlink\" href=\"#navigating-the-app\" title=\"Link to this heading\">#</a></h3>", "a[href=\"Beneficiaries/Index.html#other-actions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Other Actions<a class=\"headerlink\" href=\"#other-actions\" title=\"Link to this heading\">#</a></h1><p>You can find the <strong>Actions</strong> section just below the <a class=\"reference internal\" href=\"Universal/logos.html#new-beneficiary-button\"><span class=\"std std-ref\">New Beneficiary</span></a> button:</p>", "a[href=\"#cit-app-cit-services\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT App (CIT Services)<a class=\"headerlink\" href=\"#cit-app-cit-services\" title=\"Link to this heading\">#</a></h1><p>Welcome to the documentation for the <strong>CIT Services</strong> version of the CIT App. See below to get started.</p>", "a[href=\"Users/users.html#managing-staff-accounts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Managing Staff Accounts<a class=\"headerlink\" href=\"#managing-staff-accounts\" title=\"Link to this heading\">#</a></h1><p>You can find the <strong>Manage Staff</strong> section along the left-hand side of the page:</p>", "a[href=\"Settings/Index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Settings<a class=\"headerlink\" href=\"#settings\" title=\"Link to this heading\">#</a></h1><p>This section includes all the tabs located on the <strong>Settings</strong> section of SOLO 2.0.</p>"}
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
