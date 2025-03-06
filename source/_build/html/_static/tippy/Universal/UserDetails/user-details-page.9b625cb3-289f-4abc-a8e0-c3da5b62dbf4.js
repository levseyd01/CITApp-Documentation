selector_to_html = {"a[href=\"#navigating-the-user-details-homepage\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the User Details Homepage<a class=\"headerlink\" href=\"#navigating-the-user-details-homepage\" title=\"Link to this heading\">#</a></h1><p>The <strong>User Details</strong> page has various actions available at the bottom-right of the page, including the following options:</p>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-actions-location.webp\" id=\"user-actions-location\"><img alt=\"../../_images/user-actions-location.webp\" id=\"user-actions-location\" loading=\"lazy\" src=\"../../_images/user-actions-location.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User Actions Location, Bottom Right</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-detail-homepage.webp\" id=\"user-detail-homepage\"><img alt=\"../../_images/user-detail-homepage.webp\" id=\"user-detail-homepage\" loading=\"lazy\" src=\"../../_images/user-detail-homepage.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">View User Details Homepage</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#editing-user-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Editing User Details<a class=\"headerlink\" href=\"#editing-user-details\" title=\"Link to this heading\">#</a></h2><p>You can edit the following details on the <strong>User Details Homepage</strong>:</p>", "a[href=\"#user-details-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Details Page<a class=\"headerlink\" href=\"#user-details-page\" title=\"Link to this heading\">#</a></h1><p>The <strong>User Details</strong> page allows you to view and edit a specific User\u2019s details.</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-user-save-changes.webp\" id=\"user-user-save-changes\"><img alt=\"../../_images/user-user-save-changes.webp\" id=\"user-user-save-changes\" loading=\"lazy\" src=\"../../_images/user-user-save-changes.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Homepage, Save Changes</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#deactivate-button\"]": "<img src='/en/stable-edit/_static/solo_app/Universal/buttons/deactivate-button.jpeg' alt='Deactivate Button' style='width:200px;'>", "a[href=\"#reset-password\"]": "<img src='/en/stable-edit/en/stable-edit/_static/solo_app/User/User-Detail/reset-password.jpeg' alt='Reset Password' style='width:200px;'>", "a[href=\"#save-changes\"]": "<img src='/en/stable-edit/_static/solo_app/Universal/buttons/save-changes.jpeg' alt='Save Changes' style='width:200px;'>"}
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
