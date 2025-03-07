selector_to_html = {"a[href=\"../../../Universal/UserDetails/user-details-page.html#user-details-universal-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Details Page<a class=\"headerlink\" href=\"#user-details-page\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>User Details Page</span></span> opens up to the <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>User Information</span></span> Tab</p>", "a[href=\"../../../Universal/UserDetails/view-user-details-accounts-tab.html#user-details-accounts-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Details - Accounts Tab<a class=\"headerlink\" href=\"#user-details-accounts-tab\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>User Details</span></span> page also has an <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Accounts</span></span> tab that allows you to view the accounts associated with the user.</p>", "a[href=\"#view-user-details-and-other-remaining-sections\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View User Details and Other Remaining Sections<a class=\"headerlink\" href=\"#view-user-details-and-other-remaining-sections\" title=\"Link to this heading\">#</a></h1><p>The remaining sections are universally shared throughout the app.</p><p><strong>These sections include:</strong></p>", "a[href=\"../../../Universal/InformationPane/information-pane.html#information-pane-main-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Information Pane<a class=\"headerlink\" href=\"#information-pane\" title=\"Link to this heading\">#</a></h1><p>The <strong>Information Pane</strong> (Right Column) provides both an <strong>Activity Log</strong> and a <strong>Created &amp; Modified</strong> Section.</p>"}
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
