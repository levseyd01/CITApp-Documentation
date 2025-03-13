selector_to_html = {"a[href=\"#navigating-the-entity-list-tab\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the Entity List Tab<a class=\"headerlink\" href=\"#navigating-the-entity-list-tab\" title=\"Link to this heading\">#</a></h2><p>You can filter the Entity List Table by status, or you can search for a specific entity by name.</p><p><strong>To Filter Entities by Status:</strong></p>", "a[href=\"#entity-list-tab\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Entity List Tab<a class=\"headerlink\" href=\"#entity-list-tab\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"tab-reference\"><span class=\"visually-hidden\">Tab: </span><span>Entity List</span></span> tab provides a comprehensive list of all entities associated with the <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Sponsorship Organization</span></span>.</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../../../../_images/sponsorship-entity-list-tab-status-filter.webp\" id=\"sponsorship-entity-list-tab-status-filter\"><img alt=\"../../../../../_images/sponsorship-entity-list-tab-status-filter.webp\" id=\"sponsorship-entity-list-tab-status-filter\" loading=\"lazy\" src=\"../../../../../_images/sponsorship-entity-list-tab-status-filter.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Entity List Tab, Status Filter Dropdown</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../../../../_images/sponsorship-entity-list-tab-location-of-tab.webp\" id=\"sponsorship-entity-list-tab\"><img alt=\"../../../../../_images/sponsorship-entity-list-tab-location-of-tab.webp\" id=\"sponsorship-entity-list-tab\" loading=\"lazy\" src=\"../../../../../_images/sponsorship-entity-list-tab-location-of-tab.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sponsorship Organization, Entity List Tab</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
