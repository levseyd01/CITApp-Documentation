selector_to_html = {"a[href=\"../../ViewMoreDetails/view-status-details-documents.html#onboarding-offering-document-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View More Details: Documents<a class=\"headerlink\" href=\"#view-more-details-documents\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>View More Details</span></span> pages for the <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Onboarding Documents</span></span> and <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Offering Documents</span></span> sections provide similar functionality. The instructions provided here apply to both sections.</p><p>The <a class=\"reference internal\" href=\"#view-more-details\"><span class=\"xref myst\">View More Details</span></a> action for either page will you to the following page:</p>", "a[href=\"#view-more-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View More Details<a class=\"headerlink\" href=\"#view-more-details\" title=\"Link to this heading\">#</a></h1><h2>View More Details Overview<a class=\"headerlink\" href=\"#view-more-details-overview\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#view-more-details-action\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">View More Details Action<a class=\"headerlink\" href=\"#view-more-details-action\" title=\"Link to this heading\">#</a></h2><p>To view more details about each document in the Offering process for the selected CIT Corporation, do the following:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"Document/_static/solo_app/Document/CITCorpOffering/cit-corporations-offering-documents-view-details-location.webp\" id=\"cit-offering-view-more-icon\"><img alt=\"Document/_static/solo_app/Document/CITCorpOffering/cit-corporations-offering-documents-view-details-location.webp\" id=\"cit-offering-view-more-icon\" loading=\"lazy\" src=\"Document/_static/solo_app/Document/CITCorpOffering/cit-corporations-offering-documents-view-details-location.webp\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">View More Details Icon Location</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#view-more-details-overview\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">View More Details Overview<a class=\"headerlink\" href=\"#view-more-details-overview\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#offering-document-details-page\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Offering Document Details Page<a class=\"headerlink\" href=\"#offering-document-details-page\" title=\"Link to this heading\">#</a></h2><p>The Offering Document Details page provides comprehensive information about all documents related to the selected CIT Corporation\u2019s offering process.</p>"}
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
