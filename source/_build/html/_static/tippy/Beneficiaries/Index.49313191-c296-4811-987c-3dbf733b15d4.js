selector_to_html = {"a[href=\"#adding-a-beneficiary\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Adding a Beneficiary<a class=\"headerlink\" href=\"#adding-a-beneficiary\" title=\"Link to this heading\">#</a></h1><p>To <strong>Add a Beneficiary:</strong></p>", "a[href=\"#beneficiaries-list\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Beneficiaries List<a class=\"headerlink\" href=\"#beneficiaries-list\" title=\"Link to this heading\">#</a></h1><p>The <strong>Beneficiaries List</strong> section displays an overview of the company\u2019s beneficiaries.</p><p>The list contains each beneficiary\u2019s:</p>", "a[href=\"../Universal/logos.html#new-beneficiary-button\"]": "<img alt=\"../_static/solo_app/Beneficiaries/new-beneficiary.png\" class=\"align-center\" id=\"new-beneficiary-button\" src=\"../_static/solo_app/Beneficiaries/new-beneficiary.png\" style=\"width: 200px;\"/>"}
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
