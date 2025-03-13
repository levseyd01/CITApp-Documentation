selector_to_html = {"a[href=\"#columns-in-the-sponsorship-organizations-table\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Columns in the Sponsorship Organizations Table<a class=\"headerlink\" href=\"#columns-in-the-sponsorship-organizations-table\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Sponsorship Organizations Table</span></span> has several columns that provide key information at a glance:</p>", "a[href=\"actions/view-sponsorship-org-details.html#view-details-sponsorship-account-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View Sponsorship Organization Details<a class=\"headerlink\" href=\"#view-sponsorship-organization-details\" title=\"Link to this heading\">#</a></h1><p>When you need to view detailed information about a specific Sponsorship Organization, you can use the <a class=\"reference internal\" href=\"#view-more-icon\"><span class=\"xref myst\">View Account Icon</span></a> button to access all information.</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../_images/sponsorship-organization-homepage-table-columns.webp\" id=\"sponsor-organization-table-columns\"><img alt=\"../../../_images/sponsorship-organization-homepage-table-columns.webp\" id=\"sponsor-organization-table-columns\" loading=\"lazy\" src=\"../../../_images/sponsorship-organization-homepage-table-columns.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Table Columns</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#available-actions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Available Actions<a class=\"headerlink\" href=\"#available-actions\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Action</span></span> column provides the following operations:</p>", "a[href=\"#table-sponsorship-organizations\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Table: Sponsorship Organizations<a class=\"headerlink\" href=\"#table-sponsorship-organizations\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Sponsorship Organizations Table</span></span> provides a comprehensive overview of all Sponsorship Organizations in the system.</p>", "a[href=\"#view-more-icon\"]": "<img src='/_static/solo_app/Universal/icons/view-more-icon.webp' alt='View More Icon' style='width:200px;'>"}
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
