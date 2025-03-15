selector_to_html = {"a[href=\"#my-accounts-category\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">My Accounts Category<a class=\"headerlink\" href=\"#my-accounts-category\" title=\"Link to this heading\">#</a></h2><p>The <strong>CIT App</strong> will always open up to the <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>My Accounts Page</span></span></p>", "a[href=\"Universal/universal.html#user-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">User Details</a><a class=\"headerlink\" href=\"#user-details\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#cit-app-cit-services\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CIT App (CIT Services)<a class=\"headerlink\" href=\"#cit-app-cit-services\" title=\"Link to this heading\">#</a></h1><p>Welcome to the documentation for the <span class=\"item-reference\"><span class=\"visually-hidden\">Item: </span><span>CIT Services</span></span> version of the <strong>CIT App</strong>. See below to get started.</p>", "a[href=\"Universal/universal.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Commmon<a class=\"headerlink\" href=\"#commmon\" title=\"Link to this heading\">#</a></h1><p>This section is meant to house all of the information needed to navigate through portions of the App that come up most frequently.</p>", "a[href=\"Universal/universal.html#extras\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">Extras</a><a class=\"headerlink\" href=\"#extras\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"_images/overview-screen.webp\"><img alt=\"_images/overview-screen.webp\" loading=\"lazy\" src=\"_images/overview-screen.webp\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">CIT App, My Accounts Screen, Homepage</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"Universal/universal.html#navigation-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\">Navigation Section</a><a class=\"headerlink\" href=\"#navigation-section\" title=\"Link to this heading\">#</a></h2>", "a[href=\"Universal/universal.html#edit-permissions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Edit Permissions</a><a class=\"headerlink\" href=\"#edit-permissions\" title=\"Link to this heading\">#</a></h2>", "a[href=\"Universal/universal.html#documents\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Documents</a><a class=\"headerlink\" href=\"#documents\" title=\"Link to this heading\">#</a></h2>"}
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
