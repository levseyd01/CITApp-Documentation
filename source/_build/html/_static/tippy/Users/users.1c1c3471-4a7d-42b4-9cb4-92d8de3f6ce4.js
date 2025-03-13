selector_to_html = {"a[href=\"#user\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User<a class=\"headerlink\" href=\"#user\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"section-reference\"><span class=\"visually-hidden\">Section: </span><span>User Section</span></span> allows you to manage:</p>", "a[href=\"Users/managing-user-accounts.html#users-user-manage-user-accounts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Users<a class=\"headerlink\" href=\"#users\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Users</span></span> page has the following features:</p>"}
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
