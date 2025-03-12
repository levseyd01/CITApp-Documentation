selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-location-of-tab.webp\" id=\"sponsor-organization-users-tab-location-of-tab\"><img alt=\"../../../_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-location-of-tab.webp\" id=\"sponsor-organization-users-tab-location-of-tab\" loading=\"lazy\" src=\"../../../_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-location-of-tab.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Users Tab</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"../UserDetails/user-details-page.html#user-details-universal-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Details Page<a class=\"headerlink\" href=\"#user-details-page\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>User Details Page</span></span> opens up to the <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>User Information Tab</span></span></p>", "a[href=\"#users-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Users Tab<a class=\"headerlink\" href=\"#users-tab\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Users</span></span> tab provides a comprehensive list of all users associated with the <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Sponsorship Organization</span></span>.</p>", "a[href=\"../UserDetails/edit-user-details.html#edit-user-details-universal\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Edit User Details<a class=\"headerlink\" href=\"#edit-user-details\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>User Information Tab</span></span> allows you to edit the following fields:</p>", "a[href=\"#users-tab-actions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Users Tab Actions<a class=\"headerlink\" href=\"#users-tab-actions\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Actions</span></span> column for the <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Users</span></span> tab provides the following operations:</p>", "a[href=\"../DeleteUser/delete-user-universal.html#delete-user-universal\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to Delete User, Staff, Company, etc.<a class=\"headerlink\" href=\"#how-to-delete-user-staff-company-etc\" title=\"Link to this heading\">#</a></h1><p>To delete a user, staff, company, or anything else throughout the app, follow these steps:</p>"}
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
