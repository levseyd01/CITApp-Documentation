selector_to_html = {"a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/sidenav-select-staff-example-users-section.webp\" id=\"sidenav-select-staff-example-find-users-section\"><img alt=\"../../_images/sidenav-select-staff-example-users-section.webp\" id=\"sidenav-select-staff-example-find-users-section\" loading=\"lazy\" src=\"../../_images/sidenav-select-staff-example-users-section.webp\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Navigation, Staff Page Example, Find Users Section</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/sidenav-dropdowns-closed-location.webp\" id=\"navigation-sidenav-location\"><img alt=\"../../_images/sidenav-dropdowns-closed-location.webp\" id=\"navigation-sidenav-location\" loading=\"lazy\" src=\"../../_images/sidenav-dropdowns-closed-location.webp\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Navigation, Sidenav Location</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../_images/sidenav-select-staff-example.webp\" id=\"sidenav-select-staff-example\"><img alt=\"../../_images/sidenav-select-staff-example.webp\" id=\"sidenav-select-staff-example\" loading=\"lazy\" src=\"../../_images/sidenav-select-staff-example.webp\" style=\"width: 50%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Navigation, Staff Page</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#general-sidebar-navigation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">General Sidebar Navigation<a class=\"headerlink\" href=\"#general-sidebar-navigation\" title=\"Link to this heading\">#</a></h1><p>In general, you can navigate through the site using the left-hand sidebar:</p>", "a[href=\"toggle-primary-sidebar.html#how-to-toggle-primary-sidebar\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to Toggle Primary Sidebar<a class=\"headerlink\" href=\"#how-to-toggle-primary-sidebar\" title=\"Link to this heading\">#</a></h1><p>The Primary Sidenavigation menu can be found along the leftside of the page. You\u2019ll know if it\u2019s collapsed if you don\u2019t see any words for the names of the tabs:</p>", "a[href=\"#sidebar-navigation-example-staff-page\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sidebar Navigation Example: Staff Page<a class=\"headerlink\" href=\"#sidebar-navigation-example-staff-page\" title=\"Link to this heading\">#</a></h2><p><strong>Example:</strong> Finding the <span class=\"page-reference\"><span class=\"visually-hidden\">Page: </span><span>Staff Page</span></span>.</p>"}
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
