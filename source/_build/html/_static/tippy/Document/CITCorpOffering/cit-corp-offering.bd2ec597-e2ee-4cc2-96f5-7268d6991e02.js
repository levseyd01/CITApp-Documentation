selector_to_html = {"a[href=\"#table-columns-explained\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">Table Columns Explained</a><a class=\"headerlink\" href=\"#table-columns-explained\" title=\"Link to this heading\">#</a></h3><p>There are 8 columns in the <strong>Offering Documents Table</strong>:</p>", "a[href=\"../ViewMoreDetails/Documents/view-status-details-documents.html#onboarding-offering-document-details\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">View More Details: Documents<a class=\"headerlink\" href=\"#view-more-details-documents\" title=\"Link to this heading\">#</a></h1><p>The <strong>View More Details</strong> page for both the <strong>Onboarding Documents</strong> and <strong>Offering Documents</strong> pages provide detailed information about documents related to each process.</p><p>The <a class=\"reference internal\" href=\"#view-more-details\"><span class=\"xref myst tippyAnchor\">View More Details</span></a> action for either page will you to the following page:</p>", "a[href=\"#table-offering-documents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Table: Offering Documents</a><a class=\"headerlink\" href=\"#table-offering-documents\" title=\"Link to this heading\">#</a></h2><p>The <strong>Offering Documents Table</strong> is what first appears on the homepage of the <strong>CIT Corporation Offering Docunents</strong> section:</p>", "a[href=\"#cit-corporation-offering-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">CIT Corporation Offering Section</a><a class=\"headerlink\" href=\"#cit-corporation-offering-section\" title=\"Link to this heading\">#</a></h1><p>The <strong>CIT Corp Offering</strong> section can be used to help track the progress of every offering made.</p><p><strong>This section also allows you to:</strong></p>", "a[href=\"#status-filter\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Status Filter<a class=\"headerlink\" href=\"#status-filter\" title=\"Link to this heading\">#</a></h4><p>The table can be filtered by the following Statuses:</p>", "a[href=\"#action-view-more-details\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">Action: View More Details</a><a class=\"headerlink\" href=\"#action-view-more-details\" title=\"Link to this heading\">#</a></h3><p>To view more details about each document in the Offering process for the selected CIT Corporation, do the following:</p>", "a[href=\"#view-more-icon\"]": "<img src='/en/stable-edit/_static/solo_app/Universal/icons/view-more-icon.jpeg' alt='View More Icon' style='width:200px;'>"}
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
