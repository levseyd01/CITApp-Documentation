selector_to_html = {"a[href=\"sections/cit-offering-view-more-details.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Action: View More Details (Offering Documents)<a class=\"headerlink\" href=\"#action-view-more-details-offering-documents\" title=\"Link to this heading\">#</a></h1><p>To view more details about each document in the Offering process for the selected CIT Corporation, do the following:</p>", "a[href=\"sections/cit-offering-status-filter.html#status-types\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Status Types<a class=\"headerlink\" href=\"#status-types\" title=\"Link to this heading\">#</a></h3>", "a[href=\"sections/cit-offering-table-columns-explained.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Offering Documents Table: Columns Explained<a class=\"headerlink\" href=\"#cit-offering-documents-table-columns-explained\" title=\"Link to this heading\">#</a></h1><p>There are 8 columns in the <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Offering Documents Table</span></span>:</p>", "a[href=\"#table-offering-documents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Table: Offering Documents<a class=\"headerlink\" href=\"#table-offering-documents\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Offering Documents Table</span></span> is what first appears on the homepage of the <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>CIT Corporation Offering Documents</span></span> section:</p>", "a[href=\"sections/cit-offering-view-more-details.html#offering-document-details-page\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Offering Document Details Page<a class=\"headerlink\" href=\"#offering-document-details-page\" title=\"Link to this heading\">#</a></h2><p>The Offering Document Details page provides comprehensive information about all documents related to the selected CIT Corporation\u2019s offering process.</p>", "a[href=\"sections/cit-offering-status-filter.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Offering Status Filter<a class=\"headerlink\" href=\"#cit-offering-status-filter\" title=\"Link to this heading\">#</a></h1><p id=\"cit-offering-documents-status-filter-subsection\">The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Offering Documents Table</span></span> can be filtered by the following <span class=\"item-blue-reference\"><span class=\"visually-hidden\">Option: </span><span>Status</span></span> options:</p>", "a[href=\"sections/cit-offering-status-filter.html#how-to-filter-by-status\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">How to Filter by Status<a class=\"headerlink\" href=\"#how-to-filter-by-status\" title=\"Link to this heading\">#</a></h2><h3>Status Types<a class=\"headerlink\" href=\"#status-types\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#cit-corporation-offering-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporation Offering Section<a class=\"headerlink\" href=\"#cit-corporation-offering-section\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>CIT Corp Offering</span></span> page helps you track the progress of every offering made by CIT Corporations.</p><p>This section also allows you to:</p>"}
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
