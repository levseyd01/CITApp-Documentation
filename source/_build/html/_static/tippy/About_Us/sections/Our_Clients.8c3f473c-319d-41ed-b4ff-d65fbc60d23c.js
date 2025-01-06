selector_to_html = {"a[href=\"#our-clients\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Our Clients<a class=\"headerlink\" href=\"#our-clients\" title=\"Link to this heading\">#</a></h1><p>Creating recordkeeping models that perfectly meet your company\u2019s needs</p><p>Below is a list of our clients. If you need to contact a specific company, use the search form, or browse the list by clicking on one of the letters.</p>"}
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
