selector_to_html = {"a[href=\"#searching-for-entities\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Searching for Entities<a class=\"headerlink\" href=\"#searching-for-entities\" title=\"Link to this heading\">#</a></h1><p>You can also search for specific entities using the search functionality:</p>", "a[href=\"#entity-actions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Entity Actions<a class=\"headerlink\" href=\"#entity-actions\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"column-reference\"><span class=\"visually-hidden\">Column: </span><span>Actions</span></span> column provides several operations you can perform on each entity:</p>"}
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
