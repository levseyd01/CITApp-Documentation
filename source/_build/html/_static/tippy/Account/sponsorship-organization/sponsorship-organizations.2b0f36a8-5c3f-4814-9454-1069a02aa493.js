selector_to_html = {"a[href=\"#id3\"]": "<a class=\"reference internal\" href=\"#location-and-features\" id=\"id3\">Location and Features</a>", "a[href=\"#location-and-features\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Location and Features</a><a class=\"headerlink\" href=\"#location-and-features\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Sponsorship Organizations</span></span> page allows you to:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/account_sponsorship-organizations-location.jpg\" id=\"sponsor-organization-location\"><img alt=\"../../_images/account_sponsorship-organizations-location.jpg\" id=\"sponsor-organization-location\" loading=\"lazy\" src=\"../../_images/account_sponsorship-organizations-location.jpg\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Location</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/sponsorship-organization-homepage.webp\" id=\"sponsor-organization-homepage\"><img alt=\"../../_images/sponsorship-organization-homepage.webp\" id=\"sponsor-organization-homepage\" loading=\"lazy\" src=\"../../_images/sponsorship-organization-homepage.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Homepage</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#sponsorship-organizations\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Sponsorship Organizations<a class=\"headerlink\" href=\"#sponsorship-organizations\" title=\"Link to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Location and Features</a><a class=\"headerlink\" href=\"#location-and-features\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Sponsorship Organizations</span></span> page allows you to:</p>", "a[href=\"sections/actions/view-sponsorship-org-details.html#view-details-sponsorship-account-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View Sponsorship Organization Details<a class=\"headerlink\" href=\"#view-sponsorship-organization-details\" title=\"Link to this heading\">#</a></h1><p>When you need to view detailed information about a specific Sponsorship Organization, you can use the <a class=\"reference internal\" href=\"#view-more-icon\"><span class=\"xref myst\">View Account Icon</span></a> button to access all information.</p>", "a[href=\"sections/sponsorship-organization-table.html#sponsorship-organization-table-overview\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Table: Sponsorship Organizations<a class=\"headerlink\" href=\"#table-sponsorship-organizations\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Sponsorship Organizations List</span></span> table provides a comprehensive overview of all Sponsorship Organizations in the system.</p>", "a[href=\"#manage-icon\"]": "<img src='/_static/solo_app/Universal/icons/manage-icon.webp' alt='Manage Icon' style='width:200px;'>"}
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
