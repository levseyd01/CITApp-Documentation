selector_to_html = {"a[href=\"#pending-approval-tab-available-actions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Pending Approval Tab: Available Actions<a class=\"headerlink\" href=\"#pending-approval-tab-available-actions\" title=\"Link to this heading\">#</a></h1><p>The  cards contain <a class=\"reference internal\" href=\"../actions-explained.html#all-possible-actions\"><span class=\"std std-ref\">Available Actions</span></a> as can be seen:</p>", "a[href=\"../actions-explained.html#all-possible-actions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Available Actions<a class=\"headerlink\" href=\"#available-actions\" title=\"Link to this heading\">#</a></h1><p>The <strong>Onboarding Document Details</strong> section provides several actions for each type of document, including:</p>"}
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
