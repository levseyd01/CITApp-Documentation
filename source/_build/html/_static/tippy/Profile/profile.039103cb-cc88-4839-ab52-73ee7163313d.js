selector_to_html = {"a[href=\"#navigating-to-the-profile-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Navigating to the Profile Section<a class=\"headerlink\" href=\"#navigating-to-the-profile-section\" title=\"Link to this heading\">#</a></h2><p>You can find the <strong>Profile</strong> section along the left-hand side of the page:</p>", "a[href=\"#profile-sections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Profile Sections<a class=\"headerlink\" href=\"#profile-sections\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../_images/PrimarySidebar-toggle.jpeg\"><img alt=\"../_images/PrimarySidebar-toggle.jpeg\" src=\"../_images/PrimarySidebar-toggle.jpeg\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Toggle Primary Sidebar button.</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../_images/PrimarySidebar-Open.jpeg\"><img alt=\"../_images/PrimarySidebar-Open.jpeg\" src=\"../_images/PrimarySidebar-Open.jpeg\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sidebar Expanded</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#profile\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Profile<a class=\"headerlink\" href=\"#profile\" title=\"Link to this heading\">#</a></h1><p>The <strong>Profile</strong> screen allows you to view and edit your company\u2019s profile information, including:</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../_images/PrimarySidebar-Collapsed.jpeg\"><img alt=\"../_images/PrimarySidebar-Collapsed.jpeg\" src=\"../_images/PrimarySidebar-Collapsed.jpeg\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Collapsed Primary Sidebar</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#menu-icon\"]": "<img src='/en/stable-edit/_static/solo_app/Universal/icons/menu-icon.jpeg' alt='Menu Icon' style='width:100%;'>"}
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
