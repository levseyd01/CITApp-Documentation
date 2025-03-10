selector_to_html = {"a[href=\"../ViewMoreDetails/sections/AvailableActions/how-to/how-to-approve-on-off-boarding-documents.html#how-to-approve-uplaoded-documents-pending-approval-tab-example\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to Approve Uploaded Document(s)<a class=\"headerlink\" href=\"#how-to-approve-uploaded-document-s\" title=\"Link to this heading\">#</a></h1><p>Follow the instructions below to approve an uploaded document.</p><p><strong>To Approve an Uploaded Document</strong>:</p>", "a[href=\"#cit-corporation-onboarding-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporation Onboarding Page<a class=\"headerlink\" href=\"#cit-corporation-onboarding-page\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>CIT Corp Onboarding</span></span> page helps you track each user\u2019s onboarding progress to CIT Corporation.</p><p>This section also allows you to:</p>", "a[href=\"#table-onboarding-documents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Table: Onboarding Documents<a class=\"headerlink\" href=\"#table-onboarding-documents\" title=\"Link to this heading\">#</a></h2><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Onboarding Documents Table</span></span> is what first appears on the homepage of the <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>CIT Corporation Onboarding</span></span> section:</p>", "a[href=\"../../original-cit-corp-onboarding.html#cit-onboarding-table-columns-explained\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Table Columns Explained</a><a class=\"headerlink\" href=\"#table-columns-explained\" title=\"Link to this heading\">#</a></h3><p>There are 8 columns in the <strong>Onboarding Documents Table</strong>:</p>"}
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
