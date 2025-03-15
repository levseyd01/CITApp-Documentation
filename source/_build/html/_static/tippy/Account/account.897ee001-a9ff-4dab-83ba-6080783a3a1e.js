selector_to_html = {"a[href=\"sponsorship-organization/sponsorship-organizations.html#sponsorship-organization-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Sponsorship Organizations<a class=\"headerlink\" href=\"#sponsorship-organizations\" title=\"Link to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Features: Sponsorship Organizations</a><a class=\"headerlink\" href=\"#features-sponsorship-organizations\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Sponsorship Organizations</span></span> section allows you to:</p>", "a[href=\"#account\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Account<a class=\"headerlink\" href=\"#account\" title=\"Link to this heading\">#</a></h1><p>The following <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Sections</span></span> are included in the <span class=\"account-category category-reference\"><span class=\"mat-icon material-icons hide-icon-text\">account_balance</span><span class=\"visually-hidden\">Account Category: </span><span>Account</span></span> category:</p>", "a[href=\"cit-corporations/cit-corporations.html#cit-corporations-list-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporations List<a class=\"headerlink\" href=\"#cit-corporations-list\" title=\"Link to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Features</a><a class=\"headerlink\" href=\"#features\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>CIT Corporations</span></span> section allows you to:</p>"}
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
