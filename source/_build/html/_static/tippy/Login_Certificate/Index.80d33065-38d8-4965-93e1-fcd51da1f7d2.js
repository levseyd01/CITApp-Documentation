selector_to_html = {"a[href=\"sections/Add_Transfer.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add Transfer<a class=\"headerlink\" href=\"#add-transfer\" title=\"Link to this heading\">#</a></h1><h2>Transfer From Certificates<a class=\"headerlink\" href=\"#transfer-from-certificates\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/Add_Transfer.html#medallion-stamps\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Medallion Stamps<a class=\"headerlink\" href=\"#medallion-stamps\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/Dashboard_Navigation.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dashboard Navigation<a class=\"headerlink\" href=\"#dashboard-navigation\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Add_Transfer.html#transfer-from-certificates\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Transfer From Certificates<a class=\"headerlink\" href=\"#transfer-from-certificates\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/Add_Reserved_Shares_Issuance.html#information-input\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Information Input<a class=\"headerlink\" href=\"#information-input\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#dashboard\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dashboard<a class=\"headerlink\" href=\"#dashboard\" title=\"Link to this heading\">#</a></h1><p>This section should help the user navigate through the <strong>Dashboard</strong> section of the CIT App.</p><p><img alt=\"img.png\" src=\"../_images/img1.png\"/></p>", "a[href=\"sections/Add_Retirement.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add Retirement<a class=\"headerlink\" href=\"#add-retirement\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Add_Reserved_Shares_Issuance.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add Reserved Shares Issuance<a class=\"headerlink\" href=\"#add-reserved-shares-issuance\" title=\"Link to this heading\">#</a></h1><h2>Information Input<a class=\"headerlink\" href=\"#information-input\" title=\"Link to this heading\">#</a></h2>"}
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
