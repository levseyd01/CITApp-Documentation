selector_to_html = {"a[href=\"tabs/legal-information-tab.html#cit-corporation-legal-information-tab-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Legal Information Tab<a class=\"headerlink\" href=\"#legal-information-tab\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Legal Information</span></span> tab is the second tab inside the <a class=\"reference internal\" href=\"view-cit-corporations.html#view-cit-account-section\"><span class=\"std std-ref\">View Account Details</span></a> section.</p>", "a[href=\"#view-cit-corporation-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View CIT Corporation Details<a class=\"headerlink\" href=\"#view-cit-corporation-details\" title=\"Link to this heading\">#</a></h1><p>This <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>View Account Detail</span></span> section for a <span class=\"item-reference\"><span class=\"visually-hidden\">Item: </span><span>CIT Corporation</span></span> allows you to view and edit the following information:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"Account/_static/solo_app/CIT_Corporation/cit-corporations-homepage-view-more-location.webp\" id=\"cit-corporations-homepage-view-more-location\"><img alt=\"Account/_static/solo_app/CIT_Corporation/cit-corporations-homepage-view-more-location.webp\" id=\"cit-corporations-homepage-view-more-location\" loading=\"lazy\" src=\"Account/_static/solo_app/CIT_Corporation/cit-corporations-homepage-view-more-location.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">CIT Corporation, Homepage, View More Icon Location</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#corporation-information-tab\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Corporation Information Tab<a class=\"headerlink\" href=\"#corporation-information-tab\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>CIT Corporation Information</span></span> tab provides a comprehensive overview of the <span class=\"item-reference\"><span class=\"visually-hidden\">Item: </span><span>CIT Corporation</span></span>.</p>", "a[href=\"#view-cit-account-section-corporate-information-tab\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Corporation Information Tab<a class=\"headerlink\" href=\"#corporation-information-tab\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>CIT Corporation Information</span></span> tab provides a comprehensive overview of the <span class=\"item-reference\"><span class=\"visually-hidden\">Item: </span><span>CIT Corporation</span></span>.</p>", "a[href=\"#how-to-access-corporation-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">How to Access Corporation Details<a class=\"headerlink\" href=\"#how-to-access-corporation-details\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"Account/_static/solo_app/Universal/view-sponsorship-organization/save-changes-location.jpg\" id=\"save-changes-location\"><img alt=\"Account/_static/solo_app/Universal/view-sponsorship-organization/save-changes-location.jpg\" id=\"save-changes-location\" loading=\"lazy\" src=\"Account/_static/solo_app/Universal/view-sponsorship-organization/save-changes-location.jpg\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">CIT Corporation, Save Changes Location</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"Account/_static/solo_app/Account/CITCorporations/cit-corporate-information-tab-location.jpg\" id=\"cit-corporations-view-corp-section-location\"><img alt=\"Account/_static/solo_app/Account/CITCorporations/cit-corporate-information-tab-location.jpg\" id=\"cit-corporations-view-corp-section-location\" loading=\"lazy\" src=\"Account/_static/solo_app/Account/CITCorporations/cit-corporate-information-tab-location.jpg\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">CIT Corporation, View Corporation, Corporation Information Tab Location</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"tabs/cit-corporation-users-tab.html#account-cit-corporation-users-tab-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Users Tab<a class=\"headerlink\" href=\"#users-tab\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Users</span></span> tab is a list of all users associated with the <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>CIT Corporation</span></span>.</p>", "a[href=\"#editing-corporation-information\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Editing Corporation Information<a class=\"headerlink\" href=\"#editing-corporation-information\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#view-more-icon\"]": "<img src='/_static/solo_app/Universal/icons/view-more-icon.webp' alt='View More Icon' style='width:200px;'>"}
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
