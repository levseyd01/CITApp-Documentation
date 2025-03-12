selector_to_html = {"a[href=\"#action-column-for-accounts-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Action Column for Accounts Tab<a class=\"headerlink\" href=\"#action-column-for-accounts-tab\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Action</span></span> has three <span class=\"action-reference\"><span class=\"visually-hidden\">Action: </span><span>Actions</span></span> available:</p>", "a[href=\"#view-sponsorhip-account\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View Sponsorhip Account<a class=\"headerlink\" href=\"#view-sponsorhip-account\" title=\"Link to this heading\">#</a></h1>", "a[href=\"../../user-details-page.html#user-details-universal-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Details Page<a class=\"headerlink\" href=\"#user-details-page\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>User Details Page</span></span> opens up to the <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>User Information Tab</span></span></p>", "a[href=\"../../../DeleteUser/delete-user-universal.html#delete-user-universal\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to Delete User, Staff, Company, etc.<a class=\"headerlink\" href=\"#how-to-delete-user-staff-company-etc\" title=\"Link to this heading\">#</a></h1><p>To delete a user, staff, company, or anything else throughout the app, follow these steps:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../../_images/accounts-tab-action-section.webp\" id=\"user-user-accounts-tab-action-column\"><img alt=\"../../../../_images/accounts-tab-action-section.webp\" id=\"user-user-accounts-tab-action-column\" loading=\"lazy\" src=\"../../../../_images/accounts-tab-action-section.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Details Homepage, <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Accounts</span></span> Tab, <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Action</span></span> Column</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"../../../InformationPane/information-pane.html#information-pane-main-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Information Pane<a class=\"headerlink\" href=\"#information-pane\" title=\"Link to this heading\">#</a></h1><p>The <strong>Information Pane</strong> (Right Column) provides both an <strong>Activity Log</strong> and a <strong>Created &amp; Modified</strong> Section.</p>", "a[href=\"../../../../Account/sponsorship-organization/sponsorship-organizations.html#sponsorship-organization-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Sponsorship Organizations<a class=\"headerlink\" href=\"#sponsorship-organizations\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Sponsorship Organizations Page</span></span> allows you to:</p>", "a[href=\"../../../EditPermissions/edit-permissions.html#edit-permissions-universal\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Edit Permissions<a class=\"headerlink\" href=\"#edit-permissions\" title=\"Link to this heading\">#</a></h1><p>You can edit permissions for various types of users throughout the app.</p><p><strong>To Edit Permissions:</strong></p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../../../_images/user-user-details-accounts-tab-view-icon.webp\" id=\"user-user-details-accounts-tab-view-icon\"><img alt=\"../../../../_images/user-user-details-accounts-tab-view-icon.webp\" id=\"user-user-details-accounts-tab-view-icon\" loading=\"lazy\" src=\"../../../../_images/user-user-details-accounts-tab-view-icon.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Details Homepage, Accounts Tab, View Account Icon</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
