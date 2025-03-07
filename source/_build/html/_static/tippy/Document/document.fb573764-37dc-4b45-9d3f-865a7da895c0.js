selector_to_html = {"a[href=\"CITCorpOffering/cit-corp-offering.html#cit-corporation-offering-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">CIT Corporation Offering Section</a><a class=\"headerlink\" href=\"#cit-corporation-offering-section\" title=\"Link to this heading\">#</a></h1><p>The <strong>CIT Corp Offering</strong> section can be used to help track the progress of every offering made.</p><p><strong>This section also allows you to:</strong></p>", "a[href=\"CITCorpOnboarding/cit-corp-onboarding.html#cit-corporation-onboarding-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">CIT Corporation Onboarding Section</a><a class=\"headerlink\" href=\"#cit-corporation-onboarding-section\" title=\"Link to this heading\">#</a></h1><p>The <strong>CIT Corp Onboarding</strong> section can be used to help track the progress of each user onboarding to CIT Corporation.</p><p><strong>This section also allows you to:</strong></p>", "a[href=\"#document\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Document<a class=\"headerlink\" href=\"#document\" title=\"Link to this heading\">#</a></h1><p>The <strong>Document</strong> section of the software is divided into two main parts:</p>"}
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
