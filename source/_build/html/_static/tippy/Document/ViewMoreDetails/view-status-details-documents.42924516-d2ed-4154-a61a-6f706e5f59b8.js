selector_to_html = {"a[href=\"#available-actions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Available Actions<a class=\"headerlink\" href=\"#available-actions\" title=\"Link to this heading\">#</a></h2><p>Each <span class=\"item-blue-reference\"><span class=\"visually-hidden\">Option: </span><span>Status</span></span> has its own set of available actions:</p>", "a[href=\"#view-more-details-documents\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View More Details: Documents<a class=\"headerlink\" href=\"#view-more-details-documents\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>View More Details</span></span> pages for the <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Onboarding Documents</span></span> and <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Offering Documents</span></span> sections provide similar functionality. The instructions provided here apply to both sections.</p><p>The <a class=\"reference internal\" href=\"#view-more-details\"><span class=\"xref myst\">View More Details</span></a> action for either page will you to the following page:</p>", "a[href=\"#layout-explanation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Layout Explanation<a class=\"headerlink\" href=\"#layout-explanation\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../CITCorpOnboarding/cit-corp-onboarding.html#cit-corporation-onboarding-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporation Onboarding Documents<a class=\"headerlink\" href=\"#cit-corporation-onboarding-documents\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>CIT Corp Onboarding</span></span> section helps you track each user\u2019s onboarding progress to CIT Corporation.</p><p>This <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Section</span></span> section also allows you to:</p>", "a[href=\"sections/AvailableActions/Tab/completed-documents.html#available-actons-completed-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Completed Tab: Available Actions<a class=\"headerlink\" href=\"#completed-tab-available-actions\" title=\"Link to this heading\">#</a></h1><p>The  cards contain every action besides the <a class=\"reference internal\" href=\"#upload-logo-button\"><span class=\"xref myst\">Approve Uploaded Document</span></a> action:</p>"}
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
