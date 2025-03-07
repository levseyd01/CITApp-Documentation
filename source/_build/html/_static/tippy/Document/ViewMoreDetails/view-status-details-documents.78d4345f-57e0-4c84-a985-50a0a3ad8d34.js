selector_to_html = {"a[href=\"#action-locations\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Action Locations<a class=\"headerlink\" href=\"#action-locations\" title=\"Link to this heading\">#</a></h3><p>Each available action is located in the card associated with the document.</p>", "a[href=\"#view-more-details-documents\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View More Details: Documents<a class=\"headerlink\" href=\"#view-more-details-documents\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>View More Details</span></span> page for both the <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Onboarding Documents</span></span> and <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Offering Documents</span></span> sections provide detailed information about documents related to each process. However, the functionality offered by each is very similar, s</p><p>The <a class=\"reference internal\" href=\"#view-more-details\"><span class=\"xref myst\">View More Details</span></a> action for either page will you to the following page:</p>", "a[href=\"../CITCorpOffering/cit-corp-offering.html#cit-corporation-offering-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">CIT Corporation Offering Section</a><a class=\"headerlink\" href=\"#cit-corporation-offering-section\" title=\"Link to this heading\">#</a></h1><p>The <strong>CIT Corp Offering</strong> section can be used to help track the progress of every offering made.</p><p><strong>This section also allows you to:</strong></p>", "a[href=\"#tab-breakdown\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Tab Breakdown<a class=\"headerlink\" href=\"#tab-breakdown\" title=\"Link to this heading\">#</a></h1><p>The detailed view of the <strong>Documents</strong> page contains 4 tabs to sort through:</p>", "a[href=\"../CITCorpOnboarding/cit-corp-onboarding.html#cit-corporation-onboarding-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">CIT Corporation Onboarding Section</a><a class=\"headerlink\" href=\"#cit-corporation-onboarding-section\" title=\"Link to this heading\">#</a></h1><p>The <strong>CIT Corp Onboarding</strong> section can be used to help track the progress of each user onboarding to CIT Corporation.</p><p><strong>This section also allows you to:</strong></p>", "a[href=\"#how-to-approve-uploaded-document\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">How to Approve Uploaded Document<a class=\"headerlink\" href=\"#how-to-approve-uploaded-document\" title=\"Link to this heading\">#</a></h2><p>Follow the instructions below to approve an uploaded document.</p><p><strong>To Approve an Uploaded Document</strong>:</p>", "a[href=\"#available-actions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Available Actions<a class=\"headerlink\" href=\"#available-actions\" title=\"Link to this heading\">#</a></h2><p>The <strong>Onboarding Document Details</strong> section provides several actions for each type of document, including:</p>", "a[href=\"#card-breakdown\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Card Breakdown<a class=\"headerlink\" href=\"#card-breakdown\" title=\"Link to this heading\">#</a></h1><p>Each card will display information about a document, including:</p>", "a[href=\"#upload-logo-button\"]": "<img src='/_static/solo_app/Profile/upload-logo-section/upload-logo-button.webp' alt='Upload Logo Button' style='width:200px;'>"}
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
