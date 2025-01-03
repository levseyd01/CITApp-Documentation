selector_to_html = {"a[href=\"#useful-documents\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Useful Documents<a class=\"headerlink\" href=\"#useful-documents\" title=\"Link to this heading\">#</a></h1><p><strong>Useful Documents:</strong> Cost-Effective Solutions for Stock and Shareholder Management</p><p>Below are sample forms and letters useful for managing your stocks and shares. These documents may be required to transfer shares or to remove restrictions on shares.</p>", "a[href=\"#seo-analysis-and-recommendations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">SEO Analysis and Recommendations:<a class=\"headerlink\" href=\"#seo-analysis-and-recommendations\" title=\"Link to this heading\">#</a></h2><p><strong>Additional Recommendations:</strong></p>"}
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
                placement: 'auto-start', maxWidth: 500, interactive: false, theme: 'material', duration: [200, 100], delay: [200, 500],

            });
        };
    };
    console.log("tippy tips loaded!");
};
