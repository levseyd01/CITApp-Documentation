selector_to_html = {"a[href=\"#navigating-the-users-tab\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the Users Tab<a class=\"headerlink\" href=\"#navigating-the-users-tab\" title=\"Link to this heading\">#</a></h2><p>The <strong>Actions</strong> column for the <strong>Users</strong> tab has the following actions available:</p>", "a[href=\"#adding-a-new-user-to-the-cit-corporation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Adding a New User to the CIT Corporation<a class=\"headerlink\" href=\"#adding-a-new-user-to-the-cit-corporation\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../../_images/sponsor-organization-users-tab-location-of-tab.webp\" id=\"sponsor-organization-users-tab-location-of-tab\"><img alt=\"../../../../_images/sponsor-organization-users-tab-location-of-tab.webp\" id=\"sponsor-organization-users-tab-location-of-tab\" loading=\"lazy\" src=\"../../../../_images/sponsor-organization-users-tab-location-of-tab.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">CIT Corporation, Users Tab</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#users-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Users Tab<a class=\"headerlink\" href=\"#users-tab\" title=\"Link to this heading\">#</a></h1><p>The <strong>Users</strong> tab is a list of all users associated with the <strong>CIT Corporation</strong>.</p>"}
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
