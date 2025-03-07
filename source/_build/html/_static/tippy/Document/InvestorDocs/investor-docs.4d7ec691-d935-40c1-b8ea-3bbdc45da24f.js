selector_to_html = {"a[href=\"#investor-documents\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\">Investor Documents</a><a class=\"headerlink\" href=\"#investor-documents\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Investor Documents Page</span></span> allows you to quickly:</p>", "a[href=\"#search-investor-documents\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">Search Investor Documents</a><a class=\"headerlink\" href=\"#search-investor-documents\" title=\"Link to this heading\">#</a></h3><p>To search for a specific document or investor:</p>", "a[href=\"#table-investor-documents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Table: Investor Documents</a><a class=\"headerlink\" href=\"#table-investor-documents\" title=\"Link to this heading\">#</a></h2><p>The <strong>Investor Documents Table</strong> is the primary interface for accessing investor-related files:</p>", "a[href=\"#filter-by-cit-corporation\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">Filter by CIT Corporation</a><a class=\"headerlink\" href=\"#filter-by-cit-corporation\" title=\"Link to this heading\">#</a></h3><p>You can filter the table by the CIT Corporation:</p>", "a[href=\"#actions-view-details-and-download\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id6\" role=\"doc-backlink\">Actions: View Details and Download</a><a class=\"headerlink\" href=\"#actions-view-details-and-download\" title=\"Link to this heading\">#</a></h3><p>Each row provides two actions:</p>", "a[href=\"#table-columns-explained\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Table Columns Explained</a><a class=\"headerlink\" href=\"#table-columns-explained\" title=\"Link to this heading\">#</a></h3><p>The table contains 7 columns:</p>"}
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
