selector_to_html = {"a[href=\"actions/view-cit-corporations.html#view-cit-account-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View CIT Corporation Details<a class=\"headerlink\" href=\"#view-cit-corporation-details\" title=\"Link to this heading\">#</a></h1><p>This <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>View Account Detail</span></span> section for a <span class=\"item-reference\"><span class=\"visually-hidden\">Item: </span><span>CIT Corporation</span></span> allows you to view and edit the following information:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../_images/sponsorship-organization-homepage-table-columns.webp\" id=\"sponsorship-organization-table-columns\"><img alt=\"../../../_images/sponsorship-organization-homepage-table-columns.webp\" id=\"sponsorship-organization-table-columns\" loading=\"lazy\" src=\"../../../_images/sponsorship-organization-homepage-table-columns.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Account, Sponsorship Organizations, Homepage, Table Columns</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#table-cit-corporations-list\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Table: CIT Corporations List<a class=\"headerlink\" href=\"#table-cit-corporations-list\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>CIT Corporations List</span></span> table provides a comprehensive overview of all <span class=\"item-reference\"><span class=\"visually-hidden\">Item: </span><span>CIT Corporations</span></span> in the system.</p>", "a[href=\"#columns-in-the-cit-corporations-list-table\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Columns in the CIT Corporations List Table<a class=\"headerlink\" href=\"#columns-in-the-cit-corporations-list-table\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>CIT Corporations List</span></span> table has several columns that provide key information at a glance:</p>", "a[href=\"#available-actions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Available Actions<a class=\"headerlink\" href=\"#available-actions\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Action</span></span> column provides the following operations:</p>", "a[href=\"#manage-icon\"]": "<img src='/_static/solo_app/Universal/icons/manage-icon.webp' alt='Manage Icon' style='width:200px;'>", "a[href=\"#view-more-icon\"]": "<img src='/_static/solo_app/Universal/icons/view-more-icon.webp' alt='View More Icon' style='width:200px;'>"}
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
