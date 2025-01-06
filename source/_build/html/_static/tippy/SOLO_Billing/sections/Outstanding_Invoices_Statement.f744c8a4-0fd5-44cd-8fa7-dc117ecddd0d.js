selector_to_html = {"a[href=\"#solo-outstanding-invoices-statement\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">SOLO Outstanding Invoices Statement<a class=\"headerlink\" href=\"#solo-outstanding-invoices-statement\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#checklist\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Checklist<a class=\"headerlink\" href=\"#checklist\" title=\"Link to this heading\">#</a></h1>"}
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
