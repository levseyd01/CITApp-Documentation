selector_to_html = {"a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/accounts-tab.webp\" id=\"user-user-accounts-tab\"><img alt=\"../../_images/accounts-tab.webp\" id=\"user-user-accounts-tab\" loading=\"lazy\" src=\"../../_images/accounts-tab.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Details Homepage, <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Accounts</span></span> Tab</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#navigating-the-accounts-tab\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the Accounts Tab<a class=\"headerlink\" href=\"#navigating-the-accounts-tab\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Accounts</span></span> tab displays the following columns:</p>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../_images/accounts-tab-action-section.webp\" id=\"user-user-accounts-tab-action-column\"><img alt=\"../../_images/accounts-tab-action-section.webp\" id=\"user-user-accounts-tab-action-column\" loading=\"lazy\" src=\"../../_images/accounts-tab-action-section.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Details Homepage, <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Accounts</span></span> Tab, <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Action</span></span> Column</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/accounts-tab-column-names.webp\" id=\"user-user-accounts-tab-column-names\"><img alt=\"../../_images/accounts-tab-column-names.webp\" id=\"user-user-accounts-tab-column-names\" loading=\"lazy\" src=\"../../_images/accounts-tab-column-names.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Details Homepage, <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Accounts</span></span> Tab, Column Names</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#view-sponsorhip-account\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View Sponsorhip Account<a class=\"headerlink\" href=\"#view-sponsorhip-account\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#user-details-accounts-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Details - Accounts Tab<a class=\"headerlink\" href=\"#user-details-accounts-tab\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>User Details</span></span> page also has an <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Accounts</span></span> tab that allows you to view the accounts associated with the user.</p>", "a[href=\"#action-column-for-accounts-tab\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Action Column for Accounts Tab<a class=\"headerlink\" href=\"#action-column-for-accounts-tab\" title=\"Link to this heading\">#</a></h3><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Action</span></span> column has three actions available:</p>", "a[href=\"#id5\"]": "<figure class=\"align-center\" id=\"id5\">\n<a class=\"reference internal image-reference\" href=\"../../_images/user-user-details-accounts-tab-view-icon.webp\" id=\"user-user-details-accounts-tab-view-icon\"><img alt=\"../../_images/user-user-details-accounts-tab-view-icon.webp\" id=\"user-user-details-accounts-tab-view-icon\" loading=\"lazy\" src=\"../../_images/user-user-details-accounts-tab-view-icon.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Details Homepage, <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Accounts</span></span> Tab, View Account Icon</span><a class=\"headerlink\" href=\"#id5\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
