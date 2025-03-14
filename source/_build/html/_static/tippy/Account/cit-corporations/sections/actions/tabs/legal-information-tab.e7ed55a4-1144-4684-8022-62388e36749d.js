selector_to_html = {"a[href=\"../../../../../Profile/profile.html#profile-section-homepage\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Profile<a class=\"headerlink\" href=\"#profile\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Profile</span></span> allows you edit the following information about your company:</p>", "a[href=\"#information-available-in-the-legal-tab\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Information Available in the Legal Tab<a class=\"headerlink\" href=\"#information-available-in-the-legal-tab\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Legal Information</span></span> tab allows you to view and the following information about a given <span class=\"item-reference\"><span class=\"visually-hidden\">Item: </span><span>CIT Corporation</span></span>:</p>", "a[href=\"../view-cit-corporations.html#view-cit-account-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View CIT Corporation Details<a class=\"headerlink\" href=\"#view-cit-corporation-details\" title=\"Link to this heading\">#</a></h1><p>This <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>View Account Detail</span></span> section for a <span class=\"item-reference\"><span class=\"visually-hidden\">Item: </span><span>CIT Corporation</span></span> allows you to view and edit the following information:</p>", "a[href=\"#legal-information-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Legal Information Tab<a class=\"headerlink\" href=\"#legal-information-tab\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Legal Information</span></span> tab is the second tab inside the <a class=\"reference internal\" href=\"../view-cit-corporations.html#view-cit-account-section\"><span class=\"std std-ref\">View Account Details</span></a> section.</p>", "a[href=\"#editing-legal-information-for-cit-corporations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Editing Legal Information for CIT Corporations<a class=\"headerlink\" href=\"#editing-legal-information-for-cit-corporations\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"Account/_static/solo_app/CIT_Corporation/legal-information-tab/legal-information-tab-location.jpg\" id=\"cit-corporation-legal-information-tab\"><img alt=\"Account/_static/solo_app/CIT_Corporation/legal-information-tab/legal-information-tab-location.jpg\" id=\"cit-corporation-legal-information-tab\" loading=\"lazy\" src=\"Account/_static/solo_app/CIT_Corporation/legal-information-tab/legal-information-tab-location.jpg\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">CIT Corporation, Legal Information Tab</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#save-changes\"]": "<img src='/_static/solo_app/Universal/buttons/save-changes.webp' alt='Save Changes' style='width:200px;'>"}
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
