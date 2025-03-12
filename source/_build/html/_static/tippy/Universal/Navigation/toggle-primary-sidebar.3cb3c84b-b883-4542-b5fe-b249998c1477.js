selector_to_html = {"a[href=\"#how-to-toggle-primary-sidebar\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">How to Toggle Primary Sidebar<a class=\"headerlink\" href=\"#how-to-toggle-primary-sidebar\" title=\"Link to this heading\">#</a></h1><p>The Primary Sidenavigation menu can be found along the leftside of the page. You\u2019ll know if it\u2019s collapsed if you don\u2019t see any words for the names of the tabs:</p>", "a[href=\"#id7\"]": "<figure class=\"align-center\" id=\"id7\">\n<a class=\"reference internal image-reference\" href=\"../../_images/PrimarySidebar-Open.webp\"><img alt=\"../../_images/PrimarySidebar-Open.webp\" loading=\"lazy\" src=\"../../_images/PrimarySidebar-Open.webp\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sidebar Expanded</span><a class=\"headerlink\" href=\"#id7\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/PrimarySidebar-toggle.webp\"><img alt=\"../../_images/PrimarySidebar-toggle.webp\" loading=\"lazy\" src=\"../../_images/PrimarySidebar-toggle.webp\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Primary Sidebar Toggle Location, Collapsed Sidebar</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../_images/PrimarySidebar-Open.webp\"><img alt=\"../../_images/PrimarySidebar-Open.webp\" loading=\"lazy\" src=\"../../_images/PrimarySidebar-Open.webp\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sidebar Expanded</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id6\"]": "<figure class=\"align-center\" id=\"id6\">\n<a class=\"reference internal image-reference\" href=\"../../_images/PrimarySidebar-toggle.webp\"><img alt=\"../../_images/PrimarySidebar-toggle.webp\" loading=\"lazy\" src=\"../../_images/PrimarySidebar-toggle.webp\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Toggle Primary Sidebar button.</span><a class=\"headerlink\" href=\"#id6\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/PrimarySidebar-Collapsed.webp\"><img alt=\"../../_images/PrimarySidebar-Collapsed.webp\" loading=\"lazy\" src=\"../../_images/PrimarySidebar-Collapsed.webp\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Collapsed Primary Sidebar</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id5\"]": "<figure class=\"align-center\" id=\"id5\">\n<a class=\"reference internal image-reference\" href=\"../../_images/PrimarySidebar-toggle.webp\"><img alt=\"../../_images/PrimarySidebar-toggle.webp\" loading=\"lazy\" src=\"../../_images/PrimarySidebar-toggle.webp\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Primary Sidebar Toggle Location, Collapsed Sidebar</span><a class=\"headerlink\" href=\"#id5\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#menu-icon\"]": "<img src='/en/stable-edit/_static/solo_app/Universal/icons/menu-icon.webp' alt='Menu Icon' style='width:100%;'>"}
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
