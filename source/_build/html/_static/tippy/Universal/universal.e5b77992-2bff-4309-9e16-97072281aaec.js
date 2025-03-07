selector_to_html = {"a[href=\"#edit-permissions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Edit Permissions<a class=\"headerlink\" href=\"#edit-permissions\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#user-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">User Details<a class=\"headerlink\" href=\"#user-details\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#commmon\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Commmon<a class=\"headerlink\" href=\"#commmon\" title=\"Link to this heading\">#</a></h1><p>This section is meant to house all of the information needed to navigate through portions of the App that come up most frequently.</p>", "a[href=\"#documents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Documents<a class=\"headerlink\" href=\"#documents\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#navigation-section\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Navigation Section<a class=\"headerlink\" href=\"#navigation-section\" title=\"Link to this heading\">#</a></h1><h2>Documents<a class=\"headerlink\" href=\"#documents\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#extras\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Extras<a class=\"headerlink\" href=\"#extras\" title=\"Link to this heading\">#</a></h2>"}
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
