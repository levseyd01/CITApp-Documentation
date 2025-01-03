selector_to_html = {"a[href=\"#accounts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Accounts<a class=\"headerlink\" href=\"#accounts\" title=\"Link to this heading\">#</a></h1><p>This section has all proofread content related to the <strong>Accounts</strong> section of SOLO 2.0.</p>", "a[href=\"sections/Shareholders_Brokers.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Shareholders &amp; Brokers<a class=\"headerlink\" href=\"#shareholders-brokers\" title=\"Link to this heading\">#</a></h1><p>Can Access From:</p>", "a[href=\"sections/Issuers.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Issuers<a class=\"headerlink\" href=\"#issuers\" title=\"Link to this heading\">#</a></h1><h2>Issuers List<a class=\"headerlink\" href=\"#issuers-list\" title=\"Link to this heading\">#</a></h2>"}
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
