selector_to_html = {"a[href=\"CITCorpOnboarding/cit-corp-onboarding.html#cit-corporation-onboarding-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporation Onboarding Documents<a class=\"headerlink\" href=\"#cit-corporation-onboarding-documents\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>CIT Corp Onboarding</span></span> section helps you track each user\u2019s onboarding progress to CIT Corporation.</p><p>This <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>Section</span></span> section also allows you to:</p>", "a[href=\"#document\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Document<a class=\"headerlink\" href=\"#document\" title=\"Link to this heading\">#</a></h1><p>The <strong>Document</strong> section of the software is divided into two main parts:</p>"}
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
