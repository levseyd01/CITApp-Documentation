selector_to_html = {"a[href=\"#edited-user-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Edited User Details<a class=\"headerlink\" href=\"#edited-user-details\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#view-user-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View User Details<a class=\"headerlink\" href=\"#view-user-details\" title=\"Link to this heading\">#</a></h1><p>The View User Details section allows you to both edit and view details of a specific user.</p>", "a[href=\"#user-detail-homepage\"]": "<img alt=\"../../_images/user-detail-homepage.webp\" id=\"user-detail-homepage\" loading=\"lazy\" src=\"../../_images/user-detail-homepage.webp\" style=\"width: 75%;\"/>", "a[href=\"../Staff/managing-staff-accounts.html#staff-homepage\"]": "<img alt=\"../../_images/staff-homepage.webp\" id=\"staff-homepage\" loading=\"lazy\" src=\"../../_images/staff-homepage.webp\" style=\"width: 100%;\"/>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-detail-homepage.webp\" id=\"user-detail-homepage\"><img alt=\"../../_images/user-detail-homepage.webp\" id=\"user-detail-homepage\" loading=\"lazy\" src=\"../../_images/user-detail-homepage.webp\" style=\"width: 75%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">View User Details Homepage</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#navigating-to-the-view-user-details-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating to the View User Details Section<a class=\"headerlink\" href=\"#navigating-to-the-view-user-details-section\" title=\"Link to this heading\">#</a></h2>", "a[href=\"view-user-details-breakdown.html#detailed-guide-2\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Detailed Guide to User Details<a class=\"headerlink\" href=\"#detailed-guide-to-user-details\" title=\"Link to this heading\">#</a></h1><p>The <strong>User Details</strong> screen opens up to the <strong>User Information</strong> tab when you select a viewer.</p>", "a[href=\"../Staff/managing-staff-accounts.html#manage-staff-location\"]": "<img alt=\"../../_images/manage-staff-location.webp\" id=\"manage-staff-location\" loading=\"lazy\" src=\"../../_images/manage-staff-location.webp\" style=\"width: 50%;\"/>"}
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
