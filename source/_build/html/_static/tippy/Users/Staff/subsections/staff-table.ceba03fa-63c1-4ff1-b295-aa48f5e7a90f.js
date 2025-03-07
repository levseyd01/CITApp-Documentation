selector_to_html = {"a[href=\"#staff-list-table\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff List Table<a class=\"headerlink\" href=\"#staff-list-table\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Staff Page</span></span> opens up to the <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>Staff List Table</span></span>:</p>"}
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
