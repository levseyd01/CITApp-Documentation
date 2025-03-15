selector_to_html = {"a[href=\"#adding-a-new-user\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Adding a New User<a class=\"headerlink\" href=\"#adding-a-new-user\" title=\"Link to this heading\">#</a></h1><p>To add a new user to the Sponsorship Organization:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"Account/_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-add-new-user-popup.webp\" id=\"sponsor-organization-users-tab-add-new-user-popup\"><img alt=\"Account/_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-add-new-user-popup.webp\" id=\"sponsor-organization-users-tab-add-new-user-popup\" loading=\"lazy\" src=\"Account/_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-add-new-user-popup.webp\" style=\"width: 75%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Users Tab, Add New User Popup</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"Account/_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-new-user-location.webp\" id=\"sponsor-organization-users-tab-new-user-location\"><img alt=\"Account/_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-new-user-location.webp\" id=\"sponsor-organization-users-tab-new-user-location\" loading=\"lazy\" src=\"Account/_static/solo_app/Universal/view-sponsorship-organization/users-tab/sponsor-organization-users-tab-new-user-location.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Users Tab, New User Location</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
