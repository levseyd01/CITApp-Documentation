selector_to_html = {"a[href=\"#navigating-the-users-tab\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the Users Tab<a class=\"headerlink\" href=\"#navigating-the-users-tab\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Actions</span></span> column for the <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Users</span></span> tab has the following actions available:</p>", "a[href=\"#adding-a-new-user-to-the-cit-corporation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Adding a New User to the CIT Corporation<a class=\"headerlink\" href=\"#adding-a-new-user-to-the-cit-corporation\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#users-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Users Tab<a class=\"headerlink\" href=\"#users-tab\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Users</span></span> tab is a list of all users associated with the <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>CIT Corporation</span></span>.</p>", "a[href=\"../../../../../Universal/AddNewUser/add-new-user.html#add-new-user-section-universal\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add New User<a class=\"headerlink\" href=\"#add-new-user\" title=\"Link to this heading\">#</a></h1><p>These instructions are generally applicable to any page that has a a <a class=\"reference internal\" href=\"#add-new-staff-plus-button\"><span class=\"xref myst\">Add New User Button</span></a>.</p><p><strong>To add a New User:</strong></p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"Account/_static/solo_app/CIT_Corporation/cit-organization-users-tab-location.jpg\" id=\"cit-corporations-users-tab-location\"><img alt=\"Account/_static/solo_app/CIT_Corporation/cit-organization-users-tab-location.jpg\" id=\"cit-corporations-users-tab-location\" loading=\"lazy\" src=\"Account/_static/solo_app/CIT_Corporation/cit-organization-users-tab-location.jpg\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">CIT Corporation, Users Tab Location</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
