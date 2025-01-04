selector_to_html = {"a[href=\"sections/Dashboard.html#manage-issuers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Manage Issuers<a class=\"headerlink\" href=\"#manage-issuers\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/OTC_Markets.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">OTC Markets<a class=\"headerlink\" href=\"#otc-markets\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Dashboard.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dashboard<a class=\"headerlink\" href=\"#dashboard\" title=\"Link to this heading\">#</a></h1><h2>Manage Issuers<a class=\"headerlink\" href=\"#manage-issuers\" title=\"Link to this heading\">#</a></h2>", "a[href=\"sections/General.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">General<a class=\"headerlink\" href=\"#general\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/ActivityLogs.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Activity Logs<a class=\"headerlink\" href=\"#activity-logs\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Logo.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Logo<a class=\"headerlink\" href=\"#logo\" title=\"Link to this heading\">#</a></h1><p>This is the Logo section of for SOLO 2.0.</p>", "a[href=\"#dashboard\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dashboard<a class=\"headerlink\" href=\"#dashboard\" title=\"Link to this heading\">#</a></h1><p><img alt=\"img.png\" src=\"../_images/img.png\"/></p>", "a[href=\"sections/Mailing_Billing.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Mailing/Billing Address<a class=\"headerlink\" href=\"#mailing-billing-address\" title=\"Link to this heading\">#</a></h1>"}
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
                placement: 'right', maxWidth: 500, interactive: true, delay: [200, 100], duration: [200, 100],

            });
        };
    };
    console.log("tippy tips loaded!");
};
