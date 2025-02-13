selector_to_html = {"a[href=\"#view-sponsorship-organization-main-section-location\"]": "<figure class=\"align-center\" id=\"view-sponsorship-organization-main-section-location\">\n<a class=\"reference internal image-reference\" href=\"Account/_static/solo_app/Universal/view-sponsorship-organization/view-sponsorship-organization-main-section-location.png\"><img alt=\"Account/_static/solo_app/Universal/view-sponsorship-organization/view-sponsorship-organization-main-section-location.png\" src=\"Account/_static/solo_app/Universal/view-sponsorship-organization/view-sponsorship-organization-main-section-location.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, View Account Icon</span><a class=\"headerlink\" href=\"#view-sponsorship-organization-main-section-location\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#view-sponsorhip-account\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View Sponsorhip Account<a class=\"headerlink\" href=\"#view-sponsorhip-account\" title=\"Link to this heading\">#</a></h1><p>Selecting the <strong>View Account</strong> button will take you to the <strong>Sponsorship Organization Information</strong> screen.</p>", "a[href=\"#user-user-details-accounts-tab-view-icon\"]": "<figure class=\"align-center\" id=\"user-user-details-accounts-tab-view-icon\">\n<a class=\"reference internal image-reference\" href=\"Account/_static/solo_app/User/User-Detail/account-details-sponsor/sponsor-organization-view-details-screen.png\"><img alt=\"Account/_static/solo_app/User/User-Detail/account-details-sponsor/sponsor-organization-view-details-screen.png\" src=\"Account/_static/solo_app/User/User-Detail/account-details-sponsor/sponsor-organization-view-details-screen.png\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Homepage, Accounts Tab, View Account Icon</span><a class=\"headerlink\" href=\"#user-user-details-accounts-tab-view-icon\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#save-changes\"]": "<img src='/en/stable-edit/_static/solo_app/Universal/buttons/save-changes.jpeg' alt='Save Changes' style='width:200px;'>"}
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
