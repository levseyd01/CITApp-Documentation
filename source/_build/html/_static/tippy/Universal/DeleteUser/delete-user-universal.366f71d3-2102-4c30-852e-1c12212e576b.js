selector_to_html = {"a[href=\"#how-to-delete-user-staff-company-etc\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to Delete User, Staff, Company, etc.<a class=\"headerlink\" href=\"#how-to-delete-user-staff-company-etc\" title=\"Link to this heading\">#</a></h1><p>To delete a user, staff, company, or anything else throughout the app, follow these steps:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/action-column-location.webp\" id=\"action-column-location\"><img alt=\"../../_images/action-column-location.webp\" id=\"action-column-location\" loading=\"lazy\" src=\"../../_images/action-column-location.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">General Action Column Location</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/general-remove-popup.webp\" id=\"general-remove-popup-notification\"><img alt=\"../../_images/general-remove-popup.webp\" id=\"general-remove-popup-notification\" loading=\"lazy\" src=\"../../_images/general-remove-popup.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">General Remove Popup Notification</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/delete-location.webp\" id=\"general-delete-icon-location\"><img alt=\"../../_images/delete-location.webp\" id=\"general-delete-icon-location\" loading=\"lazy\" src=\"../../_images/delete-location.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">General Delete Icon Location</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#delete-icon\"]": "<img src='/_static/solo_app/Universal/icons/delete-icon.webp' alt='Delete Icon' style='width:200px;'>"}
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
