selector_to_html = {"a[href=\"#setitemsperpage\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">setItemsPerPage<a class=\"headerlink\" href=\"#setitemsperpage\" title=\"Link to this heading\">#</a></h1><p>This function allows you to toggle the dropdowns at the bottom of the pages.</p><p><img alt=\"Items Per Page Dropdown\" loading=\"lazy\" src=\"../../../_images/items-per-page-dropdown.jpg\"/></p>"}
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
