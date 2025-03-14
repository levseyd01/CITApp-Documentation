selector_to_html = {"a[href=\"#cit-onboarding-table-columns-explained\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Onboarding Documents Table: Columns Explained<a class=\"headerlink\" href=\"#cit-onboarding-documents-table-columns-explained\" title=\"Link to this heading\">#</a></h1><p>cit-onboarding-table-columns-explained</p>", "a[href=\"sections/cit-onboarding-status-filter.html#cit-onboarding-status-filter\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Status Filters for Onboarding Documents Table<a class=\"headerlink\" href=\"#status-filters-for-onboarding-documents-table\" title=\"Link to this heading\">#</a></h1><p>The table can be filtered by the following Statuses:</p>", "a[href=\"../ViewMoreDetails/sections/AvailableActions/how-to/how-to-approve-on-off-boarding-documents.html#how-to-approve-uplaoded-documents-pending-approval-tab-example\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to Approve Uploaded Document(s)<a class=\"headerlink\" href=\"#how-to-approve-uploaded-document-s\" title=\"Link to this heading\">#</a></h1><p>Follow the instructions below to approve an uploaded document.</p><p><strong>To Approve an Uploaded Document</strong>:</p>", "a[href=\"#cit-onboarding-documents-table-columns-explained\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Onboarding Documents Table: Columns Explained<a class=\"headerlink\" href=\"#cit-onboarding-documents-table-columns-explained\" title=\"Link to this heading\">#</a></h1><p>cit-onboarding-table-columns-explained</p>", "a[href=\"#cit-corporation-onboarding-documents\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporation Onboarding Documents<a class=\"headerlink\" href=\"#cit-corporation-onboarding-documents\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>CIT Corp Onboarding</span></span> section helps you track each user\u2019s onboarding progress to CIT Corporation.</p><p>This <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Section</span></span> section also allows you to:</p>", "a[href=\"#onboarding-documents-table\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Onboarding Documents Table<a class=\"headerlink\" href=\"#onboarding-documents-table\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Onboarding Documents</span></span> table is what first appears on the homepage of the <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>CIT Corporation Onboarding</span></span> page section:</p>", "a[href=\"sections/cit-onboarding-action-view-more-details.html#cit-onboarding-action-view-more-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Action: View More Details<a class=\"headerlink\" href=\"#action-view-more-details\" title=\"Link to this heading\">#</a></h1><p>To view more details about each document in the onboarding process for the selected CIT Corporation, do the following:</p>"}
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
