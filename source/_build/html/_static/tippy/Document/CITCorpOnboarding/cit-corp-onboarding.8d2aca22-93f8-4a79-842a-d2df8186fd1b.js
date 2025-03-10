selector_to_html = {"a[href=\"sections/cit-onboarding-table-columns-explained.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Onboarding Documents Table: Columns Explained<a class=\"headerlink\" href=\"#cit-onboarding-documents-table-columns-explained\" title=\"Link to this heading\">#</a></h1><p>There are 8 columns in the <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Onboarding Documents Table:</span></span></p>", "a[href=\"sections/cit-onboarding-status-filter.html#cit-onboarding-status-filter\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Status Filters for Onboarding Documents Table<a class=\"headerlink\" href=\"#status-filters-for-onboarding-documents-table\" title=\"Link to this heading\">#</a></h1><p>The table can be filtered by the following Statuses:</p>", "a[href=\"#cit-corporation-onboarding-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporation Onboarding Page<a class=\"headerlink\" href=\"#cit-corporation-onboarding-page\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>CIT Corp Onboarding</span></span> page helps you track each user\u2019s onboarding progress to CIT Corporation.</p><p>This section also allows you to:</p>", "a[href=\"sections/cit-onboarding-action-view-more-details.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Action: View More Details<a class=\"headerlink\" href=\"#action-view-more-details\" title=\"Link to this heading\">#</a></h1><p>To view more details about each document in the onboarding process for the selected CIT Corporation, do the following:</p>", "a[href=\"#table-onboarding-documents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Table: Onboarding Documents<a class=\"headerlink\" href=\"#table-onboarding-documents\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Onboarding Documents Table</span></span> is what first appears on the homepage of the <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>CIT Corporation Onboarding</span></span> section:</p>", "a[href=\"sections/cit-onboarding-status-filter.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Status Filters for Onboarding Documents Table<a class=\"headerlink\" href=\"#status-filters-for-onboarding-documents-table\" title=\"Link to this heading\">#</a></h1><p>The table can be filtered by the following Statuses:</p>", "a[href=\"sections/cit-onboarding-action-view-more-details.html#onboarding-document-details-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Onboarding Document Details Page<a class=\"headerlink\" href=\"#onboarding-document-details-page\" title=\"Link to this heading\">#</a></h1><p>The Onboarding Document Details page provides comprehensive information about all documents related to the selected CIT Corporation\u2019s onboarding process.</p>"}
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
