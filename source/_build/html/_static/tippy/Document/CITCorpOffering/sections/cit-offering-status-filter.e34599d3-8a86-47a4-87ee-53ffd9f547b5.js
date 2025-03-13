selector_to_html = {"a[href=\"#status-types\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Status Types<a class=\"headerlink\" href=\"#status-types\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#status-filter-options\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Status Filter Options<a class=\"headerlink\" href=\"#status-filter-options\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Offering Documents Table</span></span> can be filtered by the following <span class=\"item-blue-reference\"><span class=\"visually-hidden\">Option: </span><span>Status</span></span> options:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"Document/_static/solo_app/Document/universal/StatusDropdowns/all-pending-complete-status-dropdown-expaned-universal.webp\" id=\"cit-offering-status-dropdown\"><img alt=\"Document/_static/solo_app/Document/universal/StatusDropdowns/all-pending-complete-status-dropdown-expaned-universal.webp\" id=\"cit-offering-status-dropdown\" loading=\"lazy\" src=\"Document/_static/solo_app/Document/universal/StatusDropdowns/all-pending-complete-status-dropdown-expaned-universal.webp\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Status Dropdown Options</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#how-to-filter-by-status\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">How to Filter by Status<a class=\"headerlink\" href=\"#how-to-filter-by-status\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"Document/_static/solo_app/Document/CITCorpOffering/cit-corporations-offering-documents-status-location.webp\" id=\"cit-offering-status-location\"><img alt=\"Document/_static/solo_app/Document/CITCorpOffering/cit-corporations-offering-documents-status-location.webp\" id=\"cit-offering-status-location\" loading=\"lazy\" src=\"Document/_static/solo_app/Document/CITCorpOffering/cit-corporations-offering-documents-status-location.webp\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Status Filter Location</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#cit-offering-status-filter\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Offering Status Filter<a class=\"headerlink\" href=\"#cit-offering-status-filter\" title=\"Link to this heading\">#</a></h1><h2>Status Filter Options<a class=\"headerlink\" href=\"#status-filter-options\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Offering Documents Table</span></span> can be filtered by the following <span class=\"item-blue-reference\"><span class=\"visually-hidden\">Option: </span><span>Status</span></span> options:</p>"}
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
