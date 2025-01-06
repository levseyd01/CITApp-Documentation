selector_to_html = {"a[href=\"sections/Dividend_Details.html#documents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Documents<a class=\"headerlink\" href=\"#documents\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/Split_Details.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Split Details<a class=\"headerlink\" href=\"#split-details\" title=\"Link to this heading\">#</a></h1><h2>Summary and Invoice<a class=\"headerlink\" href=\"#summary-and-invoice\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/Split_Details.html#summary-and-invoice\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Summary and Invoice<a class=\"headerlink\" href=\"#summary-and-invoice\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/Split_Details.html#fractional-shares-cash-payout\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Fractional Shares Cash Payout<a class=\"headerlink\" href=\"#fractional-shares-cash-payout\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#corporate-actions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Corporate Actions<a class=\"headerlink\" href=\"#corporate-actions\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Dividend_Details.html#cash-distribution\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Cash Distribution<a class=\"headerlink\" href=\"#cash-distribution\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/Dividend.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dividend<a class=\"headerlink\" href=\"#dividend\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Reverse_Split.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Reverse Split<a class=\"headerlink\" href=\"#reverse-split\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Split_Details.html#documents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Documents<a class=\"headerlink\" href=\"#documents\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/Dividend_Details.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dividend Details<a class=\"headerlink\" href=\"#dividend-details\" title=\"Link to this heading\">#</a></h1><h2>Cash Distribution<a class=\"headerlink\" href=\"#cash-distribution\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/Forward_Split.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Forward Split<a class=\"headerlink\" href=\"#forward-split\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Split_Details.html#split-report\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Split Report<a class=\"headerlink\" href=\"#split-report\" title=\"Link to this heading\">#</a></h2>"}
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
