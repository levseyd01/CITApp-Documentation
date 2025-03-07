selector_to_html = {"a[href=\"../../../Profile/sections/editing-company-information.html#editing-company-information-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Editing Company Information<a class=\"headerlink\" href=\"#editing-company-information\" title=\"Link to this heading\">#</a></h1><p>The <strong>Profile</strong> screen allows you edit the following information about your company:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../../_images/sponsor-organization-view-details-screen.webp\" id=\"user-user-details-accounts-tab-view-icon\"><img alt=\"../../../_images/sponsor-organization-view-details-screen.webp\" id=\"user-user-details-accounts-tab-view-icon\" loading=\"lazy\" src=\"../../../_images/sponsor-organization-view-details-screen.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Homepage, Accounts Tab, View Account Icon</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../_images/view-sponsorship-organization-main-section-location.webp\" id=\"view-sponsorship-organization-main-section-location\"><img alt=\"../../../_images/view-sponsorship-organization-main-section-location.webp\" id=\"view-sponsorship-organization-main-section-location\" loading=\"lazy\" src=\"../../../_images/view-sponsorship-organization-main-section-location.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, View Account Icon</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#view-sponsorhip-account\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View Sponsorhip Account<a class=\"headerlink\" href=\"#view-sponsorhip-account\" title=\"Link to this heading\">#</a></h1><p>Selecting the <strong>View Account</strong> button will take you to the <strong>Sponsorship Organization Information</strong> screen.</p>", "a[href=\"#save-changes\"]": "<img src='/en/stable-edit/_static/solo_app/Universal/buttons/save-changes.jpeg' alt='Save Changes' style='width:200px;'>"}
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
