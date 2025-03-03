selector_to_html = {"a[href=\"sponsorship-organization/sponsorship-organizations.html#sponsorship-organization-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Sponsorship Organizations<a class=\"headerlink\" href=\"#sponsorship-organizations\" title=\"Link to this heading\">#</a></h1><p>The <strong>Sponsorship Organizations</strong> section allows you to:</p>", "a[href=\"investors/investors.html#investors-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Investors<a class=\"headerlink\" href=\"#investors\" title=\"Link to this heading\">#</a></h1><p>The <strong>Investors</strong> tab takes you to the <a class=\"tippyAnchor reference external\" href=\"https://www.stockofferingsolutions.com/Account/Login\">Stock Offering Solutions Login Page</a>.</p>", "a[href=\"#account\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Account<a class=\"headerlink\" href=\"#account\" title=\"Link to this heading\">#</a></h1><p>The <strong>Account</strong> section allows you to edit the following:</p>", "a[href=\"cit-corporations/cit-corporations.html#cit-corporations-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT Corporations<a class=\"headerlink\" href=\"#cit-corporations\" title=\"Link to this heading\">#</a></h1><p>The <strong>CIT Corporations</strong> section allows you to to:</p>"}
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
