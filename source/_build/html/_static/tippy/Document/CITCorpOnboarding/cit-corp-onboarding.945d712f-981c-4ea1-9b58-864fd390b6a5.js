selector_to_html = {"a[href=\"#cit-corporation-onboarding-documents\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporation Onboarding Documents<a class=\"headerlink\" href=\"#cit-corporation-onboarding-documents\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>CIT Corp Onboarding</span></span> section helps you track each user\u2019s onboarding progress to CIT Corporation.</p><p>This <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Section</span></span> section also allows you to:</p>", "a[href=\"#onboarding-documents-table\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Onboarding Documents Table<a class=\"headerlink\" href=\"#onboarding-documents-table\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Onboarding Documents</span></span> table is what first appears on the homepage of the <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>CIT Corporation Onboarding</span></span> page section:</p>", "a[href=\"#cit-onboarding-documents-table-columns-explained\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Onboarding Documents Table: Columns Explained<a class=\"headerlink\" href=\"#cit-onboarding-documents-table-columns-explained\" title=\"Link to this heading\">#</a></h1><p>cit-onboarding-table-columns-explained</p>", "a[href=\"#cit-onboarding-table-columns-explained\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Onboarding Documents Table: Columns Explained<a class=\"headerlink\" href=\"#cit-onboarding-documents-table-columns-explained\" title=\"Link to this heading\">#</a></h1><p>cit-onboarding-table-columns-explained</p>"}
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
