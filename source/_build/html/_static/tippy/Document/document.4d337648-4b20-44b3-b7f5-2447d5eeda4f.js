selector_to_html = {"a[href=\"#document\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Document<a class=\"headerlink\" href=\"#document\" title=\"Link to this heading\">#</a></h1><p>The <strong>Document</strong> section of the software is divided into two main parts:</p>", "a[href=\"CITCorpOffering/cit-corp-offering.html#cit-corporation-offering-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporation Offering Documents<a class=\"headerlink\" href=\"#cit-corporation-offering-documents\" title=\"Link to this heading\">#</a></h1><p>The <strong>CIT Corporation Offering</strong> section helps users manage and track all documents related to any Offering.</p>"}
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
