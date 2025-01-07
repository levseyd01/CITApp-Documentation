selector_to_html = {"a[href=\"#beneficiaries\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Beneficiaries<a class=\"headerlink\" href=\"#beneficiaries\" title=\"Link to this heading\">#</a></h1><p>The <strong>Beneficiaries List</strong> section displays an overview of the company\u2019s beneficiaries.</p><p>The list contains each beneficiary\u2019s:</p>", "a[href=\"#adding-a-beneficiary\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Adding a Beneficiary<a class=\"headerlink\" href=\"#adding-a-beneficiary\" title=\"Link to this heading\">#</a></h2><p>To <strong>Add a Beneficiary:</strong></p>", "a[href=\"#other-actions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Other Actions<a class=\"headerlink\" href=\"#other-actions\" title=\"Link to this heading\">#</a></h2><p>You can find the <strong>Actions</strong> section just below the <a class=\"reference internal\" href=\"#new-beneficiary-button\"><span class=\"xref myst\">New Beneficiary</span></a>:</p>", "a[href=\"#new-beneficiary-button\"]": "<img src='/_static/solo_app/Beneficiaries/new-beneficiary.png' alt='New Beneficiary Button' style='width:200px;'>", "a[href=\"#delete-icon\"]": "<img src='/_static/solo_app/Universal/icons/delete-icon.png' alt='Delete Icon' style='width:200px;'>", "a[href=\"#view-more-icon\"]": "<img src='/_static/solo_app/Universal/icons/view-more-icon.png' alt='View More Icon' style='width:200px;'>"}
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
                onShow(instance) {MathJax.typesetPromise([instance.popper]).then(() => {});},
            });
        };
    };
    console.log("tippy tips loaded!");
};
