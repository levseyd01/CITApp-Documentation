selector_to_html = {"a[href=\"../../../Universal/EditPermissions/edit-permissions.html#edit-permissions-universal\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Edit Permissions<a class=\"headerlink\" href=\"#edit-permissions\" title=\"Link to this heading\">#</a></h1><p>You can edit permissions for various types of users throughout the app.</p><p><strong>To Edit Permissions:</strong></p>", "a[href=\"../../../Universal/DeleteUser/delete-user-universal.html#delete-user-universal\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to Delete User, Staff, Company, etc.<a class=\"headerlink\" href=\"#how-to-delete-user-staff-company-etc\" title=\"Link to this heading\">#</a></h1><p>To delete a user, staff, company, or anything else throughout the app, follow these steps:</p>", "a[href=\"#user-list-table\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User List Table<a class=\"headerlink\" href=\"#user-list-table\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>User List Table</span></span> summarizes key details for each staff member, including:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../_images/user-user-column-options.webp\" id=\"user-homepage\"><img alt=\"../../../_images/user-user-column-options.webp\" id=\"user-homepage\" loading=\"lazy\" src=\"../../../_images/user-user-column-options.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User, Column Options</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
