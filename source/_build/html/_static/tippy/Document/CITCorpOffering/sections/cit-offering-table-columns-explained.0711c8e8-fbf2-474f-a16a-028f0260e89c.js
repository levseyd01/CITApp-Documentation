selector_to_html = {"a[href=\"#cit-offering-documents-table-columns-explained\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Offering Documents Table: Columns Explained<a class=\"headerlink\" href=\"#cit-offering-documents-table-columns-explained\" title=\"Link to this heading\">#</a></h1><h2>Offering Documents Table Columns<a class=\"headerlink\" href=\"#offering-documents-table-columns\" title=\"Link to this heading\">#</a></h2><p>There are 8 columns in the <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Offering Documents Table</span></span>:</p>", "a[href=\"#offering-documents-table-columns\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Offering Documents Table Columns<a class=\"headerlink\" href=\"#offering-documents-table-columns\" title=\"Link to this heading\">#</a></h2><p>There are 8 columns in the <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Offering Documents Table</span></span>:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"Document/_static/solo_app/Document/CITCorpOffering/cit-corporations-offering-documents-column-names.webp\" id=\"cit-offering-table-columns\"><img alt=\"Document/_static/solo_app/Document/CITCorpOffering/cit-corporations-offering-documents-column-names.webp\" id=\"cit-offering-table-columns\" loading=\"lazy\" src=\"Document/_static/solo_app/Document/CITCorpOffering/cit-corporations-offering-documents-column-names.webp\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">CIT Offering Documents Table Columns</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
