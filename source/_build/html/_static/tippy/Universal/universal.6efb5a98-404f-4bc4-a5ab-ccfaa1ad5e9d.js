selector_to_html = {"a[href=\"#extras\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">Extras</a><a class=\"headerlink\" href=\"#extras\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#navigation-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\">Navigation Section</a><a class=\"headerlink\" href=\"#navigation-section\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#user-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">User Details</a><a class=\"headerlink\" href=\"#user-details\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<a class=\"reference internal\" href=\"#navigation-section\" id=\"id1\">Navigation Section</a>", "a[href=\"../Document/ViewMoreDetails/view-status-details-documents.html#onboarding-offering-document-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View More Details: Documents<a class=\"headerlink\" href=\"#view-more-details-documents\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>View More Details</span></span> pages for the <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Onboarding Documents</span></span> and <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Offering Documents</span></span> sections provide similar functionality. The instructions provided here apply to both sections.</p><p>The <a class=\"reference internal\" href=\"#view-more-details\"><span class=\"xref myst\">View More Details</span></a> action for either page will you to the following page:</p>", "a[href=\"#id2\"]": "<a class=\"reference internal\" href=\"#documents\" id=\"id2\">Documents</a>", "a[href=\"#id4\"]": "<a class=\"reference internal\" href=\"#user-details\" id=\"id4\">User Details</a>", "a[href=\"#id5\"]": "<a class=\"reference internal\" href=\"#extras\" id=\"id5\">Extras</a>", "a[href=\"#id3\"]": "<a class=\"reference internal\" href=\"#edit-permissions\" id=\"id3\">Edit Permissions</a>", "a[href=\"#commmon\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Commmon<a class=\"headerlink\" href=\"#commmon\" title=\"Link to this heading\">#</a></h1><p>This section is meant to house all of the information needed to navigate through portions of the App that come up most frequently.</p>", "a[href=\"#documents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Documents</a><a class=\"headerlink\" href=\"#documents\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#edit-permissions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Edit Permissions</a><a class=\"headerlink\" href=\"#edit-permissions\" title=\"Link to this heading\">#</a></h2>"}
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
