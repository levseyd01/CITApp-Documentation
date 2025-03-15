selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../_images/sponsorship-organization-homepage-table-columns.webp\" id=\"sponsorship-organization-table-columns\"><img alt=\"../../../_images/sponsorship-organization-homepage-table-columns.webp\" id=\"sponsorship-organization-table-columns\" loading=\"lazy\" src=\"../../../_images/sponsorship-organization-homepage-table-columns.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Account, Sponsorship Organizations, Homepage, Table Columns</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"view-sponsorship-org-details.html#view-details-sponsorship-account-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View Sponsorship Organization Details<a class=\"headerlink\" href=\"#view-sponsorship-organization-details\" title=\"Link to this heading\">#</a></h1><p>When you need to view detailed information about a specific Sponsorship Organization, you can use the <a class=\"reference internal\" href=\"#view-more-icon\"><span class=\"xref myst\">View Account Icon</span></a> button to access all information.</p>", "a[href=\"#columns-sponsorship-organizations-list-table\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Columns: Sponsorship Organizations List Table<a class=\"headerlink\" href=\"#columns-sponsorship-organizations-list-table\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Sponsorship Organizations List</span></span> table has several columns that provide key information at a glance:</p>", "a[href=\"#available-actions-sponsorship-organization-list\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Available Actions: Sponsorship Organization List<a class=\"headerlink\" href=\"#available-actions-sponsorship-organization-list\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Action</span></span> column provides the following operations:</p>", "a[href=\"#table-sponsorship-organizations-list\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Table: Sponsorship Organizations list<a class=\"headerlink\" href=\"#table-sponsorship-organizations-list\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Sponsorship Organizations List</span></span> table provides a comprehensive overview of all Sponsorship Organizations in the system.</p>", "a[href=\"#manage-icon\"]": "<img src='/_static/solo_app/Universal/icons/manage-icon.webp' alt='Manage Icon' style='width:200px;'>", "a[href=\"#view-more-icon\"]": "<img src='/_static/solo_app/Universal/icons/view-more-icon.webp' alt='View More Icon' style='width:200px;'>"}
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
