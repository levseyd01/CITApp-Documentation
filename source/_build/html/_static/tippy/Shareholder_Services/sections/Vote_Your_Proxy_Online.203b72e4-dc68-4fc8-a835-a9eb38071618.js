selector_to_html = {"a[href=\"#proxy-voting\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Proxy Voting<a class=\"headerlink\" href=\"#proxy-voting\" title=\"Link to this heading\">#</a></h1><p>Proxy Voting\nSafe and Secure Stock and Shareholder Management Solutions</p><p>Here, you can easily vote using any proxy cards received via mail or email.</p>", "a[href=\"#seo-analysis-and-recommendations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">SEO Analysis and Recommendations:<a class=\"headerlink\" href=\"#seo-analysis-and-recommendations\" title=\"Link to this heading\">#</a></h2><p>The <strong>Proxy Voting</strong> section of the Transfer Online\u2122 website provides users with a functionality to vote using proxy cards received via mail or email. Let\u2019s analyze and offer recommendations following the provided style guide.</p>", "a[href=\"#summary-and-additional-recommendations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Summary and Additional Recommendations:<a class=\"headerlink\" href=\"#summary-and-additional-recommendations\" title=\"Link to this heading\">#</a></h2><p>By optimizing the \u201cProxy Voting\u201d section with detailed title tags, meta descriptions, structured content, and keyword integration, Transfer Online\u2122 can significantly improve its search engine visibility. Additionally, emphasizing security and ease of use in the content can build trust with users. Reviewing the mobile optimization status and readability on various devices is crucial to cater to the diverse needs of shareholders. Finally, considering the addition of a short video tutorial on how to vote might further increase user engagement and understanding of the process.</p>", "a[href=\"#grammar-and-style-proofreading-recommendations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Grammar and Style Proofreading Recommendations:<a class=\"headerlink\" href=\"#grammar-and-style-proofreading-recommendations\" title=\"Link to this heading\">#</a></h2>"}
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
