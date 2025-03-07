selector_to_html = {"a[href=\"#id5\"]": "<figure class=\"align-center\" id=\"id5\">\n<a class=\"reference internal image-reference\" href=\"../../_images/PrimarySidebar-Open.webp\"><img alt=\"../../_images/PrimarySidebar-Open.webp\" loading=\"lazy\" src=\"../../_images/PrimarySidebar-Open.webp\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sidebar Expanded</span><a class=\"headerlink\" href=\"#id5\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#general-sidebar-navigation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">General Sidebar Navigation<a class=\"headerlink\" href=\"#general-sidebar-navigation\" title=\"Link to this heading\">#</a></h1><p>In general, you can navigate through the site using the left-hand sidebar:</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/sidenav-dropdowns-closed-location.jpg\" id=\"navigation-sidenav-location\"><img alt=\"../../_images/sidenav-dropdowns-closed-location.jpg\" id=\"navigation-sidenav-location\" loading=\"lazy\" src=\"../../_images/sidenav-dropdowns-closed-location.jpg\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Navigation, Sidenav Location</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/PrimarySidebar-Collapsed.webp\"><img alt=\"../../_images/PrimarySidebar-Collapsed.webp\" loading=\"lazy\" src=\"../../_images/PrimarySidebar-Collapsed.webp\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Collapsed Primary Sidebar</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../_images/PrimarySidebar-toggle.webp\"><img alt=\"../../_images/PrimarySidebar-toggle.webp\" loading=\"lazy\" src=\"../../_images/PrimarySidebar-toggle.webp\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Toggle Primary Sidebar button.</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#sidebar-navigation-example-staff-page\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sidebar Navigation Example: Staff Page<a class=\"headerlink\" href=\"#sidebar-navigation-example-staff-page\" title=\"Link to this heading\">#</a></h2><p><strong>Example:</strong> Finding the <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Staff Page</span></span>.</p>", "a[href=\"#menu-icon\"]": "<img src='/_static/solo_app/Universal/icons/menu-icon.webp' alt='Menu Icon' style='width:100%;'>"}
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
