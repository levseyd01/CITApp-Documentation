selector_to_html = {"a[href=\"#user-details-accounts-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Details - Accounts Tab<a class=\"headerlink\" href=\"#user-details-accounts-tab\" title=\"Link to this heading\">#</a></h1><p>The <strong>User Details</strong> screen also has an <strong>Accounts</strong> tab that allows you to view the accounts associated with the user.</p>", "a[href=\"#user-user-accounts-tab-column-names\"]": "<figure class=\"align-center\" id=\"user-user-accounts-tab-column-names\">\n<a class=\"reference internal image-reference\" href=\"../../_images/accounts-tab-column-names.jpeg\"><img alt=\"../../_images/accounts-tab-column-names.jpeg\" src=\"../../_images/accounts-tab-column-names.jpeg\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Homepage, Accounts Tab, Column Names</span><a class=\"headerlink\" href=\"#user-user-accounts-tab-column-names\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#action-column-for-accounts-tab\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Action Column for Accounts Tab<a class=\"headerlink\" href=\"#action-column-for-accounts-tab\" title=\"Link to this heading\">#</a></h3><p>The <strong>Action</strong> column has three actions available:</p>", "a[href=\"../../Account/sponsorship-organization/sponsorship-organizations.html#view-sponsorship-account-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View Sponsorhip Account<a class=\"headerlink\" href=\"#view-sponsorhip-account\" title=\"Link to this heading\">#</a></h1><p>Selecting the <strong>View Account</strong> button will take you to the <strong>Sponsorship Organization Information</strong> screen.</p>", "a[href=\"#user-user-accounts-tab-action-column\"]": "<figure class=\"align-center\" id=\"user-user-accounts-tab-action-column\">\n<a class=\"reference internal image-reference\" href=\"../../_images/accounts-tab-action-section.jpg\"><img alt=\"../../_images/accounts-tab-action-section.jpg\" src=\"../../_images/accounts-tab-action-section.jpg\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Homepage, Accounts Tab, Action Column</span><a class=\"headerlink\" href=\"#user-user-accounts-tab-action-column\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#view-sponsorhip-account\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View Sponsorhip Account<a class=\"headerlink\" href=\"#view-sponsorhip-account\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#user-user-accounts-tab\"]": "<figure class=\"align-center\" id=\"user-user-accounts-tab\">\n<a class=\"reference internal image-reference\" href=\"../../_images/accounts-tab.jpeg\"><img alt=\"../../_images/accounts-tab.jpeg\" src=\"../../_images/accounts-tab.jpeg\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Homepage, Accounts Tab</span><a class=\"headerlink\" href=\"#user-user-accounts-tab\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#user-user-details-accounts-tab-view-icon\"]": "<figure class=\"align-center\" id=\"user-user-details-accounts-tab-view-icon\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-user-details-accounts-tab-view-icon.jpg\"><img alt=\"../../_images/user-user-details-accounts-tab-view-icon.jpg\" src=\"../../_images/user-user-details-accounts-tab-view-icon.jpg\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Homepage, Accounts Tab, View Account Icon</span><a class=\"headerlink\" href=\"#user-user-details-accounts-tab-view-icon\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#navigating-the-accounts-tab\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the Accounts Tab<a class=\"headerlink\" href=\"#navigating-the-accounts-tab\" title=\"Link to this heading\">#</a></h2><p>The <strong>Accounts</strong> tab displays the following columns:</p>", "a[href=\"../../Users/Users/managing-user-accounts.html#user-user-view-user-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">View User Details<a class=\"headerlink\" href=\"#view-user-details\" title=\"Link to this heading\">#</a></h2><p>To view a <strong>User\u2019s</strong> details:</p>"}
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
