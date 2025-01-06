selector_to_html = {"a[href=\"#shareholders-services\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Shareholders Services<a class=\"headerlink\" href=\"#shareholders-services\" title=\"Link to this heading\">#</a></h1><p>Excellent customer service for every transaction, every time.</p><p>Join Transfer Online\u2122 today to simplify and empower your personal equity management.</p>", "a[href=\"#recommendations-for-further-improvements\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Recommendations for Further Improvements:<a class=\"headerlink\" href=\"#recommendations-for-further-improvements\" title=\"Link to this heading\">#</a></h2><p>By implementing these SEO and content enhancements, Transfer Online\u2122 can significantly improve its search engine visibility, engage better with its audience, and deliver a superior user experience.</p>", "a[href=\"#seo-analysis-and-recommendations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">SEO Analysis and Recommendations<a class=\"headerlink\" href=\"#seo-analysis-and-recommendations\" title=\"Link to this heading\">#</a></h2>"}
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
