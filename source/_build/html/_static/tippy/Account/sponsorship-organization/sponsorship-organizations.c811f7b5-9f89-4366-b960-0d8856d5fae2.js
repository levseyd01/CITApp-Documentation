selector_to_html = {"a[href=\"sections/actions/view-sponsorship-org-details.html#view-details-sponsorship-account-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View Sponsorship Organization Details<a class=\"headerlink\" href=\"#view-sponsorship-organization-details\" title=\"Link to this heading\">#</a></h1><p>When you need to view detailed information about a specific Sponsorship Organization, you can use the <a class=\"reference internal\" href=\"#view-more-icon\"><span class=\"xref myst\">View Account Icon</span></a> button to access all information.</p>", "a[href=\"../../Dashboard/dashboard.html#dashboard-tile-overview-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dashboard<a class=\"headerlink\" href=\"#dashboard\" title=\"Link to this heading\">#</a></h1><h2>Dashboard Table Section<a class=\"headerlink\" href=\"#dashboard-table-section\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Dashboard Table</span></span> contains the following columns:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/sponsorship-organization-homepage.webp\" id=\"sponsor-organization-homepage\"><img alt=\"../../_images/sponsorship-organization-homepage.webp\" id=\"sponsor-organization-homepage\" loading=\"lazy\" src=\"../../_images/sponsorship-organization-homepage.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Homepage</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"sections/sponsorship-organization-table.html#sponsorship-organization-table-overview\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Table: Sponsorship Organizations<a class=\"headerlink\" href=\"#table-sponsorship-organizations\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Sponsorship Organizations Table</span></span> provides a comprehensive overview of all Sponsorship Organizations in the system.</p>", "a[href=\"#sponsorship-organizations\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Sponsorship Organizations<a class=\"headerlink\" href=\"#sponsorship-organizations\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Sponsorship Organizations Page</span></span> allows you to:</p>"}
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
