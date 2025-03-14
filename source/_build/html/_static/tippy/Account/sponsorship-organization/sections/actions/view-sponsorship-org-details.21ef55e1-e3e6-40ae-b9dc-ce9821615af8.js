selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../../_images/sponsor-organization-view-details-screen.webp\" id=\"user-user-details-accounts-tab-view-icon\"><img alt=\"../../../../_images/sponsor-organization-view-details-screen.webp\" id=\"user-user-details-accounts-tab-view-icon\" loading=\"lazy\" src=\"../../../../_images/sponsor-organization-view-details-screen.webp\" style=\"width: 75%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Homepage, Accounts Tab, View Account Icon</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#view-sponsorship-organization-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View Sponsorship Organization Details<a class=\"headerlink\" href=\"#view-sponsorship-organization-details\" title=\"Link to this heading\">#</a></h1><p>When you need to view detailed information about a specific Sponsorship Organization, you can use the <a class=\"reference internal\" href=\"#view-more-icon\"><span class=\"xref myst\">View Account Icon</span></a> button to access all information.</p>", "a[href=\"../../../../Profile/profile.html#profile-section-homepage\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Profile<a class=\"headerlink\" href=\"#profile\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Profile</span></span> allows you edit the following information about your company:</p>", "a[href=\"#editing-sponsorship-organization-information\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Editing Sponsorship Organization Information<a class=\"headerlink\" href=\"#editing-sponsorship-organization-information\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#how-to-access-organization-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">How to Access Organization Details<a class=\"headerlink\" href=\"#how-to-access-organization-details\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#save-changes\"]": "<img src='/_static/solo_app/Universal/buttons/save-changes.webp' alt='Save Changes' style='width:200px;'>", "a[href=\"#view-more-icon\"]": "<img src='/_static/solo_app/Universal/icons/view-more-icon.webp' alt='View More Icon' style='width:200px;'>"}
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
