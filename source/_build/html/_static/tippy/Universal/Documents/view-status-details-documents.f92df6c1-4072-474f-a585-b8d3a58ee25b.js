selector_to_html = {"a[href=\"#available-actions-upload-pending\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Available Actions: Upload Pending<a class=\"headerlink\" href=\"#available-actions-upload-pending\" title=\"Link to this heading\">#</a></h4><p>The <strong>Upload Pending</strong> cards contain only two actions:</p>", "a[href=\"#action-locations\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Action Locations<a class=\"headerlink\" href=\"#action-locations\" title=\"Link to this heading\">#</a></h3><p>Each available action is located in the card associated with the document.</p>", "a[href=\"#view-more-details-cit-corporation-onboarding-offering-documents\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View More Details: CIT Corporation Onboarding/Offering Documents<a class=\"headerlink\" href=\"#view-more-details-cit-corporation-onboarding-offering-documents\" title=\"Link to this heading\">#</a></h1><p>The <strong>View More Details</strong> page for both the <strong>Onboarding Documents</strong> and <strong>Offering Documents</strong> pages provide detailed information about documents related to each process.</p><p>The <a class=\"reference internal\" href=\"#view-more-details\"><span class=\"xref myst tippyAnchor\">View More Details</span></a> action for either page will you to the following page:</p>", "a[href=\"#available-actions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Available Actions<a class=\"headerlink\" href=\"#available-actions\" title=\"Link to this heading\">#</a></h2><p>The <strong>Onboarding Document Details</strong> section provides several actions for each type of document, including:</p>", "a[href=\"#card-breakdown\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Card Breakdown<a class=\"headerlink\" href=\"#card-breakdown\" title=\"Link to this heading\">#</a></h1><p>Each card will display information about a document, including:</p>", "a[href=\"#tab-breakdown\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Tab Breakdown<a class=\"headerlink\" href=\"#tab-breakdown\" title=\"Link to this heading\">#</a></h1><p>The detailed view of the <strong>Documents</strong> page contains 4 tabs to sort through:</p>", "a[href=\"#available-actions-completed\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Available Actions: Completed<a class=\"headerlink\" href=\"#available-actions-completed\" title=\"Link to this heading\">#</a></h4>", "a[href=\"#available-actions-pending-approval\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Available Actions: Pending Approval<a class=\"headerlink\" href=\"#available-actions-pending-approval\" title=\"Link to this heading\">#</a></h4><p>The <strong>Pending Approval</strong> contains <a class=\"tippyAnchor reference internal\" href=\"#all-possible-actions\">all possible actions</a> as can be seen:</p>"}
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
