selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../_images/PrimarySidebar-Collapsed.webp\"><img alt=\"../_images/PrimarySidebar-Collapsed.webp\" loading=\"lazy\" src=\"../_images/PrimarySidebar-Collapsed.webp\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Collapsed Primary Sidebar</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#navigating-to-each-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating to Each Section<a class=\"headerlink\" href=\"#navigating-to-each-section\" title=\"Link to this heading\">#</a></h2><p>You can find both the <strong>User</strong> and <strong>Staff</strong> section along the left-hand side of the page:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../_images/PrimarySidebar-toggle.webp\"><img alt=\"../_images/PrimarySidebar-toggle.webp\" loading=\"lazy\" src=\"../_images/PrimarySidebar-toggle.webp\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Toggle Primary Sidebar button.</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#user\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User<a class=\"headerlink\" href=\"#user\" title=\"Link to this heading\">#</a></h1><p>The <strong>User</strong> section allows you to do the following for both <strong>Staff</strong> and <strong>User</strong> accounts:</p>", "a[href=\"Users/managing-user-accounts.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Users<a class=\"headerlink\" href=\"#users\" title=\"Link to this heading\">#</a></h1><p>The <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Users Page</span></span> has the following features:</p>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../_images/PrimarySidebar-Open.webp\"><img alt=\"../_images/PrimarySidebar-Open.webp\" loading=\"lazy\" src=\"../_images/PrimarySidebar-Open.webp\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sidebar Expanded</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#menu-icon\"]": "<img src='/en/stable-edit/_static/solo_app/Universal/icons/menu-icon.jpeg' alt='Menu Icon' style='width:100%;'>"}
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
