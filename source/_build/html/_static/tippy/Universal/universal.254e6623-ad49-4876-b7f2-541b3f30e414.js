selector_to_html = {"a[href=\"#extras\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">Extras</a><a class=\"headerlink\" href=\"#extras\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#documents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\">Documents</a><a class=\"headerlink\" href=\"#documents\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#user-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">User Details</a><a class=\"headerlink\" href=\"#user-details\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#edit-permissions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Edit Permissions</a><a class=\"headerlink\" href=\"#edit-permissions\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#navigating-the-app\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating the App<a class=\"headerlink\" href=\"#navigating-the-app\" title=\"Link to this heading\">#</a></h1><p>This section is meant to house all of the information needed to navigate through portions of the App that come up most frequently.</p>"}
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
