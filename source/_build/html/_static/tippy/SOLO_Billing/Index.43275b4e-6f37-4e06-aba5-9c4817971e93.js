selector_to_html = {"a[href=\"sections/Monthly_Statements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Monthly Statements<a class=\"headerlink\" href=\"#monthly-statements\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Credit_Cards.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Credit Cards<a class=\"headerlink\" href=\"#credit-cards\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Payments.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Payments<a class=\"headerlink\" href=\"#payments\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Outstanding_Invoices_Statement.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">SOLO Outstanding Invoices Statement<a class=\"headerlink\" href=\"#solo-outstanding-invoices-statement\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Invoices.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Invoices<a class=\"headerlink\" href=\"#invoices\" title=\"Link to this heading\">#</a></h1>", "a[href=\"sections/Outstanding_Invoices_Statement.html#checklist\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Checklist<a class=\"headerlink\" href=\"#checklist\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#solo-billing\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">SOLO Billing<a class=\"headerlink\" href=\"#solo-billing\" title=\"Link to this heading\">#</a></h1><p>This section includes all the tabs located on the <strong>SOLO Billing</strong> page.</p>"}
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
