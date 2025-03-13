selector_to_html = {"a[href=\"edit-user-details.html#edit-user-details-universal\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Edit User Details<a class=\"headerlink\" href=\"#edit-user-details\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>User Information Tab</span></span> allows you to edit the following fields:</p>", "a[href=\"#other-sections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Other Sections<a class=\"headerlink\" href=\"#other-sections\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#user-information-tab\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">User Information Tab<a class=\"headerlink\" href=\"#user-information-tab\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>User Details Page</span></span> has various actions available:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-actions-location.webp\" id=\"user-actions-location\"><img alt=\"../../_images/user-actions-location.webp\" id=\"user-actions-location\" loading=\"lazy\" src=\"../../_images/user-actions-location.webp\" style=\"width: 75%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User Actions Location, Bottom Right</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"Tabs/view-user-details-accounts-tab.html#view-user-details-universal-accounts-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Details: Accounts Tab<a class=\"headerlink\" href=\"#user-details-accounts-tab\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>User Details</span></span> page also has an <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Accounts</span></span> tab that allows you to view the accounts associated with the user.</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-detail-homepage.webp\" id=\"user-detail-homepage\"><img alt=\"../../_images/user-detail-homepage.webp\" id=\"user-detail-homepage\" loading=\"lazy\" src=\"../../_images/user-detail-homepage.webp\" style=\"width: 75%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">View User Details Homepage, User Information Tab</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#user-details-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Details Page<a class=\"headerlink\" href=\"#user-details-page\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>User Details Page</span></span> opens up to the <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>User Information Tab</span></span></p>", "a[href=\"#deactivate-button\"]": "<img src='/_static/solo_app/Universal/buttons/deactivate.webp' alt='Deactivate Button' style='width:200px;'>", "a[href=\"#save-changes\"]": "<img src='/_static/solo_app/Universal/buttons/save-changes.webp' alt='Save Changes' style='width:200px;'>", "a[href=\"#reset-password\"]": "<img src='/_static/solo_app/User/User-Detail/reset-password.webp' alt='Reset Password' style='width:200px;'>"}
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
