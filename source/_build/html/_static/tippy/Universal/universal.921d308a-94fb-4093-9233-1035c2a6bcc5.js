selector_to_html = {"a[href=\"#extras\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Extras<a class=\"headerlink\" href=\"#extras\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#user-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">User Details<a class=\"headerlink\" href=\"#user-details\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#commmon\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Commmon<a class=\"headerlink\" href=\"#commmon\" title=\"Link to this heading\">#</a></h1><p>This section is meant to house all of the information needed to navigate through portions of the App that come up most frequently.</p>", "a[href=\"#navigation-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Navigation Section<a class=\"headerlink\" href=\"#navigation-section\" title=\"Link to this heading\">#</a></h1><h2>Documents<a class=\"headerlink\" href=\"#documents\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#documents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Documents<a class=\"headerlink\" href=\"#documents\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#edit-permissions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Edit Permissions<a class=\"headerlink\" href=\"#edit-permissions\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../Document/ViewMoreDetails/view-status-details-documents.html#onboarding-offering-document-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View More Details: Documents<a class=\"headerlink\" href=\"#view-more-details-documents\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>View More Details</span></span> pages for the <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Onboarding Documents</span></span> and <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Offering Documents</span></span> sections provide similar functionality. The instructions provided here apply to both sections.</p><p>The <a class=\"reference internal\" href=\"#view-more-details\"><span class=\"xref myst\">View More Details</span></a> action for either page will you to the following page:</p>"}
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
