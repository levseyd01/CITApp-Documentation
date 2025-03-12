selector_to_html = {"a[href=\"#action-view-more-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Action: View More Details<a class=\"headerlink\" href=\"#action-view-more-details\" title=\"Link to this heading\">#</a></h1><p>To view more details about each document in the onboarding process for the selected CIT Corporation, do the following:</p>", "a[href=\"#onboarding-document-details-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Onboarding Document Details Page<a class=\"headerlink\" href=\"#onboarding-document-details-page\" title=\"Link to this heading\">#</a></h1><p>The Onboarding Document Details page provides comprehensive information about all documents related to the selected CIT Corporation\u2019s onboarding process.</p>", "a[href=\"../../ViewMoreDetails/view-status-details-documents.html#onboarding-offering-document-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View More Details: Documents<a class=\"headerlink\" href=\"#view-more-details-documents\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>View More Details</span></span> pages for the <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Onboarding Documents</span></span> and <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Offering Documents</span></span> sections provide similar functionality. The instructions provided here apply to both sections.</p><p>The <a class=\"reference internal\" href=\"#view-more-details\"><span class=\"xref myst\">View More Details</span></a> action for either page will you to the following page:</p>", "a[href=\"#view-more-icon\"]": "<img src='/en/stable-edit/_static/solo_app/Universal/icons/view-more-icon.webp' alt='View More Icon' style='width:200px;'>"}
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
