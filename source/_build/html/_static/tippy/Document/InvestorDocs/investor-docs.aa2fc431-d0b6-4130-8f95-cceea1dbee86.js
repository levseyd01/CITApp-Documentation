selector_to_html = {"a[href=\"#filter-by-cit-corporation\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Filter by CIT Corporation<a class=\"headerlink\" href=\"#filter-by-cit-corporation\" title=\"Link to this heading\">#</a></h3><p>You can filter the table by the CIT Corporation:</p>", "a[href=\"#how-tp-search-investor-documents\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">How tp Search Investor Documents<a class=\"headerlink\" href=\"#how-tp-search-investor-documents\" title=\"Link to this heading\">#</a></h3><p>To search for a specific document or investor:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/investor-documents-homepage-with-location.webp\"><img alt=\"../../_images/investor-documents-homepage-with-location.webp\" loading=\"lazy\" src=\"../../_images/investor-documents-homepage-with-location.webp\" style=\"width: 200%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Investor Documents, Homepage and Location</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#investor-documents\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Investor Documents<a class=\"headerlink\" href=\"#investor-documents\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Investor Documents Page</span></span> allows you to quickly:</p>", "a[href=\"#table-investor-documents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Table: Investor Documents<a class=\"headerlink\" href=\"#table-investor-documents\" title=\"Link to this heading\">#</a></h2><p>The <strong>Investor Documents Table</strong> is the primary interface for accessing investor-related files:</p>", "a[href=\"#table-columns-explained\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Table Columns Explained<a class=\"headerlink\" href=\"#table-columns-explained\" title=\"Link to this heading\">#</a></h3><p>The table contains 7 columns:</p>"}
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
