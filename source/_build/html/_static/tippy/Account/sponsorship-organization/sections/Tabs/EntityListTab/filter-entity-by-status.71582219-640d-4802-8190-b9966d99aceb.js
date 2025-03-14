selector_to_html = {"a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../_static/solo_app/Universal/view-sponsorship-organization/entity-list-tab/sponsorship-entity-list-tab-status-filter.webp\" id=\"sponsorship-entity-list-tab-status-filter\"><img alt=\"../_static/solo_app/Universal/view-sponsorship-organization/entity-list-tab/sponsorship-entity-list-tab-status-filter.webp\" id=\"sponsorship-entity-list-tab-status-filter\" loading=\"lazy\" src=\"../_static/solo_app/Universal/view-sponsorship-organization/entity-list-tab/sponsorship-entity-list-tab-status-filter.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Entity List Tab, Status Filter Dropdown</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#filtering-entities-by-status\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Filtering Entities by Status<a class=\"headerlink\" href=\"#filtering-entities-by-status\" title=\"Link to this heading\">#</a></h1><p>You can filter the <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Entity List</span></span> table by status, or search for a specific entity by name.</p>"}
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
