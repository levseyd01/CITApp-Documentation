selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-detail-homepage.webp\" id=\"user-detail-homepage\"><img alt=\"../../_images/user-detail-homepage.webp\" id=\"user-detail-homepage\" loading=\"lazy\" src=\"../../_images/user-detail-homepage.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">View User Details Homepage, <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>User Information</span></span> Tab</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-user-save-changes.webp\" id=\"user-user-save-changes\"><img alt=\"../../_images/user-user-save-changes.webp\" id=\"user-user-save-changes\" loading=\"lazy\" src=\"../../_images/user-user-save-changes.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Homepage, Save Changes</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#user-information-tab\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">User Information Tab<a class=\"headerlink\" href=\"#user-information-tab\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>User Details Page</span></span> has various actions available:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-actions-location.webp\" id=\"user-actions-location\"><img alt=\"../../_images/user-actions-location.webp\" id=\"user-actions-location\" loading=\"lazy\" src=\"../../_images/user-actions-location.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User Actions Location, Bottom Right</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#user-details-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Details Page<a class=\"headerlink\" href=\"#user-details-page\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>User Details Page</span></span> opens up to the <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>User Information</span></span> Tab</p>", "a[href=\"#edit-user-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Edit User Details<a class=\"headerlink\" href=\"#edit-user-details\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>User Information</span></span> allows you to edit the following fields:</p>", "a[href=\"#save-changes\"]": "<img src='/_static/solo_app/Universal/buttons/save-changes.webp' alt='Save Changes' style='width:200px;'>", "a[href=\"#reset-password\"]": "<img src='/_static/solo_app/User/User-Detail/reset-password.webp' alt='Reset Password' style='width:200px;'>", "a[href=\"#deactivate-button\"]": "<img src='/_static/solo_app/Universal/buttons/deactivate.webp' alt='Deactivate Button' style='width:200px;'>"}
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
