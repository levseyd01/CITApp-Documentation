selector_to_html = {"a[href=\"../../Universal/logos.html#view-more-icon\"]": "<img alt=\"../_static/solo_app/Universal/icons/view-more-icon.png\" class=\"align-center\" id=\"view-more-icon\" src=\"../../_static/solo_app/Universal/icons/view-more-icon.png\" style=\"width: 200px;\"/>", "a[href=\"../Users/managing-user-accounts.html#staff-homepage\"]": "<figure class=\"align-center\" id=\"staff-homepage\">\n<a class=\"reference internal image-reference\" href=\"../Users/Users/_static/solo_app/User/Staff/staff-homepage.png\"><img alt=\"Users/_static/solo_app/User/Staff/staff-homepage.png\" src=\"../Users/Users/_static/solo_app/User/Staff/staff-homepage.png\" style=\"width: 100%;\"/>\n</a>\n</figure>", "a[href=\"#view-user-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View User Details<a class=\"headerlink\" href=\"#view-user-details\" title=\"Link to this heading\">#</a></h1><p>The View User Details section allows you to both edit and view details of a specific user.</p>", "a[href=\"#navigating-to-the-view-user-details-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating to the View User Details Section<a class=\"headerlink\" href=\"#navigating-to-the-view-user-details-section\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#user-detail-homepage\"]": "<figure class=\"align-center\" id=\"user-detail-homepage\">\n<a class=\"reference internal image-reference\" href=\"Users/_static/solo_app/User/User-Detail/user-detail-homepage.png\"><img alt=\"Users/_static/solo_app/User/User-Detail/user-detail-homepage.png\" src=\"Users/_static/solo_app/User/User-Detail/user-detail-homepage.png\" style=\"width: 75%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">View User Details Homepage</span><a class=\"headerlink\" href=\"#user-detail-homepage\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"../users.html#manage-staff-location\"]": "<figure class=\"align-center\" id=\"manage-staff-location\">\n<a class=\"reference internal image-reference\" href=\"../../_static/solo_app/User/Staff/manage-staff-location.png\"><img alt=\"../_static/solo_app/User/Staff/manage-staff-location.png\" src=\"../../_static/solo_app/User/Staff/manage-staff-location.png\" style=\"width: 50%;\"/>\n</a>\n</figure>", "a[href=\"#edited-user-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Edited User Details<a class=\"headerlink\" href=\"#edited-user-details\" title=\"Link to this heading\">#</a></h1>", "a[href=\"../../Universal/logos.html#navigating-to-user-detail-for-user\"]": "<figure class=\"align-center\" id=\"navigating-to-user-detail-for-user\">\n<a class=\"reference internal image-reference\" href=\"../../_static/solo_app/User/User-Detail/navigating-to-user-detail-for-Users.png\"><img alt=\"../_static/solo_app/User/User-Detail/navigating-to-user-detail-for-Users.png\" src=\"../../_static/solo_app/User/User-Detail/navigating-to-user-detail-for-Users.png\" style=\"width: 100%;\"/>\n</a>\n</figure>"}
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
