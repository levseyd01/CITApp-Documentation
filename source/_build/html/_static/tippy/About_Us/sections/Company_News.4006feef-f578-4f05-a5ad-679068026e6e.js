selector_to_html = {"a[href=\"#proofread-company-news\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Proofread: Company News<a class=\"headerlink\" href=\"#proofread-company-news\" title=\"Link to this heading\">#</a></h2><p>(Where is the news?)</p><p>Explore our latest company news, including press releases, market updates, and announcements.</p>", "a[href=\"#company-news\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Company News<a class=\"headerlink\" href=\"#company-news\" title=\"Link to this heading\">#</a></h1><h2>Proofread: Company News<a class=\"headerlink\" href=\"#proofread-company-news\" title=\"Link to this heading\">#</a></h2><p>(Where is the news?)</p><p>Explore our latest company news, including press releases, market updates, and announcements.</p>"}
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
