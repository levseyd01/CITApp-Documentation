selector_to_html = {"a[href=\"#cash-payout\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Cash Payout<a class=\"headerlink\" href=\"#cash-payout\" title=\"Link to this heading\">#</a></h1><p>This section has all proofread content related to the <strong>Cash Payout</strong> section for SOLO 2.0.</p>", "a[href=\"sections/BuyBack.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">BuyBack<a class=\"headerlink\" href=\"#buyback\" title=\"Link to this heading\">#</a></h1><h2>Update Payment<a class=\"headerlink\" href=\"#update-payment\" title=\"Link to this heading\">#</a></h2>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
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
