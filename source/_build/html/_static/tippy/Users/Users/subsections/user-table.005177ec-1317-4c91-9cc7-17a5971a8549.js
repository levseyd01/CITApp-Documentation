selector_to_html = {"a[href=\"#user-list-table\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User List Table<a class=\"headerlink\" href=\"#user-list-table\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"table-reference\"><span class=\"visually-hidden\">Table: </span><span>User List Table</span></span> summarizes key details for each staff member, including:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"Users/_static/solo_app/User/Users/user-user-column-options.webp\" id=\"user-homepage\"><img alt=\"Users/_static/solo_app/User/Users/user-user-column-options.webp\" id=\"user-homepage\" loading=\"lazy\" src=\"Users/_static/solo_app/User/Users/user-user-column-options.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">User, User, Column Options</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
