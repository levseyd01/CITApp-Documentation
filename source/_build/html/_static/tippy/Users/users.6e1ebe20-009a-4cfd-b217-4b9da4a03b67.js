selector_to_html = {"a[href=\"#user\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User<a class=\"headerlink\" href=\"#user\" title=\"Link to this heading\">#</a></h1><p>The <strong>User</strong> section allows you to do the following for both <strong>Staff</strong> and <strong>User</strong> accounts:</p>", "a[href=\"#navigating-to-each-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating to Each Section<a class=\"headerlink\" href=\"#navigating-to-each-section\" title=\"Link to this heading\">#</a></h2><p>You can find both the <strong>User</strong> and <strong>Staff</strong> section along the left-hand side of the page:</p>", "a[href=\"Staff/managing-staff-accounts.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Staff<a class=\"headerlink\" href=\"#staff\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Staff Page</span></span> has the following features:</p>"}
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
