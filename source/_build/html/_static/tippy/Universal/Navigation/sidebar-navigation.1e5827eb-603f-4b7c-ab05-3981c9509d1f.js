selector_to_html = {"a[href=\"#general-sidebar-navigation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">General Sidebar Navigation<a class=\"headerlink\" href=\"#general-sidebar-navigation\" title=\"Link to this heading\">#</a></h1><p>In general, you can navigate through the site using the left-hand sidebar:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/sidenav-dropdowns-closed-location.webp\" id=\"navigation-sidenav-location\"><img alt=\"../../_images/sidenav-dropdowns-closed-location.webp\" id=\"navigation-sidenav-location\" loading=\"lazy\" src=\"../../_images/sidenav-dropdowns-closed-location.webp\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Navigation, Sidenav Location</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#sidebar-navigation-example-staff-page\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sidebar Navigation Example: Staff Page<a class=\"headerlink\" href=\"#sidebar-navigation-example-staff-page\" title=\"Link to this heading\">#</a></h2><p><strong>Example:</strong> Finding the <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Staff Page</span></span>.</p>", "a[href=\"toggle-primary-sidebar.html#how-to-toggle-primary-sidebar\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to Toggle Primary Sidebar<a class=\"headerlink\" href=\"#how-to-toggle-primary-sidebar\" title=\"Link to this heading\">#</a></h1>"}
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
