selector_to_html = {"a[href=\"#beneficiaries-tab-overview\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Beneficiaries Tab Overview<a class=\"headerlink\" href=\"#beneficiaries-tab-overview\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Beneficiaries</span></span> tab displays a list of all beneficiaries linked to the investor, including their contact information and allocation percentages.</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../../_images/view-investor-details-beneficiary-tab-location.webp\" id=\"investor-beneficiary-tab-location\"><img alt=\"../../../../_images/view-investor-details-beneficiary-tab-location.webp\" id=\"investor-beneficiary-tab-location\" loading=\"lazy\" src=\"../../../../_images/view-investor-details-beneficiary-tab-location.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Investor Details, Beneficiaries Tab Location</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#beneficiary-table\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Beneficiary Table<a class=\"headerlink\" href=\"#beneficiary-table\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Beneficiaries Table</span></span> contains the following columns:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../../../_images/view-investor-details-beneficiary-tab.webp\" id=\"investor-beneficiary-tab-view\"><img alt=\"../../../../_images/view-investor-details-beneficiary-tab.webp\" id=\"investor-beneficiary-tab-view\" loading=\"lazy\" src=\"../../../../_images/view-investor-details-beneficiary-tab.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Investor Details, Beneficiaries Tab View</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#available-actions\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Available Actions<a class=\"headerlink\" href=\"#available-actions\" title=\"Link to this heading\">#</a></h3><p>The <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Action</span></span> column allows you to:</p>", "a[href=\"#beneficiaries-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Beneficiaries Tab<a class=\"headerlink\" href=\"#beneficiaries-tab\" title=\"Link to this heading\">#</a></h1><p id=\"investor-beneficiary-tab\">The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Beneficiaries</span></span> tab allows you to view and manage all beneficiaries associated with an investor.</p>"}
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
