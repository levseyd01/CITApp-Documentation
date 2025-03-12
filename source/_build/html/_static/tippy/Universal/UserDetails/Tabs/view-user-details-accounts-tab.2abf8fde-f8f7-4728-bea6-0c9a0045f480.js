selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../_images/accounts-tab.webp\" id=\"user-user-accounts-tab\"><img alt=\"../../../_images/accounts-tab.webp\" id=\"user-user-accounts-tab\" loading=\"lazy\" src=\"../../../_images/accounts-tab.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Details Homepage, <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Accounts</span></span> Tab</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#accounts-tab-table-columns\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Accounts Tab: Table Columns<a class=\"headerlink\" href=\"#accounts-tab-table-columns\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Accounts Tab</span></span> displays the following <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Columns</span></span>:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../../_images/accounts-tab-column-names.webp\" id=\"user-user-accounts-tab-column-names\"><img alt=\"../../../_images/accounts-tab-column-names.webp\" id=\"user-user-accounts-tab-column-names\" loading=\"lazy\" src=\"../../../_images/accounts-tab-column-names.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User Details Homepage, <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Accounts Tab</span></span>, Column Names</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#user-details-accounts-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Details: Accounts Tab<a class=\"headerlink\" href=\"#user-details-accounts-tab\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>User Details</span></span> page also has an <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Accounts</span></span> tab that allows you to view the accounts associated with the user.</p>"}
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
