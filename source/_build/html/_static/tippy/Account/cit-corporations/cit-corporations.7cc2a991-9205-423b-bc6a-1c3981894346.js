selector_to_html = {"a[href=\"#cit-corporations-list-table\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">CIT Corporations List Table</a><a class=\"headerlink\" href=\"#cit-corporations-list-table\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>CIT Corporations</span></span> section opens up to <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>CIT Corporations List</span></span> table:</p>", "a[href=\"sections/actions/view-cit-corporations.html#view-cit-account-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View CIT Corporation Details<a class=\"headerlink\" href=\"#view-cit-corporation-details\" title=\"Link to this heading\">#</a></h1><p>This <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>View Account Detail</span></span> section for a <span class=\"item-reference\"><span class=\"visually-hidden\">Item: </span><span>CIT Corporation</span></span> allows you to view and edit the following information:</p>", "a[href=\"sections/actions/tabs/legal-information-tab.html#cit-corporation-legal-information-tab-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Legal Information Tab<a class=\"headerlink\" href=\"#legal-information-tab\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Legal Information</span></span> tab is the second tab inside the <a class=\"reference internal\" href=\"sections/actions/view-cit-corporations.html#view-cit-account-section\"><span class=\"std std-ref\">View Account Details</span></a> section.</p>", "a[href=\"#id3\"]": "<a class=\"reference internal\" href=\"#features\" id=\"id3\">Features</a>", "a[href=\"#features\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Features</a><a class=\"headerlink\" href=\"#features\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>CIT Corporations</span></span> section allows you to:</p>", "a[href=\"#id5\"]": "<a class=\"reference internal\" href=\"#cit-corporations-list-table\" id=\"id5\">CIT Corporations List Table</a>", "a[href=\"#cit-corporations-list\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporations List<a class=\"headerlink\" href=\"#cit-corporations-list\" title=\"Link to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Features</a><a class=\"headerlink\" href=\"#features\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>CIT Corporations</span></span> section allows you to:</p>", "a[href=\"#id4\"]": "<a class=\"reference internal\" href=\"#location-cit-corporations-section\" id=\"id4\">Location: CIT Corporations Section</a>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/account-cit-corporations-location-primary-sidenav.jpg\" id=\"account-cit-corporations-location-primary-sidenav\"><img alt=\"../../_images/account-cit-corporations-location-primary-sidenav.jpg\" id=\"account-cit-corporations-location-primary-sidenav\" loading=\"lazy\" src=\"../../_images/account-cit-corporations-location-primary-sidenav.jpg\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Account, CIT Corporations, Homepage, Primary Sidenav Location</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#location-cit-corporations-section\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">Location: CIT Corporations Section</a><a class=\"headerlink\" href=\"#location-cit-corporations-section\" title=\"Link to this heading\">#</a></h3><p>You can find the <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>CIT Corporations</span></span> section underneath the <span class=\"account-category category-reference\"><span class=\"mat-icon material-icons hide-icon-text\">account_balance</span><span class=\"visually-hidden\">Account Category: </span><span>Account</span></span> category:</p>", "a[href=\"sections/actions/tabs/cit-corporation-users-tab.html#account-cit-corporation-users-tab-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Users Tab<a class=\"headerlink\" href=\"#users-tab\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Users</span></span> tab is a list of all users associated with the <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>CIT Corporation</span></span>.</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"_static/solo_app/CIT_Corporationcit-corporations-homepage.webp\" id=\"cit-corporations-hompage-list-table\"><img alt=\"_static/solo_app/CIT_Corporationcit-corporations-homepage.webp\" id=\"cit-corporations-hompage-list-table\" loading=\"lazy\" src=\"_static/solo_app/CIT_Corporationcit-corporations-homepage.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">CIT Corporations Section, Homepage, CIT Corporations List Table</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
